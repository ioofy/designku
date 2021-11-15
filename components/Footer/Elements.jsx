import styled from '@emotion/styled'

export const Footer = styled.footer`
  padding: 4.5rem 0 2.5rem;
  color: #000;
  margin-top: 30px;

  @media screen and (max-width: 600px) {
    margin-top: 30px;
  }
`

export const FooterSec = styled.div`
  margin-left: -24px;
  display: grid;
  row-gap: 5rem;
  @media screen and (max-width: 980px) {
    margin-left: 0px;
  }

  @media screen and (max-width: 884px) {
    margin-left: -5px;
  }
`

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  row-gap: 2rem;

  section {
    &:nth-of-type(2) {
      margin-left: 150px;
    }
    &:nth-of-type(3) {
      margin-left: 120px;
    }
    &:nth-of-type(4) {
      margin-left: 150px;
    }
  }

  @media screen and (max-width: 884px) {
    section {
      &:nth-of-type(2) {
        margin-left: 60px;
      }
      &:nth-of-type(3) {
        margin-left: 0px;
      }
      &:nth-of-type(4) {
        margin-left: 0px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    section {
      &:nth-of-type(2) {
        margin-left: 60px;
      }
      &:nth-of-type(3) {
        margin-left: 0px;
      }
      &:nth-of-type(4) {
        margin-left: 60px;
      }
    }
  }

  @media screen and (max-width: 428px) {
    section {
      &:nth-of-type(2) {
        margin-left: 0px;
      }
      &:nth-of-type(3) {
        margin-left: 0px;
      }
      &:nth-of-type(4) {
        margin-left: 0px;
      }
    }
  }
`

export const FooterTitle = styled.h1`
  font-size: 40px;
  letter-spacing: 1px;
  font-family: 'BeyondTMS';
  margin-bottom: 10px;
`

export const FooterDescription = styled.p`
  max-width: 200px;
  font-family: 'Manrope';
  margin-top: 35px;

  @media screen and (max-width: 280px) {
    font-size: 13.5px;
  }
`

export const Social = styled.div`
  font-size: 1.25rem;
  margin-top: 15px;
`

export const Opener = styled.a`
  cursor: pointer;
  margin-right: 15px;
  text-decoration: none;
`

export const FooterSubtitle = styled.h3`
  font-family: 'Grotesks';
  margin-top: 5px;
  font-size: 18px;
  font-weight: 100;
`

export const FooterMenu = styled.ul`
  list-style: none;
  font-family: 'Manrope';
  margin-top: 25px;

  @media screen and (max-width: 280px) {
    font-size: 13.5px;
  }
`

export const FooterItem = styled.li`
  margin-top: 10px;
`

export const FooterLinks = styled.a`
  text-decoration: none;
  color: #000;
`

export const FooterRights = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 280px) {
    font-size: 13.5px;
  }
`

export const FooterRightsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  padding: 0 5px;
  max-width: 1100px;
`

export const FooterCopy = styled.p`
  justify-self: flex-start;
  font-family: 'Manrope';
  display: flex;
  align-items: center;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
`
