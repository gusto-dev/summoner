import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { dark, light } from './theme' // 환경별 테마 정보 가져오기
import { useTheme } from './useTheme' // 환경별 테마 정보 가져오기

import Button from './components/Button'
import GlobalStyles from './components/global-styles'
import Header from './components/header'
import MainPage from './pages/main'
import ResultPage from './pages/result'
import ErrorPage from './pages/error'

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
`

function App() {
  const [themeMode, toggleTheme] = useTheme() // hook 함수 하용
  const theme = themeMode === 'light' ? light : dark // 테마 환경에 맞는 테마 컬러 가져오기.

  return (
    <Container>
      <GlobalStyles></GlobalStyles>
      <ThemeProvider theme={theme}>
        <S.Main>
          <Button
            title={
              theme === 'light'
                ? '일반모드로 테마 변경하기'
                : '다크모드로 테마 변경하기'
            }
            click={toggleTheme}
          />
        </S.Main>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/result" component={ResultPage} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Container>
  )
}

const S = {}
S.Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.bgColor};
`

export default App
