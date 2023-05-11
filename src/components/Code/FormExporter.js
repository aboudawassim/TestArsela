import React from 'react';
import { saveAs } from 'file-saver';

const downloadJson = (data, filename) => {
  const jsonData = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonData], { type: 'application/json' });
  saveAs(blob, filename);
};

const FormExporter = ({ formFields }) => {
  const handleExportJson = () => {
    const filename = prompt('Please enter the filename for the exported JSON:');
    if (filename) {
      downloadJson(formFields, filename);
    }
  };

  return (
    <div>
      <button onClick={handleExportJson}>Export JSON</button>
    </div>
  );
};

export default FormExporter;
