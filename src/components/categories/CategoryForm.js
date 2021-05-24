const CategoryForm = ({ form, onChange, onSubmit }) => {
  return (
    <div className="w-screen grid md:grid-cols-3">
      <form onSubmit={onSubmit} className="grid col-start-2">
        <input
          className="form-control"
          name="name"
          placeholder="name"
          value={form.name}
          onChange={onChange}
        />
        <input
          type="checkbox"
          className="form-control"
          name="carousel"
          placeholder="carousel"
          value={form.carousel}
          onChange={onChange}
        />
        <input
          type="number"
          className="form-control"
          name="order"
          placeholder="order"
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

        <button className="bg-green-200 my-2">Guardar</button>
      </form>
    </div>
  );
};

export default CategoryForm;
