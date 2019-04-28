import React, { Component } from 'react';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import ItemList from './item-list/ItemList';
import ItemDetails from './details/ItemDetails';

class App extends Component {
  render() {
    return (
      <div>
        <ItemList/>
        <ItemDetails/>
      </div>
    );
  }
}

export default App;
