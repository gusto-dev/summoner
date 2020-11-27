import React from 'react'

import styled from 'styled-components'

function History({ summoners, onClearSummoner }) {
  if (summoners.length == 0) {
    return <HistoryContainer>최근 검색된 기록이 없습니다.</HistoryContainer>
  }
  return (
    <HistoryContainer>
      <ListContainer>
        {summoners.map(({ id, text }) => {
          return (
            <ListItem key={id}>
              <SubTitle>{text}</SubTitle>
            </ListItem>
          )
        })}
      </ListContainer>
      <RemoveText onClick={onClearSummoner}>전체삭제btn</RemoveText>
    </HistoryContainer>
  )
}

const HistoryContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 640px;
  margin: 20px auto 0;
  box-sizing: border-box;
`
const ListContainer = styled.ul`
  margin-top: 20px;
`
const ListItem = styled.li`
  overflow: hidden;
  margin-top: 10px;
  border: 1px solid #ddd;
`
const SubTitle = styled.p`
  font-weight: 400;
  color: #333;
`
const RemoveText = styled.span`
  display: inline-block;
  margin-top: 20px;
  color: #a7a7a7;
  cursor: pointer;
`

export default History
