import React, { Component } from "react";
import Button from "../globalcomponents/button";
import Input from "../globalcomponents/input";
import { Navigate } from "react-router-dom";
import { stat } from "fs";
import FormGroup from "../globalcomponents/formgroup";
import Item from "./item";
import Table from "./table";
import Label from "../globalcomponents/label";
import Modal from "../globalcomponents/modal";
import EditItem from "./edititem";
import Preview from "./preview";
import { useNavigation } from "@react-navigation/native";
import SavePdf from "./savepdf";

interface InvoiceInfoProps {}

interface InvoiceInfoState {
  oid: string;
  odate?: string;
  name: string;
  address: string;
  phone: number | null;
  item: {
    desc: string;
    qty: number;
    price: number;
    total: number;
  };
  editItem: any;
  redirect: boolean;
  isAddBtn: boolean;
  showModal: boolean;
  items: Array<object>;
  total: number;
  advance: number;
  balance: number;
  modalBody: JSX.Element;
  editIndex: number;
  isValid: boolean;
  showPDF: boolean;
}

class InvoiceInfo extends React.Component<InvoiceInfoProps, InvoiceInfoState> {
  state: InvoiceInfoState = {
    oid: "",
    odate: "",
    name: "",
    address: "",
    phone: 0,
    item: {
      desc: "",
      qty: 0,
      price: 0,
      total: 0,
    },
    editItem: {
      desc: "",
      qty: 1,
      price: 1,
      total: 1,
    },
    redirect: false,
    showModal: false,
    isAddBtn: true,
    items: [],
    total: 0,
    advance: 0,
    balance: 0,
    modalBody: <p>Testing</p>,
    editIndex: 0,
    isValid: true,
    showPDF: false,
  };

  componentDidMount() {
    const state = this.state;
    state.items = [];
  }

  handleAdd() {
    console.log("handle add!");
    const state = this.state;
    state.isAddBtn = false;
    this.setState(state);
  }

  handleItemCreate() {
    const state = this.state;

    state.item.total = state.item.price * state.item.qty;
    state.total += state.item.total;
    state.balance = state.total - state.advance;
    if (state.item.desc != "" && state.item.price != 0 && state.item.qty != 0) {
      state.isAddBtn = true;
      state.items.push(state.item);
      state.isValid = true;
      this.setState(state);
      console.log("Item Created!");
      console.log(this.state);
    } else {
      state.isValid = false;
      this.setState(state);
    }
  }

  handleInput(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { value, name } = event.target;
    const temp = { ...this.state, [name ? name : "address"]: value };
    this.setState(temp);
    console.log("name & value", name, value);
    console.log(this.state);
  }

  handleItemInput(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    console.log(event.target.name);
    const { value, name } = event.target;
    const state = this.state;
    const item = { ...state.item, [name]: value };
    item.total = item.price * item.qty;
    state.item = item;
    state.editItem = item;
    this.setState(state);
    console.log(this.state);
  }

  handleModal(index: number) {
    const state = this.state;
    state.editIndex = index;
    state.editItem = { ...state.items[state.editIndex] };
    state.showModal = true;
    this.setState(state);
  }

  handleItemDelete(index: number) {
    const state = this.state;
    state.items.splice(index, 1);
    var total = 0;
    state.items.map((item: any) => {
      total += item.total;
    });
    state.total = total;
    state.balance = state.total - state.advance;
    this.setState(state);
  }

  prepareModalBody() {
    const state = this.state;
    // state.modalBody = (
    return (
      <EditItem
        desc={state.editItem.desc}
        qty={state.editItem.qty}
        price={state.editItem.price}
        onType={this.handleItemInput.bind(this)}
      />
    );
    // this.setState(state);
    // return this.state.modalBody;
  }

  handleModalClose() {
    const state = this.state;
    state.showModal = false;
    this.setState(state);
  }

  handleModalSave() {
    const state = this.state;
    state.items[state.editIndex] = state.item;
    var total = 0;
    state.items.map((item: any) => {
      total += item.total;
    });
    state.total = total;
    state.balance = state.total - state.advance;
    state.showModal = false;
    this.setState(state);
  }

  showPDF() {
    const state = this.state;
    state.showPDF = true;
    this.setState(state);
  }

  render() {
    const { redirect } = this.state;
    const body = (
      <EditItem
        desc={this.state.editItem.desc}
        qty={this.state.editItem.qty}
        price={this.state.editItem.price}
        onType={this.handleItemInput.bind(this)}
      />
    );
    if (this.state.showPDF) return <SavePdf state={this.state} />;
    else
      return (
        <React.Fragment>
          {this.state.showModal && (
            <Modal
              title="Edit"
              body={body}
              onClose={this.handleModalClose.bind(this)}
              onSave={this.handleModalSave.bind(this)}
            />
          )}
          <form>
            <FormGroup
              label={"Order ID"}
              className={"form-control"}
              id="oid"
              placeholder={""}
              type={"text"}
              onType={this.handleInput.bind(this)}
            />
            <FormGroup
              label={"Order Date"}
              className={"form-control"}
              id="odate"
              placeholder={""}
              type={"text"}
              onType={this.handleInput.bind(this)}
            />
            <FormGroup
              label={"Name"}
              className={"form-control"}
              id="name"
              placeholder={""}
              type={"text"}
              onType={this.handleInput.bind(this)}
            />
            <FormGroup
              label={"Phone"}
              className={"form-control"}
              id="phone"
              placeholder={""}
              type={"text"}
              onType={this.handleInput.bind(this)}
            />
            <FormGroup
              label={"address"}
              className={"form-control"}
              id="address"
              placeholder={""}
              type={"textarea"}
              onTypeArea={this.handleInput.bind(this)}
            />
            <Item
              isValid={this.state.isValid}
              onAdd={this.handleAdd.bind(this)}
              onType={this.handleItemInput.bind(this)}
              onCreate={this.handleItemCreate.bind(this)}
              isAddBtn={this.state.isAddBtn}
            />
            <h1>Preview</h1>
            <Preview
              hide={false}
              state={this.state}
              onEdit={this.handleModal.bind(this)}
              onDelete={this.handleItemDelete.bind(this)}
            />
            {this.state.balance != 0 && (
              <Button
                name={"Next"}
                className={"form-control btn btn-primary"}
                type={"button"}
                onClick={this.showPDF.bind(this)}
              />
            )}
          </form>
        </React.Fragment>
      );
  }
}

export default InvoiceInfo;
