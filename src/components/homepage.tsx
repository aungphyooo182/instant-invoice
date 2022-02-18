import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "../globalcomponents/button";
import Item from "./item";
import InvoiceInfo from "./invoiceinfo";
import NavBar from "./navbar";
import PlayGround from "./playground";
export declare interface HomeProps {
  message: string;
}

const HomePage = ({ message }: HomeProps) => (
  <React.Fragment>
    <InvoiceInfo />
  </React.Fragment>
);

export default HomePage;
