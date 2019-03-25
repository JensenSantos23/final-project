import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import home from './components/mainpage'


import axios from 'axios'
import Signup from './components/sign-up'
import LoginForm from './components/login-form'




// class App extends Component {
//   render() {
//     return (
//        <BrowserRouter>
//             <div className="App">

//               <Navbar/>
//                 <Switch>
//                     <Route exact path="/" component={Home}/>
//                     <Route path="/cart" component={Cart}/>
//                   </Switch>
//              </div>
//        </BrowserRouter>

//     );
//   }
// }

// export default App;




class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {

    return (

      <BrowserRouter>
        <div className="App">

          <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          <Switch>
            {/* route for shop */}
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            {/* route for mainpage or front page */}
            <Route path="/Home" component={home} />

            <Route
              path="/signup"
              render={() =>
                <Signup
                  signup={this.signup}
                />}
            />
            <Route
              path="/login"
              render={() =>
                <LoginForm
                  updateUser={this.updateUser}
                />}
            />
           
          </Switch>
        </div>
      </BrowserRouter>







    );
  }
}

export default App;
