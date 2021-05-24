const Layout = ({ children, isOpen }) => (
  <>
    <div className="bg-black opacity-75 shadow-lg absolute inset-0 text-center z-10">
    </div>
    <div className="bg-white absolute inset-0 md:inset-1/4 z-20">
      {children}
    </div>
  </>
)

export default Layout