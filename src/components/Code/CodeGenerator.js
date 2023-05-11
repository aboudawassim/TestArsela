import React from 'react';

const CodeGenerator = ({ formFields }) => {
  const generateCode = () => {
    // Retourne une chaîne JSON représentant les formFields sans la clé "formFields"
    return JSON.stringify(formFields, null, 2);
  };

  const handleGenerateCode = () => {
    const jsonCode = generateCode();
    console.log(jsonCode); // Affiche la représentation JSON dans la console
    alert('Le code JSON a été généré:\n' + jsonCode);
  };

  return (
    <div>
      <button onClick={handleGenerateCode}>Generate JSON</button>
    </div>
  );
};

export default CodeGenerator;
