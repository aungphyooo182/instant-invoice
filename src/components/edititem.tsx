import React, { Component, FunctionComponent } from "react";
import FormGroup from "../globalcomponents/formgroup";
interface EditItemProps {
  onType?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  desc: string;
  qty: number;
  price: number;
}

const EditItem: FunctionComponent<EditItemProps> = (props: EditItemProps) => {
  return (
    <React.Fragment>
      <FormGroup
        label={"Item Description"}
        className={"form-control"}
        id="desc"
        value={props.desc}
        placeholder={""}
        type={"text"}
        onType={props.onType}
      />
      <FormGroup
        label={"Qty"}
        className={"form-control"}
        id="qty"
        value={props.qty}
        placeholder={""}
        type={"text"}
        onType={props.onType}
      />
      <FormGroup
        label={"Unit Price"}
        className={"form-control"}
        id="price"
        value={props.price}
        placeholder={""}
        type={"text"}
        onType={props.onType}
      />
    </React.Fragment>
  );
};

export default EditItem;
