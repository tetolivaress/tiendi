const LocationForm = ({ form: { name }, onChange, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit} className="w-screen px-2">
        <div className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Caracas, 10:00am - 6:00pm"
            value={name}
            onChange={onChange}
            className="form-control"
            required
          />
          <button className="bg-green-500 p-2 rounded-md font-bold grow text-white m-auto">Guardar</button>
        </div>
      </form>
    </>
  )
}

export default LocationForm