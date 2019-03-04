import React, { Component } from 'react';
import Header from './common/header';
import Register from './page/register';
import styles from './App.module.css';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className={styles.root}>
            <Header />
            <Route path='/register' exact component={Register} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
