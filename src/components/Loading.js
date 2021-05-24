function Loading ({ isOpen  }) {

  if (!isOpen) {
    return null
  }

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-75 flex justify-center items-center text-white z-40">
        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 48 48">
          <circle r="70" fill="white" stroke="white"></circle>
        </svg>
        Cargando
    </div>
  )
}

export default Loading