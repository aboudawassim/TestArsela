import React, { useRef } from 'react';

const FormImporter = ({ onImport }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const importedFields = JSON.parse(e.target.result);
        onImport(importedFields);
      } catch (error) {
        console.error('Error parsing imported form fields:', error);
      }
    };

    reader.readAsText(file);
  };

  const handleImportClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
      <button onClick={handleImportClick}>Import Form</button>
    </div>
  );
};

export default FormImporter;
