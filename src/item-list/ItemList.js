import React, { Component } from 'react';
import { Tree } from 'primereact/tree';
import './ItemList.css';

const { items } = require('../data/item-tree.json');

class ItemList extends Component {
  state = {
    items: []
  };

  constructor(props, context, state) {
    super(props, context);
    this.state = { ...state, items };
  }

  render() {
    return (
      <div className="item-list">
        <Tree value={this.state.items}/>

      </div>

    );
  }
}

export default ItemList;
