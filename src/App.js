import React, { Component } from 'react';
import Header from './common/header';
import Login from './page/login';
import Editor from './page/editor'
import styles from './App.module.css';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './page/home';
import Plate from './page/plate';
import Register from './page/register'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className={styles.root}>
            <Header />
            <Route path='/login' exact component={Login} />
            <Route path='/' exact component={Home} />
            <Route path='/plate' exact component={Plate} />
            <Route path='/editor' exact component={Editor} />
            <Route path='/register' exact component={Register} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
