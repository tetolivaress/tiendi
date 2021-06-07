import { XIcon } from '@heroicons/react/solid'

const ClothingImagesPicker = ({
  handleImage,
  handleDeleteImage,
  images,
  title
}) => {
  return (
    <>
      <input
        id="image"
        className="hidden form-control"
        name="image"
        placeholder="image"
        onChange={(event) => handleImage(event)}
        type="file"
        multiple
      />
      <div className="grid grid-cols-3 md:grid-cols-4 items-center gap-4">
      { images && images.map((image, i) => (
        <div className="relative" key={i}>
          <img
            className="object-cover"
            src={image}
            alt={title}
          />
          <div
            className="absolute top-0 right-0 w-5 bg-red-500 text-white"
            onClick={() => handleDeleteImage(image)}
          >
            <XIcon />
          </div>
        </div>
      ))
      }
      </div>
    </>
  )
}
 
export default ClothingImagesPicker