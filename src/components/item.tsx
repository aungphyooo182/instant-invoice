import * as React from "react";
import { Component } from "react";
import Button from "../globalcomponents/button";
import CreateItem from "./createitem";
interface ItemProps {
  isAddBtn: boolean;
  isValid: boolean;
  onCreate: () => void;
  onAdd: () => void;
  onType?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

interface ItemState {}

class Item extends React.Component<ItemProps, ItemState> {
  state: ItemState = { isAddBtn: true };
  render() {
    return (
      <React.Fragment>
        {this.props.isAddBtn ? (
          <Button
            name={"Add Item"}
            className={"form-control btn btn-secondary"}
            type={"button"}
            onClick={this.props.onAdd}
          />
        ) : (
          <CreateItem
            isValid={this.props.isValid}
            onType={this.props.onType}
            onCreate={this.props.onCreate}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Item;
