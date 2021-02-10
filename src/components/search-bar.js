import React, { useState } from 'react'
import styled from 'styled-components'

function SearchBar({ onAddSummoner }) {
  const [summoner, setSummoner] = useState('')

  const handleSummoner = (e) => {
    setSummoner(e.target.value)
  }

  const handleEnter = (e) => {
    if (summoner && e.keyCode === 13) {
      onAddSummoner(summoner)
      setSummoner('')
    }
  }

  const handleClick = () => {
    if (summoner) {
      onAddSummoner(summoner)
      setSummoner('')
    }
  }

  const hasSummoner = !!summoner

  return (
    <Container>
      <InputContainer>
        <Select>
          <option value="1">KR</option>
          <option value="2">CN</option>
          <option value="3">JP</option>
        </Select>
        <Input
          type="text"
          placeholder="검색어를 입력해주세요"
          active={hasSummoner}
          value={summoner}
          onChange={handleSummoner}
          onKeyDown={handleEnter}
        />
      </InputContainer>
      <Button onClick={handleClick}>버튼</Button>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 640px;
  margin: 200px auto 0;
  box-sizing: border-box;
`
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`
const Input = styled.input`
  flex: 1;
  height: 40px;
  padding: 5px;
  background-color: white;
  font-size: 14px;
  border: 1px solid #333;
`
const Select = styled.select`
  width: 120px;
  height: 40px;
  padding: 5px;
  background-color: white;
  font-size: 14px;
  border: 1px solid #333;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
  }
`
const Button = styled.button`
  width: 80px;
  height: 40px;
  background-color: gray;
  font-size: 14px;
  color: #fff;
  border: 1px solid #333;
  cursor: pointer;
`

export default SearchBar
