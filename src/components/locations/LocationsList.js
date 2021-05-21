import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import LocationDetail from './LocationDetail'
import AddLocationBtn from './AddLocationBtn'
import { getLocations as loadLocations } from '@actions/locations'

const LocationsList = () => {
  const [locations, setLocations] = useState([])
  const dispatch = useDispatch()

  const getLocations = async () => {
    setLocations([])
    try {
      const locationsResponse = await dispatch(loadLocations())
      locationsResponse.docs.forEach(async doc => {
        const location = doc.data()
        setLocations(oldLocations => [...oldLocations, {...location, id: doc.id}])
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getLocations()
  }, []);

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