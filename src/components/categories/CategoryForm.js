const CategoryForm = ({ form, onChange, onSubmit }) => {
  return (
    <div className="w-screen px-2 md:w-1/4 md:m-auto">
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:col-start-2">
        <input
          className="form-control"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={onChange}
        />
        <div>
          <input
            type="checkbox"
            className="form-control  mr-4"
            name="carousel"
            value={form.carousel}
            onChange={onChange}
          />
          <label className="font-bold">Tiene Carrusel</label>
        </div>
        <input
          type="number"
          className="form-control"
          name="order"
          placeholder="Posición"
          value={form.order}
          onChange={onChange}
        />
        <div>
          <label
            htmlFor="image"
            className="grid bg-red-500 p-5 grow"
          >
            selecciona una imagen
          </label>
          <input
            id="image"
            className="hidden form-control"
            name="image"
            placeholder="image"
            onChange={onChange}
            type="file"
          />
        </div>

        <button className="bg-green-200 p-5 my-2">Guardar</button>
      </form>
    </div>
  );
};

export default CategoryForm
