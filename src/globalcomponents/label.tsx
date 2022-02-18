import React, { Component, FunctionComponent } from "react";
interface LabelProps {
  name: string;
  className: string;
}

const Label: FunctionComponent<LabelProps> = (props: LabelProps) => {
  return <label className={props.className}>{props.name}</label>;
};

export default Label;
