import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import Button from "../globalcomponents/button";
interface TableProps {
  items: Array<object>;
  item: object;
  hide: boolean;
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}

interface TableState {}

class Table extends React.Component<TableProps, TableState> {
  // state : TableState= { :  }

  handleNext() {
    console.log("handle table next");
  }

  renderTable() {
    return this.props.items.map((item) => {
      const values = Object.values(item);
    });
  }

  renderTd(values: any) {
    const td = values.map((value: any) => {
      <td key={value}>{value}</td>;
    });
    return td;
  }

  render() {
    console.log("table render", this.props.items);
    const editIcon = <FontAwesomeIcon icon={faPenToSquare} />;
    const deleteIcon = <FontAwesomeIcon icon={faCircleMinus} />;
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Item Description</th>
              <th scope="col">Qty</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Total</th>
              {!this.props.hide && <th scope="col">Action</th>}
            </tr>
          </thead>
          <tbody>
            {this.props.items.map((item, index) => {
              return (
                <tr key={index}>
                  <td key={index} id={index.toString()}>
                    {index + 1}
                  </td>

                  {Object.values(item).map(function (value, index) {
                    console.log("value", value);
                    const key = index + value;
                    return <td key={key}>{value}</td>;
                  })}

                  {!this.props.hide && (
                    <td className={"d-flex align-items-center"}>
                      <Button
                        name={""}
                        icon={editIcon}
                        className={"form-control"}
                        type={"button"}
                        onClick={() => this.props.onEdit(index)}
                      ></Button>
                      <Button
                        name={""}
                        icon={deleteIcon}
                        className={"form-control"}
                        type={"button"}
                        onClick={() => this.props.onDelete(index)}
                      />
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Table;
