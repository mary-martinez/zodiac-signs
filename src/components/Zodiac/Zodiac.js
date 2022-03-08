import React from 'react';

export default function Zodiac(props) {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/zodiacs/aries.png`} />
      <h2 className='sign'>{props.name}</h2>
      <p className='dates'>{props.dates}</p>
    </div>
  );
}
