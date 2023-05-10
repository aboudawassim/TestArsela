import { generateUniqueId } from '../utils';

export const addFormField = (fieldType) => ({
  type: 'ADD_FORM_FIELD',
  payload: { id: generateUniqueId(), type: fieldType },
});

export const updateFormField = (fieldId, fieldProperties) => ({
  type: 'UPDATE_FORM_FIELD',
  payload: { fieldId, fieldProperties },
});

export const reorderFormFields = (startIndex, endIndex) => ({
  type: 'REORDER_FORM_FIELDS',
  payload: { startIndex, endIndex },
});

export const deleteFormField = (fieldId) => ({
  type: 'DELETE_FORM_FIELD',
  payload: fieldId,
});

export const addFormPreviewField = (field) => ({
  type: 'ADD_FORM_PREVIEW_FIELD',
  payload: field,
});

export const importFormFields = (formData) => ({
    type: 'IMPORT_FORM_FIELDS',
    payload: formData,
  });
  
  // ...

export const validateFormField = (field) => {
  const errors = {};

  if (!field.name) {
    errors.name = 'Name is required';
  }

  // Ajoutez d'autres validations pour les autres propriétés du champ

  return errors;
  
};




 


// ...
