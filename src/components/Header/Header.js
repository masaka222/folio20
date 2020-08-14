import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
        <div className='header_container'>
            <div className = 'left'>
                <div className='header_item'>
                    <div className='item-big'>Z.</div>
                    <div className='item-small'>About me</div>
                </div>
                <div className='header_item'>
                    <div className='item-big'>Work</div>
                    <div className='item-small'>Some cases</div>
                </div>
            </div>
            <div className='middle'>
                <div className='item-small'> Go Home</div>
            </div>
            <div className = 'right'>
                <div className='header_item'>
                    <div className='item-big'>Workflow</div>
                    <div className='item-small'>All the processes</div>
                </div>
                <div className='header_item'>
                    <div className='item-big'>Contact me</div>
                    <div className='item-small'>For any collaboration</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;