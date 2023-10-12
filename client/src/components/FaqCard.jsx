import React from 'react';

function FaqCard({ image, title, desc }) {
  return (
    <>
      <div className="flex flex-col items-center p-4">
        <img src={image} alt="" />
        <h1>{title}</h1>
        <p className="text-lg">{desc}</p>
      </div>
    </>
  );
}

export default FaqCard;
