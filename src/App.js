import React from 'react';
import Header from './components/Header/Header';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import './App.css';

const App = () => {
  // When the user scrolls the page, execute myFunction 
  window.onscroll = function() {myFunction()};

  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var width = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / width) * 100;
    document.getElementById("myBar").style.height = scrolled + "%";
}

  return (
    <div className="App">
      <div class="progress-container">
        <div class="progress-bar" id="myBar"></div>
      </div> 
      <Header/>
      <Page1/>
      <Page2/>
    </div>
  );
}

export default App;
