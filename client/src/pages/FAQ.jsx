import React from 'react';
import FAQhero from '../components/FAQhero';
import FaqCard from '../components/FaqCard';
import Bag from '../assets/bag.png';
import Delivery from '../assets/truck.png';
import Return from '../assets/return.png';
const FAQ = () => {
  return (
    <>
      <FAQhero />
      <div className="grid justify-center">
        <h1 className="text-2xl font-bold">Order Related Queries</h1>
        <hr className="w-full text-black m-auto font-bold" />
      </div>
      <div className=" flex m-2 justify-evenly 5s79">
        <div className="text-2xl flex  bg-[#FFC587] ">
          <FaqCard
            image={Bag}
            title="Products"
            className="shadow-2xl"
            desc="View Product Information"
          />
        </div>
        <div className="text-2xl bg-[#FFC587]">
          <FaqCard
            image={Delivery}
            title="Products"
            className="shadow-2xl"
            desc="View Product Information"
          />
        </div>
        <div className="text-2xl bg-[#FFC587]">
          <FaqCard
            image={Return}
            title="Products"
            className="shadow-2xl"
            desc="View Product Information"
          />
        </div>
      </div>
      <div className="grid justify-center">
        <h1 className="text-2xl font-bold">Vendor Related Queries</h1>
        <hr className="w-full text-black m-auto font-bold" />
      </div>
      <div className=" flex m-2 justify-evenly">
        <div className="text-2xl bg-[#FFC587]">
          <FaqCard
            image={Bag}
            title="Products"
            className="shadow-2xl"
            desc="View Product Information"
          />
        </div>
        <div className="text-2xl bg-[#FFC587]">
          <FaqCard
            image={Delivery}
            title="Products"
            className="shadow-2xl"
            desc="View Product Information"
          />
        </div>
        <div className="text-2xl bg-[#FFC587]">
          <FaqCard
            image={Return}
            title="Products"
            className="shadow-2xl"
            desc="View Product Information"
          />
        </div>
      </div>
    </>
  );
};

export default FAQ;
