import React, { Component, FunctionComponent } from "react";
import Button from "../globalcomponents/button";
import Preview from "./preview";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
interface SavePdfProps {
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
}

const SavePdf: FunctionComponent<SavePdfProps> = (props: SavePdfProps) => {
  const print = () => {
    var doc = new jsPDF("p", "mm", "a4");

    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();
    const input = document.getElementById("test") as HTMLElement;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0, width, height);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  };
  return (
    <React.Fragment>
      <Preview
        hide={true}
        state={props.state}
        onEdit={() => console.log}
        onDelete={() => console.log}
      />

      <Button
        name={"Download PDF"}
        className={"form-control btn btn-primary"}
        type={"button"}
        onClick={print}
      />
    </React.Fragment>
  );
};

export default SavePdf;
