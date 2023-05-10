// ...

const initialState = {
  formFields: [],
  fieldErrors: {},
};

export const formFieldsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FORM_FIELD':
      return {
        ...state,
        formFields: [...state.formFields, action.payload],
      };

    case 'SET_FIELD_ERRORS':
      return {
        ...state,
        fieldErrors: {
          ...state.fieldErrors,
          [action.payload.field.id]: action.payload.errors,
        },
      };

    // Ajoutez d'autres cas pour gérer les autres actions liées à la validation des champs


      case 'UPDATE_FORM_FIELD':
        return {
          ...state,
          formFields: state.formFields.map((field) =>
            field.id === action.payload.fieldId ? { ...field, ...action.payload.fieldProperties } : field
          ),
        };
  
      case 'REORDER_FORM_FIELDS':
        const { startIndex, endIndex } = action.payload;
        const formFields = Array.from(state.formFields);
        const [movedField] = formFields.splice(startIndex, 1);
        formFields.splice(endIndex, 0, movedField);
  
        return {
          ...state,
          formFields,
        };

        case 'IMPORT_FORM_FIELDS':
        return {
         ...state,
         formFields: action.payload,
        };

  
      case 'DELETE_FORM_FIELD':
        return {
          ...state,
          formFields: state.formFields.filter((field) => field.id !== action.payload),
        };
  
      default:
        return state;
    }
  };
  