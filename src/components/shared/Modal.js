import { createPortal } from "react-dom"

const Layout = ({ children, isOpen }) => (
  <>
    <div className="bg-black opacity-75 shadow-lg absolute top-0 bottom-0 right-0 left-0 text-center z-10">
    </div>
    <div className="bg-white absolute top-1/4 bottom-1/4 right-1/4 left-1/4 z-20">
      {children}
    </div>
  </>
)

export default Layout