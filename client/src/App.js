import React, { Component } from 'react';
import Main from './layouts/home';
import './sass/main.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
