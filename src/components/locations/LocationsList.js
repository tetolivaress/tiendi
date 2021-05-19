import LocationDetail from './LocationDetail'
import AddLocationBtn from './AddLocationBtn'
import Loading from '@components/Loading'
import { useEffect, useState } from 'react'
import { useFirestore } from 'react-redux-firebase'
import { Link } from 'react-router-dom'

const LocationsList = () => {
  const [locations, setLocations] = useState([])
  const firestore = useFirestore()

  const getLocations = async () => {
    const locationsResponse = await firestore
      .collection('locations')
      .get()
    locationsResponse.docs.forEach(async doc => {
      const location = doc.data()
      setLocations(oldLocations => [...oldLocations, location])
    })
  }

  useEffect(() => {
    getLocations()
  }, []);

  return (
    <div className="md:mx-60">
      <p className="text-center">Tus Lugares</p>
      {
        locations.length > 0 && locations.map(location => <LocationDetail location={location} key={location.id} />)
      }
      <Link to="/backoffice/categories/add">
        <AddLocationBtn />
      </Link>
    </div>
  )
}

export default LocationsList