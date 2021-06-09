const CategoryDetail = ({ category }) => (
  <section className="grid grid-cols-3 shadow-sm m-4">
    <img src={category.image} alt={category.name} />
    <div className="col-span-2">
      <h2>{category.name}</h2>
      <h2>jajaja</h2>
      <h2>rrrrrr</h2>
      <h2>mmmmmm</h2>
    </div>
  </section>
)

export default CategoryDetail