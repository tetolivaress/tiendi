import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import DayDetail from './DayDetail'
import AddDayBtn from './AddDayBtn'
import { getDays as loadDays } from '@actions/days'

const DaysList = () => {
  const [days, setDays] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const getDays = async () => {
      setDays([])
      try {
        const daysResponse = await dispatch(loadDays())
        daysResponse.docs.forEach(async doc => {
          const location = doc.data()
          setDays(oldDays => [...oldDays, {...location, id: doc.id}])
        })
      } catch (error) {
        console.log(error)
      }
    }
    getDays()
  }, [dispatch]);

  return (
    <div className="md:mx-60">
      <h1 className="text-center">Tus Lugares</h1>
      {
        days.length > 0 && days.map((location, i) =>
          <DayDetail
            location={location}
            key={location.id}
          />
        )
      }
      <Link to="/backoffice/days/add">
        <AddDayBtn />
      </Link>
    </div>
  )
}

export default DaysList