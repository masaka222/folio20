import React from 'react';
import './Page1.css';

const Page1 = () => {
    return(
        <div className='Page1'>
            <div className='page1_main'>
                <div className='item-small back'>Back to all projects</div>
                <div className='archive'>Archive</div>
            </div>
            <div className='page1_footer'>
                <div className='arrow'>&#8595;</div>
                <div className='alpha'>A.</div>
                <div className='alpha_text'> 
                    <div style={{fontWeight: 'bold'}}>Work places archive</div>
                    <div className='item-small'>Something different</div>
                </div>
            </div>
        </div>
    );
}

export default Page1;