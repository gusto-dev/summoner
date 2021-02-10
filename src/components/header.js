import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

const Header = () => {
  const themeContext = useContext(ThemeContext)

  return (
    <Container>
      <Logo></Logo>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background: linear-gradient(270deg, #2c2f43 0%, #546a80 100%) 0% 0%;
  box-shadow: 0px 3px 6px #00000066;
  opacity: 0.9;
`
const Logo = styled.div`
  width: 100px;
`

export default Header
