import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateFormField, deleteFormField, addFormPreviewField } from '../../actions/formActions';
import '../../styles/FormFieldItem.css';

const FormFieldItem = ({ field, updateFormField, deleteFormField, addFormPreviewField }) => {
  const [isNameOpen, setIsNameOpen] = useState(true);
  const [isIdOpen, setIsIdOpen] = useState(true);
  const [isClassOpen, setIsClassOpen] = useState(true);
  const [isPlaceholderOpen, setIsPlaceholderOpen] = useState(true);
  const [isRequiredOpen, setIsRequiredOpen] = useState(false);
  const [isCheckedOpen, setIsCheckedOpen] = useState(false);
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [newOption, setNewOption] = useState('');

  

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'required' && !checked) {
      updateFormField(field.id, { required: false, requiredText: '' });
    } else if (name === 'newOption') {
      setNewOption(value);
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
    if (field.options) {
      const updatedOptions = [...field.options, newOption];
      updateFormField(field.id, { options: updatedOptions });
    } else {
      const updatedOptions = [newOption];
      updateFormField(field.id, { options: updatedOptions });
    }
    setNewOption('');
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

  const toggleRequired = () => {
    setIsRequiredOpen(!isRequiredOpen);
  };

  const toggleChecked = () => {
    setIsCheckedOpen(!isCheckedOpen);
  };

  const toggleOption = () => {
    setIsOptionOpen(!isOptionOpen);
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

     <button className="close-button" onClick={toggleRequired}>
      {isRequiredOpen ? 'Close Required' : 'Open Required'}
     </button>
     <button className="close-button" onClick={toggleChecked}>
      {isCheckedOpen ? 'Close Checked' : 'Open Checked'}
     </button>
     <button className="close-button" onClick={toggleOption}>
      {isOptionOpen ? 'Close Option' : 'Open Option'}
     </button>

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

      {isRequiredOpen && (
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
          </>
       )}
      

{isCheckedOpen && (
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



{isOptionOpen && (
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
          <button className="remove-option-button" onClick={() => handleRemoveOption(index)}>Remove</button>
        </div>
      ))}
      <button className="add-option-button" onClick={handleAddOption}>Add Option</button>
      <input
        type="text"
        name="newOption"
        value={newOption}
        onChange={handleInputChange}
        placeholder="New Option"
      />
    </label>
    <select>
      {field.options && field.options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
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