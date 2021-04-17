const Home = () => {

  return (
    <div className="h-96 p-12 w-screen text-center flex justify-center flex-col">
      <input
        className="my-2 p-4 bg-gray-300"
        name="title"
        placeholder="title"
      />
      <input
        className="my-2 p-4 bg-gray-300"
        name="price"
        placeholder="price"
      />
      <label for="file" className="bg-red-500 m-5 p-5 hover:transform hover:scale-105 transition-all duration-150S">
        selecciona una imagen
      </label>
      <input
        id="file"
        className="hidden my-2 p-4 bg-gray-300"
        name="image"
        placeholder="image"
        type="file"
      />
      <select
        className="my-2 p-4 bg-gray-300"
        name="image"
        placeholder="image"
        type="file"
      >
        <option>blusa</option>
        <option>pantalon</option>
        <option>vestido</option>
      </select>
    </div>
  )
}
export default Home