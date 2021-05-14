import ClothingDetail from './ClothingDetail'

const ClothesList = ({ clothes }) => {
  return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {
          clothes && clothes.map(clothing => <ClothingDetail clothing={clothing} />)
        }
      </div>
    )
}

export default ClothesList