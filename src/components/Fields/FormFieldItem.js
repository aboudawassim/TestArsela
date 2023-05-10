import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateFormField, deleteFormField, addFormPreviewField } from '../../actions/formActions';
import '../../styles/FormFieldItem.css';

const FormFieldItem = ({ field, updateFormField, deleteFormField, addFormPreviewField }) => {
  const [isNameOpen, setIsNameOpen] = useState(true);
  const [isIdOpen, setIsIdOpen] = useState(true);
  const [isClassOpen, setIsClassOpen] = useState(true);
  const [isPlaceholderOpen, setIsPlaceholderOpen] = useState(true);
  const [isOpenRequired, setIsOpenRequired] = useState(false);
  const [isOpenChecked, setIsOpenChecked] = useState(false);
  const [isOpenOption, setIsOpenOption] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'required' && !checked) {
      updateFormField(field.id, { required: false, requiredText: '' });
    } else {
      updateFormField(field.id, { [name]: name === 'checked' ? checked : value });
    }
  };
  

  const handleDeleteField = () => {
    deleteFormField(field.id);
  };


  const handleOptionChange = (index) => (event) => {
    const { value } = event.target;
    const updatedOptions = [...field.options];
    updatedOptions[index] = value;
    updateFormField(field.id, { options: updatedOptions });
  };
  
  const handleRemoveOption = (index) => {
    const updatedOptions = [...field.options];
    updatedOptions.splice(index, 1);
    updateFormField(field.id, { options: updatedOptions });
  };
  
  const handleAddOption = () => {
    const updatedOptions = [...field.options, ''];
    updateFormField(field.id, { options: updatedOptions });
  };

  const toggleName = () => {
    setIsNameOpen(!isNameOpen);
  };

  const toggleId = () => {
    setIsIdOpen(!isIdOpen);
  };

  const toggleClass = () => {
    setIsClassOpen(!isClassOpen);
  };

  const togglePlaceholder = () => {
    setIsPlaceholderOpen(!isPlaceholderOpen);
  };

  const toggleOpenRequired = () => {
    setIsOpenRequired(true);
  };

  const toggleCloseRequired = () => {
    setIsOpenRequired(false);
  };

  const toggleOpenChecked = () => {
    setIsOpenChecked(true);
  };
  
  const toggleCloseChecked = () => {
    setIsOpenChecked(false);
  };
  
  const toggleOpenOption = () => {
    setIsOpenOption(true);
  };
  
  const toggleCloseOption = () => {
    setIsOpenOption(false);
  };
  

  return (
    <div className="form-field-item">
      <h3>{field.type} Field</h3>
      <button className="close-button" onClick={toggleName}>
        {isNameOpen ? 'Close Name' : 'Open Name'}
      </button>
      <button className="close-button" onClick={toggleId}>
        {isIdOpen ? 'Close ID' : 'Open ID'}
      </button>
      <button className="close-button" onClick={toggleClass}>
        {isClassOpen ? 'Close Class' : 'Open Class'}
      </button>
      <button className="close-button" onClick={togglePlaceholder}>
        {isPlaceholderOpen ? 'Close Placeholder' : 'Open Placeholder'}
      </button>

      {!isOpenRequired ? (
        <button className="close-button" onClick={toggleOpenRequired}>
          Open Required
        </button>
      ) : (
        <button className="close-button" onClick={toggleCloseRequired}>
          Close Required
        </button>
      )}

{!isOpenChecked ? (
        <button className="close-button" onClick={toggleOpenChecked}>
          Open Checked
        </button>
      ) : (
        <button className="close-button" onClick={toggleCloseChecked}>
          Close Checked
        </button>
      )}

{!isOpenOption ? (
        <button className="close-button" onClick={toggleOpenOption}>
          Open Option
        </button>
      ) : (
        <button className="close-button" onClick={toggleCloseOption}>
          Close Option
        </button>
      )}

      {isNameOpen && (
        <label>
          <span>Name:</span>
          <input type="text" name="name" value={field.name || ''} onChange={handleInputChange} />
        </label>
      )}

      {isIdOpen && (
        <label>
          <span>ID:</span>
          <input type="text" name="id" value={field.id || ''} onChange={handleInputChange} />
        </label>
      )}

      {isClassOpen && (
        <label>
          <span>Class:</span>
         
          <input
            type="text"
            name="className"
            value={field.className || ''}
            onChange={handleInputChange}
          />
        </label>
      )}

      {isPlaceholderOpen && (
        <label>
          <span>Placeholder:</span>
          <input
            type="text"
            name="placeholder"
            value={field.placeholder || ''}
            onChange={handleInputChange}
          />
        </label>
      )}

      {isOpenRequired && (
        <>
          <label>
            Required:
            <input
              type="checkbox"
              name="required"
              checked={field.required || false}
              onChange={handleInputChange}
            />
          </label>
          {field.required && (
            <label>
              Required Text:
              <input
                type="text"
                name="requiredText"
                value={field.requiredText || ''}
                onChange={handleInputChange}
              />
            </label>
          )}
       
       {!isOpenChecked ? (
  <button className="close-button" onClick={toggleOpenChecked}>
    Open Checked
  </button>
) : (
  <button className="close-button" onClick={toggleCloseChecked}>
    Close Checked
  </button>
)}

{isOpenChecked && (
  <label>
    <span>Checked:</span>
    <input
      type="checkbox"
      name="checked"
      checked={field.checked || false}
      onChange={handleInputChange}
    />
  </label>
)}

{!isOpenOption ? (
  <button className="close-button" onClick={toggleOpenOption}>
    Open Option
  </button>
) : (
  <button className="close-button" onClick={toggleCloseOption}>
    Close Option
  </button>
)}

{isOpenOption && (
  <>
    <label>
      Options:
      {field.options && field.options.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            name={`option-${index}`}
            value={option}
            onChange={handleOptionChange(index)}
          />
          <button onClick={() => handleRemoveOption(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddOption}>Add Option</button>
    </label>
  </>
)}

  



           </>
      )}

      {/* Add additional input fields for other properties of the field */}

      <button className="delete-button" onClick={handleDeleteField}>
        Delete
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  updateFormField,
  deleteFormField,
  addFormPreviewField,
};

export default connect(null, mapDispatchToProps)(FormFieldItem);
