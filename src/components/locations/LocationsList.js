import LocationDetail from './LocationDetail'
import AddLocationBtn from './AddLocationBtn'
import { useEffect, useState } from 'react'
import { useFirestore } from 'react-redux-firebase'
import { Link } from 'react-router-dom'

const LocationsList = () => {
  const [locations, setLocations] = useState([])
  const firestore = useFirestore()

  const getLocations = async () => {
		setLocations([])
    const locationsResponse = await firestore
      .collection('locations')
      .get()
    locationsResponse.docs.forEach(async doc => {
      const location = doc.data()
      setLocations(oldLocations => [...oldLocations, {...location, id: doc.id}])
    })
  }

  useEffect(() => {
    getLocations()
  }, []);

  return (
    <div className="md:mx-60">
      <h1 className="text-center">Tus Lugares</h1>
      {
        locations.length > 0 && locations.map((location, i) => <LocationDetail location={location} key={location.id} />)
      }
      <Link to="/backoffice/locations/add">
        <AddLocationBtn />
      </Link>
    </div>
  )
}

export default LocationsList