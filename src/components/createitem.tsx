import React, { Component, FunctionComponent } from "react";
import Button from "../globalcomponents/button";
import FormGroup from "../globalcomponents/formgroup";
interface CreateItemProps {
  isValid: boolean;
  onCreate: () => void;
  onType?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const CreateItem: FunctionComponent<CreateItemProps> = (
  props: CreateItemProps
) => {
  return (
    <React.Fragment>
      {!props.isValid && (
        <div className="alert alert-danger" role="alert">
          All fields need to fill!
        </div>
      )}
      <FormGroup
        label={"Item Description"}
        className={"form-control"}
        id="desc"
        placeholder={""}
        type={"text"}
        onType={props.onType}
      />
      <FormGroup
        label={"Qty"}
        className={"form-control"}
        id="qty"
        placeholder={""}
        type={"text"}
        onType={props.onType}
      />
      <FormGroup
        label={"Unit Price"}
        className={"form-control"}
        id="price"
        placeholder={""}
        type={"text"}
        onType={props.onType}
      />
      <Button
        name={"Save Item"}
        className={"form-control btn btn-success"}
        type={"button"}
        onClick={props.onCreate}
      />
    </React.Fragment>
  );
};

export default CreateItem;
