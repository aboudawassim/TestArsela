import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import FormFieldItem from './FormFieldItem';
import '../../styles/FormFieldList.css';

const FormFieldList = ({ formFields, onAddField, onDragEnd }) => {
  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    onDragEnd(result);
  };

  return (
    <div className="form-field-list-container">
      <h2>Form Fields</h2>
      <div className="button-container">
      <button className="btn btn-success" onClick={() => onAddField('title')}>
          Add Form Title 
        </button>
        <button className="btn btn-primary" onClick={() => onAddField('text')}>
          Add Text Field
        </button>
        <button className="btn btn-primary" onClick={() => onAddField('number')}>
          Add Number Field
        </button>
        <button className="btn btn-primary" onClick={() => onAddField('date')}>
          Add Date Field
        </button>
        <button className="btn btn-primary" onClick={() => onAddField('checkbox')}>
          Add Checkbox Field
        </button>
        <button className="btn btn-primary" onClick={() => onAddField('radio')}>
          Add Radio Field
        </button>
        <button className="btn btn-primary" onClick={() => onAddField('select')}>
          Add Select Field
        </button>
        <button className="btn btn-danger " onClick={() => onAddField('button')}>
          Add Form Button 
        </button>
        {/* Add buttons for other field types */}
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="formFields">
          {(provided) => (
            <div className="form-field-list" {...provided.droppableProps} ref={provided.innerRef}>
              {formFields.map((field, index) => (
                <Draggable key={field.id} draggableId={field.id} index={index}>
                {(provided) => (
                  <div
                    
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <FormFieldItem field={field} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  </div>
);
};

export default FormFieldList;
