import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LocationDetail from './LocationDetail'
import AddLocationBtn from './AddLocationBtn'
import { getLocations } from '@actions/locations'

const LocationsList = () => {
  const dispatch = useDispatch()
  const locations = useSelector(({ locations }) => locations.locations)

  const loadLocations = async () => {
    await dispatch(getLocations())
  }

  useEffect(() => {
    loadLocations()
  }, [])


  return (
    <div className="md:mx-60">
      <h1 className="text-center">Tus Lugares</h1>
      {
        locations.length > 0 && locations.map((location, i) =>
          <LocationDetail
            location={location}
            key={location.id}
          />
        )
      }
      <Link to="/backoffice/locations/add">
        <AddLocationBtn />
      </Link>
    </div>
  )
}

export default LocationsList