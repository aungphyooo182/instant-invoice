import React, { Component, FunctionComponent } from "react";
interface ButtonProps {
  name: string;
  className: string;
  type: "button" | "submit" | "reset" | undefined;
  icon?: any;
  onClick: () => void;
}

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  return (
    <React.Fragment>
      {props.icon ? (
        <div
          className="w-100 h-100 d-flex justify-content-center align-items-center pointer"
          onClick={props.onClick}
        >
          {props.icon}
        </div>
      ) : (
        <button
          type={props.type}
          className={props.className}
          onClick={props.onClick}
        >
          {props.name}
        </button>
      )}
    </React.Fragment>
  );
};

export default Button;
