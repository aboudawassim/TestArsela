import React from 'react';
import FormFieldPreview from './Preview/FormFieldPreview';
import '../styles/FormPreview.css';

const FormPreview = ({ formFields }) => {
  const titleField = Array.isArray(formFields) ? formFields.find(field => field.type === 'title') : null;
  const buttonField = Array.isArray(formFields) ? formFields.find(field => field.type === 'button') : null;

  const otherFields = Array.isArray(formFields)
    ? formFields.filter(field => field.type !== 'title' && field.type !== 'button')
    : [];

  return (
    <div className="form-preview">
      <h2>Form Preview</h2>
      <form>
        {titleField && (
          <div className="form-title">
            <FormFieldPreview field={titleField} />
          </div>
        )}

        <div className="form-row">
          {otherFields.length > 0 && otherFields.map(field => (
            <div className="form-group col-md-6" key={field.id}>
              <FormFieldPreview field={field} />
            </div>
          ))}
        </div>

        {buttonField && (
          <div className="form-button">
            <button>
              <FormFieldPreview field={buttonField} />
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default FormPreview;
