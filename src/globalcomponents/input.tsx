import React, { Component } from "react";

interface InputProps {
  label: string;
  name: string;
  type: string;
  onType: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

function InputComponent(props: InputProps) {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      {props.type == "textarea" ? (
        <textarea
          className="form-control"
          name={props.name}
          onChange={props.onType}
        />
      ) : (
        <input
          name={props.name}
          type={props.type}
          className="form-control"
          onChange={props.onType}
        />
      )}
    </div>
  );
}

export default InputComponent;
