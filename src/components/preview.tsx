import React, { Component } from "react";
import Label from "../globalcomponents/label";
import Table from "./table";
interface Previewprops {
  state: {
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
  };
  hide: boolean;
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}

interface PreviewState {}

class Preview extends React.Component<Previewprops, PreviewState> {
  // state = { :  }
  handleConcat(str1: string, str2: string) {
    return (str1 += str2);
  }

  //   print() {
  //     var doc = new jsPDF();
  //     doc.html(ReactDOMServer.renderToStaticMarkup(this.render()));
  //     doc.save("myDocument.pdf");
  //   }

  render() {
    const classForPreview = this.props.hide ? "test" : "preview";
    return (
      <div className={classForPreview} id={classForPreview}>
        <h1 className="w-100 d-flex justify-content-center">
          Itty Bitty Bookshop
        </h1>
        <h3 className="w-100 d-flex justify-content-end">
          Invoice Information
        </h3>
        <Label
          className="w-100 d-flex justify-content-end"
          name={this.handleConcat("Order ID - ", this.props.state.oid)}
        />
        <Label
          className="w-100 d-flex justify-content-end"
          name={this.handleConcat(
            "Order Date - ",
            this.props.state.odate ? this.props.state.odate?.toString() : ""
          )}
        />
        <h3 className="w-100 d-flex justify-content-start">
          Customer Information
        </h3>
        <Label
          className="w-100 d-flex justify-content-start"
          name={this.handleConcat("Name - ", this.props.state.name)}
        />
        <Label
          className="w-100 d-flex justify-content-start"
          name={this.handleConcat(
            "Phone - ",
            this.props.state.phone ? this.props.state.phone.toString() : ""
          )}
        />
        <Label
          className="w-100 d-flex justify-content-start"
          name={this.handleConcat("Address - ", this.props.state.address)}
        />
        {console.log(this.props.hide, "Hiding is")}
        <Table
          hide={this.props.hide}
          items={this.props.state.items}
          item={this.props.state.item}
          onEdit={this.props.onEdit}
          onDelete={this.props.onDelete}
        />
        {this.props.state.total != 0 && (
          <div className="w-100">
            <Label
              className="w-100 d-flex justify-content-end"
              name={this.handleConcat(
                "Total (MMK): ",
                this.props.state.total.toString()
              )}
            />
            <Label
              className="w-100 d-flex justify-content-end"
              name={this.handleConcat(
                "Advance (MMK) ",
                this.props.state.advance.toString()
              )}
            />
            <Label
              className="w-100 d-flex justify-content-end"
              name={this.handleConcat(
                "Balance (MMK): ",
                this.props.state.balance.toString()
              )}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Preview;
