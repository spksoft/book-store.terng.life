import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import NotFound from './pages/notFound'
import SearchResult from './pages/searchResult'

class iRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={SearchResult} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default iRouter