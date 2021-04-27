const Clothing = ({ clothing }) => (
  <div className="flex flex-col text-center shadow-md">
    <p>{clothing.title}</p>
    <p>{clothing.price}</p>
    <img src={clothing.image}
      alt={`${clothing.category} of tiendi shop`}
      className="object-contain max-h-60"
    />
    <p>{clothing.category}</p>
  </div>
)

export default Clothing