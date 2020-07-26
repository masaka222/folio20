import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
        <span className = 'left'>
            <span>
                Z.
            </span>
            <span>
                Work
            </span>
        </span>
        <span className = 'right'>
            <span>
                Workflow
            </span>
            <span>
                Contact me
            </span>
        </span>
    </div>
  );
}

export default Header;