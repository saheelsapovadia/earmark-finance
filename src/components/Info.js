import React from 'react';
import './Info.css';
import Svg from './Svg/Svg';

function Info() {
  return (
    <div className='info'>
      <div className='info__container'>
        {/* <div className='info__data'>
                    <div className='info__data1'>
                        <h3 className='info__header1'>Schedule your demo.</h3>
                        <p className='info__para'>Fill out the form, and one of our experts will personally walk you through what Jumpstart can do for your company.</p>
                    </div>
                    <div className='info__data2'>
                        <p className='info__header2'>Trusted by the world’s best.</p>
                        <p className='info__para'>Join hundreds of companies that discover passionate and diverse talent with Jumpstart.</p>
                    </div>
                </div> */}

        <div className='info__svg'>
          <Svg />
        </div>
      </div>
    </div>
  );
}

export default Info;
