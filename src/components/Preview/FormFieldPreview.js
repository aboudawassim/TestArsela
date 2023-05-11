import React from 'react';
import '../../styles/FormFieldPreview.css';

const FormFieldPreview = ({ field }) => {
  const renderField = () => {
    if (!field) {
      return null;
    }

    switch (field.type) {
      case 'text':
        return (
          <input
            type="text"
            className="form-control"
            id={field.id}
            placeholder={field.placeholder}
            value={field.value}
          />
        );

      case 'number':
      case 'date':
        return (
          <input
            type={field.type}
            className="form-control"
            id={field.id}
            value={field.value}
          />
        );

      case 'checkbox':
      case 'radio':
        return (
          <input
            type={field.type}
            className="form-control"
            id={field.id}
          />
        );

      case 'select':
        return (
          <select
            className="form-control"
            id={field.id}
            onChange={(event) => console.log(event.target.value)}
          >
            <option value="">Select an option</option>
          </select>
        );

      default:
        return null;
    }
  };

  return (
    <div className="form-group row">
      <label htmlFor={field.id} className="col-sm-2 col-form-label">
        {field.name}
      </label>
      <div className="col-sm-10">{renderField()}</div>
    </div>
  );
};

export default FormFieldPreview;
