import React from 'react';
import './Page2.css';
import page2img from './page2-image.png';

const Page2 = () => {
    return(
        <div className='Page2'>
            <div className='Page2_container'>
                <img alt='pic1' className='inside' src={page2img}/>
            </div>
        </div>
    );
}

export default Page2;