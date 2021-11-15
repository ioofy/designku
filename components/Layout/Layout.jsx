import Footers from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const Layout = (props) => {
  const { children } = props
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footers />
    </>
  )
}

export default Layout
