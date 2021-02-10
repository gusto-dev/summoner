import React from 'react'
import styled from 'styled-components'

function Button({ title, click }) {
  return (
    <S.Button onClick={click}>
      <span>{title}</span>
    </S.Button>
  )
}

export default Button

const S = {}
S.Button = styled.button`
  margin: 5rem;
  width: 20rem;
  height: 20rem;
  border: none;
  background-color: #6e827f;
  color: ${(props) => props.theme.colors.titleColor}; // 테마 변경 컬러 지정
  border-radius: 8px;
  cursor: pointer;

  span {
    font-size: 1.6rem;
    font-weight: bold;
  }
`
