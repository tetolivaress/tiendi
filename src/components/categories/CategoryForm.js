const CategoryForm = ({ form, onChange, onSubmit }) => {
  return (
    <div className="w-screen">
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2">
        <input
          className="my-2 p-4 bg-gray-300"
          name="name"
          placeholder="name"
          value={form.name}
          onChange={onChange}
        />
        <div>
          <input
            type="checkbox"
            className="my-2 p-4 bg-gray-300"
            name="carousel"
            placeholder="carousel"
            value={form.carousel}
            onChange={onChange}
          />
        </div>
        <input
          type="number"
          className="my-2 p-4 bg-gray-300"
          name="order"
          placeholder="order"
          value={form.order}
          onChange={onChange}
        />
        <div>
          <label
            htmlFor="image"
            className="bg-red-500 m-5 p-5 hover:transform hover:scale-105 transition-all duration-150S"
          >
            selecciona una imagen
          </label>
          <input
            id="image"
            className="hidden my-2 p-4 bg-gray-300"
            name="image"
            placeholder="image"
            onChange={onChange}
            type="file"
          />
        </div>

        <button className="bg-green-200">Guardar</button>
      </form>
    </div>
  );
};

export default CategoryForm;
