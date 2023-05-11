import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addFormField, reorderFormFields, importFormFields } from '../actions/formActions';
import FormPreview from './FormPreview';
import FormFieldList from './Preview/FormFieldList';
import CodeGenerator from './Code/CodeGenerator';
import FormExporter from './Code/FormExporter';
import FormImporter from './Code/FormImporter';
import '../styles/FormBuilder.css';


const FormBuilder = ({ formFields, addFormField, reorderFormFields, importFormFields }) => {
  const [importedFormFields, setImportedFormFields] = useState([]);
  const [generatedCode, setGeneratedCode] = useState('');

  const handleAddField = (fieldType) => {
    addFormField(fieldType);
  };

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (destination) {
      reorderFormFields(source.index, destination.index);
    }
  };

  const handleImportFormFields = (importedFields) => {
    setImportedFormFields(importedFields);
    importFormFields(importedFields);
  };
  
  const handleGenerateCode = (code) => {
    setGeneratedCode(code);
  };
  
  const handleImportFields = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const formData = JSON.parse(e.target.result);
      importFormFields(formData);
    };
    reader.readAsText(file);
  };

  return (
    <div className="container">
      <h1 className="title">Générateur de formulaire</h1>

      <nav className="navbar">
        <div className="navbar-buttons">
          <CodeGenerator formFields={formFields} onCodeGenerated={handleGenerateCode} />
          <FormExporter formFields={formFields} />
          <FormImporter onImport={handleImportFormFields} />
        </div>
      </nav>
      <div className="form-preview-and-code">
        <div className="FormPreview">
          <FormPreview formFields={formFields} />
        </div>
        <div className="CodePreview">
          <pre>{generatedCode}</pre>
        </div>
      </div>
      <FormFieldList formFields={formFields} onAddField={handleAddField} onDragEnd={handleDragEnd} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  formFields: state.formFields,
});

const mapDispatchToProps = {
  addFormField,
  reorderFormFields,
  importFormFields,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormBuilder);
