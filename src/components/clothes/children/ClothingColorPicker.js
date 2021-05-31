import { useEffect, useState } from "react"
import { ChromePicker  } from 'react-color'
import { XIcon } from "@heroicons/react/outline"

const ClothingColorPicker = ({ handleChangeColor }) => {
  const [colors, setColors] = useState([])

  useEffect(() => {
    handleChangeColor(colors)
  }, [colors])

  return (
    <>
      <div>
        <div>
          <ChromePicker
            className="form-control"
            placeholder="colors"
            color={colors}
            onChangeComplete={({ hex }) => setColors([...colors, hex])}
          />
          <div>
            {
              colors.map((color, index) => <span className="h-4 w-4" style={{backgroundColor:color}} key={color+index}></span>)
            }
          </div>
        </div>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
          {
            colors.map((color, index) => (
              <div className="h-6 w-6 p-6 relative rounded-lg" style={{backgroundColor:color}} key={color+index}>
                <XIcon
                  className="absolute top-0 right-0 w-6 h-6 text-white bg-opacity-50 bg-black cursor-pointer rounded-bl-lg rounded-tr-lg"
                  onClick={() => {
                    setColors([...colors.filter(c=>c!==color)])
                  }}
                />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default ClothingColorPicker