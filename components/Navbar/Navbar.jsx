import { Nav, NavLogo, NavbarContainer } from './Elements'
import Link from 'next/link'
import { Search } from '../../stories/SearchBox.stories'
import { Buttons } from '../../stories/Button.stories'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Link href="/" passHref>
            <NavLogo>Designku</NavLogo>
          </Link>
          <Search />
        </NavbarContainer>
        <Buttons
          background="#FFC3D7"
          marginTop="12px"
          marginLeft="-10px"
          borderRadius="30px"
        >
          Sign in
        </Buttons>
        <Buttons
          background="#6DD0FE"
          marginTop="12px"
          marginLeft="8px"
          marginRight="20px"
          borderRadius="30px"
          width="7.5rem"
        >
          Sign up
        </Buttons>
      </Nav>
    </>
  )
}

export default Navbar
