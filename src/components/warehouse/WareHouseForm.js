import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import ClothingColorPicker from '@components/clothes/children/ClothingColorPicker'
import ClothingSizeInput from '@components/clothes/children/ClothingSizeInput'

const WareHouseForm = ({
  form,
  categories,
  onChange,
  onSubmit,
  handleImage,
  handleChangeColor,
  handleDeleteColor,
  handleChangeSize,
  handleDeleteSize,
  handleDetailChange
}) => {

  return (
    <div className="w-screen grid grid-cols-1 md:grid-cols-2">
      <form
        className="text-center flex justify-center flex-col p-8"
        onSubmit={onSubmit}
      >
        <input
          className="form-control"
          name="title"
          placeholder="title"
          value={form.title}
          onChange={onChange}
        />
        <input
          className="form-control"
          name="price"
          type="number"
          placeholder="price"
          onChange={onChange}
          value={form.price}
        />
        <input
          className="form-control"
          name="discount"
          type="number"
          placeholder="discount"
          onChange={onChange}
          value={form.discount}
        />
        <label htmlFor="image" className="bg-red-500 m-5 p-5 hover:transform hover:scale-105 transition-all duration-150S">
          selecciona una imagen
        </label>
        <input
          id="image"
          className="hidden form-control"
          name="image"
          placeholder="image"
          onChange={(event) => handleImage(event)}
          type="file"
        />
        <div><img className="w-20 m-auto object-cover" src={form.image}/></div>
        <select
          className="form-control"
          name="categoryId"
          placeholder="category"
          onChange={onChange}
        >
          {
            categories && categories.map(({ id, name }) =>
              <option key={id} value={id}>{name}</option>
            )
          }
        </select>
        <textarea
          className="form-control h-24"
          name="description"
          rows={3}
          placeholder="description"
          onChange={onChange}
          value={form.description}
        />

        <CKEditor
          editor={ ClassicEditor }
          data={form.details}
          // onChange={ ( event, editor ) => setForm({...form, details: editor.getData()}) }
          onChange={(event, editor) => { handleDetailChange(event, editor) }}
        />
        <ClothingColorPicker
          handleChangeColor={handleChangeColor}
          handleDeleteColor={handleDeleteColor}
          colors={form.colors}
        />
        <ClothingSizeInput
          onChange={onChange}
          handleChangeSize={handleChangeSize}
          handleDeleteSize={handleDeleteSize}
          sizes={form.sizes}
          sizeField={form.sizeField}
        />

        <div>
          <label htmlFor="available">
            Disponible
          </label>
          <input
            className="form-control"
            name="available"
            id="available"
            type="checkbox"
            placeholder="available"
            onChange={onChange}
          />
        </div>

        <button className="bg-green-200">Guardar</button>
      </form>
      <div className="m-12 p-12">
        {/* <ClothingPreview clothing={form}/> */}
      </div>
    </div>
  )
}
export default WareHouseForm