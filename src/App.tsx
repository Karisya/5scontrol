import React from 'react';
import Header from './components/Header';
import MainRoute from './routes/Route';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <MainRoute/>
      </BrowserRouter>
    </div>
  );
}

export default App;
