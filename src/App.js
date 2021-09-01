import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import BooksPage from './pages/BooksPage/booksPage.js';
import LoginForm from './pages/LoginPage/loginForm.js';

class App extends Component{
  render(){
    
    return(
      <Router>
        <Switch> 
          <Route exact path="/">
            <LoginForm />
          </Route>
          <Route path="/books-page">
            <BooksPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;


//{ token ? 
            //  <Redirect to={{pathname: "/books-page"}}  component={BooksPage} />
            //: 
            //  <Redirect to={{pathname: "/"}} component={LoginForm} />
            //}
