import React, { useState, useEffect } from 'react'

import SearchBar from '../components/search-bar'
import History from '../components/history'

function MainPage() {
  const [summoners, setSummoners] = useState(
    JSON.parse(localStorage.getItem('summoners') || '[]'),
  )

  useEffect(() => {
    localStorage.setItem('summoners', JSON.stringify(summoners))
  }, [summoners])

  // 1. 소환사명 추가
  const handleAddSummoner = (text) => {
    const newSummoner = {
      id: Date.now(),
      text,
    }

    // console.log('summoners', summoners)
    setSummoners([newSummoner, ...summoners])
  }

  // 3. 소환사 삭제
  const handleClearSummoner = () => {
    setSummoners('')
  }

  return (
    <>
      <SearchBar onAddSummoner={handleAddSummoner}></SearchBar>
      <History
        summoners={summoners}
        onClearSummoner={handleClearSummoner}
      ></History>
    </>
  )
}

export default MainPage
