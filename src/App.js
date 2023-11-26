import {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
