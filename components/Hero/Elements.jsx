import styled from '@emotion/styled'

export const WrapperSec = styled.div`
  padding: 150px 0;
`

export const WrapperRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`

export const WrapperColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 868px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`

export const TextWrapper = styled.div`
  max-width: 600px;
  padding-top: 0;
  padding-bottom: 60px;
  margin-left: -24px;

  @media screen and (max-width: 980px) {
    padding-bottom: 65px;
    margin-left: 0px;
  }
`

export const Heading = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-left: -5px;
  color: #000045;
  margin-bottom: 20px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-family: 'Grotesk';

  @media screen and (max-width: 428px) {
    font-size: 45px;
    margin-left: 0px;
  }

  @media screen and (max-width: 393px) {
    br {
      display: none;
    }
  }

  @media screen and (max-width: 320px) {
    font-size: 38px;
  }
`

export const ImgWrapper = styled.div`
  max-width: 500px;
  display: flex;
  margin-top: -50px;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};

  img {
    margin-left: 60px !important;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
`
