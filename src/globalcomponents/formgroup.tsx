import React, { Component, FunctionComponent } from "react";

interface FormGroupProps {
  label: string;
  value?: string | number;
  className: string;
  id: string;
  placeholder: string;
  type: "text" | "password" | "textarea";
  onType?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTypeArea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormGroup: FunctionComponent<FormGroupProps> = (
  props: FormGroupProps
) => {
  const { label, value, className, id, placeholder, type, onType, onTypeArea } =
    props;
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      {type == "textarea" ? (
        <textarea className="form-control" onChange={onTypeArea} />
      ) : (
        <input
          value={value}
          type={type}
          className={className}
          id={id}
          name={id}
          placeholder={placeholder}
          onChange={onType}
        />
      )}
    </div>
  );
};

export default FormGroup;
