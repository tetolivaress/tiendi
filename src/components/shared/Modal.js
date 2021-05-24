const Layout = ({ children, isOpen }) => (
  <>
    <div className="bg-black opacity-75 shadow-lg absolute top-0 bottom-0 right-0 left-0 text-center z-10">
    </div>
    <div className="bg-white absolute inset-0 md:inset-1/4 z-20">
      {children}
    </div>
  </>
)

export default Layout