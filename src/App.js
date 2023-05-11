import React from 'react';
import { Provider } from 'react-redux';
import FormBuilder from './components/FormBuilder';
import store from './store';
import './styles/global.css'
import ErrorBoundary from './components/Errors/ErrorBoundary';


const App = () => {
  return (
    <Provider store={store}>
     <ErrorBoundary>
      <FormBuilder />
      </ErrorBoundary>
    </Provider>
  );
};

export default App
