import asset1 from '../../svg1/Asset 1.svg';
import asset2 from '../../svg1/Asset 2.svg';
import asset3 from '../../svg1/Asset 3.svg';
import asset4 from '../../svg1/Asset 4.svg';
import asset5 from '../../svg1/Asset 5.svg';
import asset6 from '../../svg1/Asset 6.svg';
import asset7 from '../../svg1/Asset 7.svg';
import asset8 from '../../svg1/Asset 8.svg';
import asset9 from '../../svg1/Asset 9.svg';
import asset10 from '../../svg1/Asset 10.svg';
import asset11 from '../../svg1/Asset 11.svg';
import asset12 from '../../svg1/Asset 12.svg';
import asset13 from '../../svg1/Asset 13.svg';
import asset14 from '../../svg1/Asset 14.svg';
import asset15 from '../../svg1/Asset 15.svg';
import asset16 from '../../svg1/Asset 16.svg';

import React from 'react';
import $ from 'jquery';
import './Svg.css';

function Svg() {
  let x = [
    asset1,
    asset2,
    asset3,
    asset4,
    asset6,
    asset7,
    asset8,
    asset9,
    asset10,
    asset11,
    asset12,
    asset13,
    asset14,
    asset15,
    asset16,
  ];
  let y = [
    asset1,
    asset2,
    asset3,
    asset4,
    asset6,
    asset7,
    asset8,
    asset9,
    asset10,
  ];

  let count = -1;
  let newImg = y.length; //6

  const fadeOutt = () => {
    let interval = setInterval(function () {
      count >= y.length - 1 ? (count = 0) : count++;

      $(`#${count}`).fadeOut(300);

      clearInterval(interval);
      fadeIn();
    }, 1000);
  };

  const fadeIn = () => {
    let interval = setInterval(function () {
      $(`#${count}`).attr('src', `${x[newImg]}`);
      newImg >= x.length - 1 ? (newImg = 0) : newImg++;

      // document.getElementById(`${count}`).src = `${x[s]}`;
      $(`#${count}`).fadeIn(500);

      clearInterval(interval);
      fadeOutt();
    }, 250);
  };

  const renderImage = () => {
    fadeOutt();
    return y.map((img, index) => {
      return (
        <div className='svg__imgsContainer' key={index}>
          <img className='svg__imgs' src={img} id={index} alt='logos' />
        </div>
      );
    });
  };

  return renderImage();
}

export default Svg;
