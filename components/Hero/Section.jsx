import React from 'react'
import Heros from '../../public/images/_ds3.png'
import Image from 'next/image'
import { Buttons } from '../../stories/Button.stories'

import {
  ImgWrapper,
  WrapperColumn,
  WrapperRow,
  WrapperSec,
  TextWrapper,
  Heading,
  Container,
} from './Elements'

const Hero = ({ heading, imgStart, start, headings }) => {
  return (
    <WrapperSec>
      <Container>
        <WrapperRow imgStart={imgStart}>
          <WrapperColumn>
            <TextWrapper>
              <Heading>
                {heading} <span style={{ color: '#FF5DA2' }}>design</span>{' '}
                <br />
                {headings}
              </Heading>
              <Buttons
                width="16rem"
                background="#FFC3D7"
                fontSize="18px"
                borderRadius="10px"
                height="3.5rem"
                marginTop="12px"
              >
                Try designku now
              </Buttons>
            </TextWrapper>
          </WrapperColumn>
          <WrapperColumn>
            <ImgWrapper start={start}>
              <Image src={Heros} alt="_ds1" />
            </ImgWrapper>
          </WrapperColumn>
        </WrapperRow>
      </Container>
    </WrapperSec>
  )
}

export default Hero
