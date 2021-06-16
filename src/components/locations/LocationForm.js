const LocationForm = ({ formik }) => {
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="w-screen px-2">
        <div className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Caracas, 10:00am - 6:00pm"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-control"
            required
          />
          {formik.touched.name && formik.errors.name ? <div className="text-red-500 font-bold">{formik.errors.name}</div> : null}
          <button
            className="bg-green-500 p-2 rounded-md font-bold grow text-white m-auto"
            type="submit">
            Guardar
          </button>
        </div>
      </form>
    </>
  )
}

export default LocationForm