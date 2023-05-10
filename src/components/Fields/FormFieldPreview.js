import React from 'react';
import '../../styles/FormFieldPreview.css';


const FormFieldPreview = ({ field }) => {

const renderField = () => {
if (!field) {
return null;
}

switch (field.type) {
  case 'text':
  case 'number':
  case 'date':
    return (
      <input
        type={field.type}
        className="form-control"
        id={field.id}
        placeholder={field.placeholder}
      />
    );
  case 'checkbox':
    return (
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id={field.id} />
        <label className="form-check-label" htmlFor={field.id}>
          {field.name}
        </label>
      </div>
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