import React from "react";
import Ganpati from "../assets/ganapati.png";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <div className="font-bold text-5xl mx-28 mt-5">
        <h1>
          Most sold <span className="text-[#D46E2F]">Arts</span>
        </h1>
        <div className="bg-[#E6BEA0] mt-3 h-1">
          <div className="bg-[#D0732F] h-1 w-[35%]"></div>
        </div>
      </div>
      <div className="App flex justify-evenly">
        <Card
          title="Product 1"
          description="This is a product description."
          price={50}
          discount={25}
        />
        <Card
          title="Product 2"
          description="Another product description."
          price={75}
          discount={10}
        />
        <Card
          title="Product 2"
          description="Another product description."
          price={75}
          discount={10}
        />
        <Card
          title="Product 2"
          description="Another product description."
          price={75}
          discount={10}
        />
      </div>

      <div>
        <div className="font-bold text-5xl mx-28 mt-5">
          <h1>
            Newly Launched <span className="text-[#D46E2F]">Arts</span>
          </h1>
          <div className="bg-[#E6BEA0] mt-3 h-1">
            <div className="bg-[#D0732F] h-1 w-[35%]"></div>
          </div>
        </div>
        <div className="flex justify-evenly my-5">
          <div>
            <div
              style={{ backgroundImage: `url(${Ganpati})` }}
              className="rounded-full h-[30vh] w-[30vh] bg-no-repeat bg-cover bg-center"
            ></div>
            <h2 className="text-black font-bold text-center text-2xl my-2">
              Indian Arts
            </h2>
          </div>
          <div>
            <div
              style={{ backgroundImage: `url(${Ganpati})` }}
              className="rounded-full h-[30vh] w-[30vh] bg-no-repeat bg-cover bg-center"
            ></div>
            <h2 className="text-black font-bold text-center text-2xl my-2">
              Indian Arts
            </h2>
          </div>
          <div>
            <div
              style={{ backgroundImage: `url(${Ganpati})` }}
              className="rounded-full h-[30vh] w-[30vh] bg-no-repeat bg-cover bg-center"
            ></div>
            <h2 className="text-black font-bold text-center text-2xl my-2">
              Indian Arts
            </h2>
          </div>
          <div>
            <div
              style={{ backgroundImage: `url(${Ganpati})` }}
              className="rounded-full h-[30vh] w-[30vh] bg-no-repeat bg-cover bg-center"
            ></div>
            <h2 className="text-black font-bold text-center text-2xl my-2">
              Indian Arts
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
