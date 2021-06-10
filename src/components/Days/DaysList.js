import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import DayDetail from './DayDetail'
import AddDayBtn from './AddDayBtn'
import { getDays } from '@actions/days'

const DaysList = () => {
  const dispatch = useDispatch()
  const days = useSelector(({ days }) => days.days)

  const loadDays = async () => {
    await dispatch(getDays())
  }

  useEffect(() => {
    
    loadDays()
  }, [])

  return (
    <div className="md:mx-60">
      <h1 className="text-center">Tus Días de entrega</h1>
      {
        days.length > 0 && days.map((day, i) =>
          <DayDetail
            day={day}
            key={day.id}
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