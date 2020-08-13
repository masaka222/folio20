import React from 'react';
import './Heading.css';

const Heading = () => {
    return(
        <div className='Heading'>
            <div className='heading_main'>
                <div className='item-small back'>Back to all projects</div>
                <div className='archive'>Archive</div>
            </div>
            <div className='heading_footer'>
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

export default Heading;