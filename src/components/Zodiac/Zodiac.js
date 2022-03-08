import React from 'react';

export default function Zodiac(props) {
  return (
    <div className='zodiac'>
      <img src={`${process.env.PUBLIC_URL}/zodiacs/${props.name}.png`} />
      <h2 className='sign'>{props.name}</h2>
      <p className='dates'>{props.dates}</p>
    </div>
  );
}
