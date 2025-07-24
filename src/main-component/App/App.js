import React from 'react';
import AllRoute from '../router';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async'; // ✅ Add this
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <HelmetProvider>
      <div className="App" id="scrool">
        <AllRoute />
        <ToastContainer />
      </div>
    </HelmetProvider>
  );
};

export default App;
