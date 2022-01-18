import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './state/store';
import CountriesList from './components/countries-list';
import './App.css';
import Filter from './components/filter';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Countries Of The World</h1>
          </header>
          <Filter />
          <CountriesList />
        </div>
      </Provider>
    );
  }
}

export default App;
