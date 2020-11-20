import React from 'react';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Header from './components/Header/Header';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <ProgressBar/>
      <Header/>
      <Page1/>
      <Page2/>
    </div>
  );
}

export default App;
