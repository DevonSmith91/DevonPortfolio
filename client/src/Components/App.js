import React from 'react';
import '../CSS/App.css';
import { 
  BrowserRouter as Router,  
  Switch, 
  Route,
  Link } from 'react-router-dom'
import Landing from './Landing'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
    }
  }


  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={()=> <Landing />} />
        </Switch>
      </div>
    );
  }
}

export default App;
