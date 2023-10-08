// src/components/Card.js
import React from "react";
import Ganpati from "../assets/ganapati.png";
const Card = ({ title, description, price, discount }) => {
  return (
    <>
      <div className="card bg-[#F5F5F5] relative  border-2 m-7 w-72 rounded-xl font-bold text-xl border-[#D46E2F]">
        <div className="p-4">
          <div
            style={ { backgroundImage: `url(${Ganpati})` } }
            className="rounded-xl h-[20vh] bg-no-repeat bg-cover bg-center"
          ></div>
          <span className="discount-badge top-0 p-2 absolute rounded-tr-xl rounded-bl-xl bg-[#D07330] text-white right-0">
            { discount }% OFF
          </span>
        </div>

        <div className="bg-[#CF712F]/20 p-3 q">
          <h2>{ title }</h2>

          <p className="text-2xl flex justify-between">
            ${ price }{ " " }
            <span className="line-through text-gray-500  ">${ price }</span>
          </p>
          <hr />
          <p className="text-green-600 ">Save: ${ price }</p>
        </div>
      </div>
    </>
  );
};

export default Card;
