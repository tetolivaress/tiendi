const resizeImage = (src, width = 480) => {
  let img = new Image()
  img.src = src
  return new Promise((resolve, reject) => {
    img.onload = () => {
      const allowedImages = ['image/jpeg', 'image/jpg', 'image/png']
      const invalidImage = allowedImages.filter(allowed => allowed === src.type).length
      console.log((src.type));
      if(invalidImage) reject('Invalid Format')
      
      let canvas = document.createElement("canvas")
      let ctx = canvas.getContext("2d")
      // Set Canvas Height And Width According to Image Size And Scale
      const isLandscape = img.width > img.height
      const canvasWidth = isLandscape ? width : (width * img.width) / img.height
      const canvasHeigth = isLandscape ? (img.height * width) / img.width : width
      canvas.setAttribute("width", canvasWidth)
      canvas.setAttribute("height", canvasHeigth)
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      resolve(canvas.toDataURL(src.type, 0.9))
    }
    img.onerror = reject
  })
}

export default resizeImage