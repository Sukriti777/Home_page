import React from "react";
import "./Navbar.css";
import SideBar from "../assets/SideBar.png";

import { CgProfile } from "react-icons/cg";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#F5DFD0] flex justify-between px-4">
        <h2>Info of sales and update</h2>
        <h2>Get Help</h2>
      </div>
      <div className="flex m-[0.5em]">
        <div>
          <img
            src={SideBar}
            alt="SideBar"
            className="SideBar hover:cursor-pointer"
          />
        </div>
        <h1 className="text-black cursor-pointer text-[2em] font-bold mx-[0.3em]">
          KnotHastags
        </h1>
        <div className="mx-[200px]">
          <input
            type="text"
            placeholder="Search arts from here..."
            className="border-2 border-gray-300 rounded-lg px-2 py-1 hover:cursor-pointer w-[30em] h-[2.5em]"
          />
        </div>

        <div className="icons flex font-bold">
          <div className="mx-2 flex">
            <CgProfile className="text-[2em] hover:cursor-pointer " />
            <h2>Login/SignUp</h2>
          </div>
          <div className="mx-2 flex ">
            {" "}
            <PiHandbagSimpleLight className="text-[2em] hover:cursor-pointer " />
            <h2>My Orders</h2>
          </div>
          <div className="mx-2 flex">
            {" "}
            <AiOutlineShoppingCart className="text-[2em] hover:cursor-pointer " />
            <h2>Cart</h2>
          </div>
          <div className="mx-2 flex">
            {" "}
            <AiOutlineHeart className="text-[2em] hover:cursor-pointer" />
            <h2>Wishlist</h2>
          </div>
        </div>
      </div>
      <div className="bg-[#F5DBCD]  w-screen  flex h-[4em] justify-evenly py-2 font-medium">
        <button className="hover:bg-[#D37130] bg-[#F5DBCD] px-3 shadow-2xl  hover:border-none  hover:text-white rounded-full text-black">
          Catogery
        </button>
        <button className="hover:bg-[#D37130] bg-[#F5DBCD] px-3 shadow-2xl  hover:border-none   hover:text-white rounded-full text-black">
          Traditional
        </button>
        <button className="hover:bg-[#D37130] bg-[#F5DBCD] px-3 shadow-2xl  hover:border-none   hover:text-white rounded-full text-black">
          Textile
        </button>
        <button className="hover:bg-[#D37130] bg-[#F5DBCD] px-3 shadow-2xl  hover:border-none   hover:text-white rounded-full text-black">
          Sculpture
        </button>
        <button className="hover:bg-[#D37130] bg-[#F5DBCD] px-3 shadow-2xl  hover:border-none   hover:text-white rounded-full text-black">
          Poetry
        </button>
        <button className="hover:bg-[#D37130] bg-[#F5DBCD] px-3 shadow-2xl  hover:border-none   hover:text-white rounded-full text-black">
          Ceramics
        </button>
        <button className="hover:bg-[#D37130] bg-[#F5DBCD] px-3 shadow-2xl  hover:border-none   hover:text-white rounded-full text-black">
          Home Decor
        </button>
      </div>
    </>
  );
};

export default Navbar;
