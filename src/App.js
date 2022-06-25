import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';

// importing general components
import Navbar from './components/general/Navbar';
import './App.css';

// landing components
import Background from './components/landing/Background';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Background />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
