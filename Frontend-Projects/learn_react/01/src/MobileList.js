import React from 'react';
import './MobileList.css';

export default function MobileList(props) {
    const {image,title,price} = props;

  return (
    <div className='main'>
      <img className='image'
        src={image}
        alt='iPhone'
      />
      <div>
      <h2>{title}</h2>
      <p>rs {price}</p>
      <button>Add to cart</button>
      </div>
    </div>
  );
}
