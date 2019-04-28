import React, { Component } from 'react';
import './ItemDetails.css';
import { Column, DataTable } from 'primereact/datatable';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';

const { items } = require('../data/instr-stroit.json');

class ItemDetails extends Component {
  state = {
    items: []
  };

  constructor(props, context, state) {
    super(props, context);
    this.state = { ...state, items };
  }

  render() {
    return (
      <div className="item-details">
        <DataTable value={this.state.items}>
          <Column field="order" header="№ п/п"/>
          <Column field="artikul" header="Артикул"/>
          <Column field="name" header="Наименование товаров"/>
          <Column field="size" header="Размер"/>
          <Column field="baseprice" header="Базовая цена"/>
          <Column field="customerprice" header="Ваша цена с НДС"/>
          <Column field="rest" header="в Остаток"/>
          <Column field="measure" header="Ед.Изм."/>
          <Column field="upak" header="Упак."/>
          <Column field="kor" header="Кор."/>
          <Column field="ves" header="Вес"/>
        </DataTable>
        <Toolbar>
          <div className="p-toolbar-group-left">
            <Button icon="pi pi-save" style={{ marginRight: '.25em' }}/>
            <Button icon="pi pi-external-link" className="p-button-success"/>
            <Button icon="pi pi-external-link" className="p-button-warning"/>
            <Button icon="pi pi-download"/>
            <Button icon="pi pi-times" className="p-button-danger"/>
          </div>
        </Toolbar>
      </div>
    );
  }
}

export default ItemDetails;
