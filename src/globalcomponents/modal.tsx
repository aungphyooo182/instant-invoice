import React, { Component, FunctionComponent } from "react";
interface ModalProps {
  title: string;
  body: JSX.Element;
  onClose: () => void;
  onSave: () => void;
}

const Modal: FunctionComponent<ModalProps> = (props: ModalProps) => {
  return (
    <div className="modal" tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
            {/* <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button> */}
          </div>
          <div className="modal-body">{props.body}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={props.onSave}
            >
              Save changes
            </button>
            <button
              onClick={props.onClose}
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
