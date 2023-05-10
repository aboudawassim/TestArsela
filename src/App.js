import React from 'react';
import { Provider } from 'react-redux';
import FormBuilder from './components/FormBuilder';
import store from './store';
import './styles/global.css'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Provider store={store}>
      <Navbar/>
      <FormBuilder />
    </Provider>
  );
};

export default App
