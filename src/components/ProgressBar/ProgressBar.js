import React from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
    // When the user scrolls the page, execute myFunction 
    window.onscroll = function() {myFunction()};

    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var width = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / width) * 100;
        document.getElementById("myBar").style.height = scrolled + "%";
    }

    return(
        <div className="progress-container">
            <div className="progress-bar" id="myBar"></div>
        </div>
    );

}

export default ProgressBar;