import React from 'react';

const downloadJson = (data, filename) => {
  const jsonData = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonData], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};

const FormExporter = ({ formFields, titleField }) => {
  const handleExportJson = () => {
    const dataWithTitle = { title: titleField, formFields };
    downloadJson(dataWithTitle, 'formFields.json');
  };

  return (
    <div>
      <button onClick={handleExportJson}>Export JSON</button>
    </div>
  );
};

export default FormExporter;
