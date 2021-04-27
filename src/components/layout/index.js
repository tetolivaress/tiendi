import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <>
    <Header/>
    <div className="mt-16">
      {children}
    </div>
    <Footer/>
  </>
)

export default Layout