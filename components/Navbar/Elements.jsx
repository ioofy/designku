import styled from '@emotion/styled'

export const Nav = styled.nav`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 900px;
`

export const NavLogo = styled.a`
  text-decoration: none;
  font-size: 2.2rem;
  display: flex;
  color: #000;
  justify-self: flex-start;
  z-index: 2;
  align-items: center;
`
