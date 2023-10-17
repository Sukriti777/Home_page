import React from 'react';

function FaqCard({ image, title, desc }) {
  return (
    <>
      <div className="flex flex-col items-center p-4 w-[15em] shadow-custom">
        <img src={image} alt="" />
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-[0.8em]">{desc}</p>
      </div>
    </>
  );
}

export default FaqCard;
