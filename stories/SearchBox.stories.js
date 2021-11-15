/* eslint-disable import/no-anonymous-default-export */
import SearchBox from '../components/SearchBox'
import styled from '@emotion/styled'
import { BiSearchAlt } from 'react-icons/bi'

export default {
  title: 'Components/SearchBox',
  component: SearchBox,
}

const SearchContainer = styled.div`
  position: relative;
  width: ${(props) => (props.size === 'large' ? '100%' : '432px')};
  height: 45px;
  padding: 5px;
  margin-top: 25px;
  background: #ecdbdb;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  display: flex;
  border-radius: 25px;
`

const SearchInput = styled.input`
  padding-left: 50px;
  outline: none;
  border: none;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  font-size: 15px;
  font-family: 'Grotesk';
`

const IconButton = styled.button`
  position: relative;
  box-sizing: border-box;
  margin-top: -2px;
  margin-left: 4px;
  height: 30px;
  width: 30px;
  padding: 4px;
  border: none;
  z-index: 1;
  cursor: pointer;
  background: #ff95c5;
  border-radius: 50%;
  color: #fff;
  &:hover {
    color: #111;
    &:after {
      opacity: 1;
      transform: scale(1);
    }
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    border-radius: 50%;
    z-index: -1;
    background: #000;
    transition: 0.2s ease;
    transform: scale(0.6);
  }
`
export const Search = () => (
  <>
    <div className="wrapper">
      <SearchContainer>
        <IconButton type="submit">
          <BiSearchAlt size={22} />
        </IconButton>
        <SearchInput placeholder="Search design" />
      </SearchContainer>
    </div>
  </>
)
