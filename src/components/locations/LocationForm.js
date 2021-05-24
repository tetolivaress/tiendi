const LocationForm = ({ form: { name }, onChange, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit} className="flex justify-center">
        <div className="flex flex-col items-center">
          <input
            type="text"
            name="name"
            placeholder="Caracas, 10:00am - 6:00pm"
            value={name}
            onChange={onChange}
            className="form-control"
            required
          />
          <button className="bg-green-500 p-2 rounded-md font-bold w-1/2 grow text-white">Guardar</button>
        </div>
      </form>
    </>
  )
}

export default LocationForm