import Header from './Header'

const Layout = ({ children }) => (
  <>
    <Header/>
    <div className="mt-16">
      {children}
    </div>
  </>
)

export default Layout