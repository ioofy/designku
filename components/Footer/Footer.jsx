import React from 'react'
import {
  Footer,
  FooterContent,
  FooterDescription,
  FooterSec,
  FooterTitle,
  Social,
  Opener,
  FooterSubtitle,
  FooterMenu,
  FooterItem,
  FooterLinks,
  FooterRights,
  FooterRightsContainer,
  FooterCopy,
  Container,
} from './Elements'
import { FaBehanceSquare, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footers = () => {
  return (
    <>
      <Footer>
        <Container>
          <hr style={{ marginBottom: '30px', marginLeft: '-25px' }} />
          <FooterSec>
            <FooterContent>
              <section>
                <FooterTitle>Designku.</FooterTitle>
                <FooterDescription>
                  We offering web design, Lets join now.
                </FooterDescription>
                <Social>
                  <Opener
                    href={'//www.facebook.com'}
                    target="_blank"
                    aria-label="facebook"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram style={{ color: '#F037A5' }} />
                  </Opener>
                  <Opener
                    href={'//www.facebook.com'}
                    target="_blank"
                    aria-label="facebook"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter style={{ color: '#3DB2FF' }} />
                  </Opener>
                  <Opener
                    href={'//www.facebook.com'}
                    target="_blank"
                    aria-label="facebook"
                    rel="noopener noreferrer"
                  >
                    <FaBehanceSquare style={{ color: '#053CF7' }} />
                  </Opener>
                </Social>
              </section>

              <section>
                <FooterSubtitle>Designku</FooterSubtitle>
                <FooterMenu>
                  <FooterItem>
                    <FooterLinks to="/#about">Pricing</FooterLinks>
                  </FooterItem>
                  <FooterItem>
                    <FooterLinks to="/#about">Sign in</FooterLinks>
                  </FooterItem>
                  <FooterItem>
                    <FooterLinks to="/#about">Sign up</FooterLinks>
                  </FooterItem>
                </FooterMenu>
              </section>

              <section>
                <FooterSubtitle>Company</FooterSubtitle>
                <FooterMenu>
                  <FooterItem>
                    <FooterLinks to="/#about">About Us</FooterLinks>
                  </FooterItem>
                  <FooterItem>
                    <FooterLinks to="/#about">Our Careers</FooterLinks>
                  </FooterItem>
                  <FooterItem>
                    <FooterLinks to="/#about">Our Testimonials</FooterLinks>
                  </FooterItem>
                </FooterMenu>
              </section>

              <section>
                <FooterSubtitle>Support</FooterSubtitle>
                <FooterMenu>
                  <FooterItem>
                    <FooterLinks to="/#about">Our Developer</FooterLinks>
                  </FooterItem>
                  <FooterItem>
                    <FooterLinks to="/#about">Contact us</FooterLinks>
                  </FooterItem>
                  <FooterItem>
                    <FooterLinks to="/#about">Privacy</FooterLinks>
                  </FooterItem>
                </FooterMenu>
              </section>
            </FooterContent>
          </FooterSec>
        </Container>
        <FooterRights>
          <FooterRightsContainer>
            <FooterCopy>&#169; 2021 Designku.</FooterCopy>
          </FooterRightsContainer>
        </FooterRights>
      </Footer>
    </>
  )
}

export default Footers
