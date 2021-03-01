import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

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
  return (
    <Container>
      <GlobalStyles></GlobalStyles>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/result" component={ResultPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </Container>
  )
}

export default App
