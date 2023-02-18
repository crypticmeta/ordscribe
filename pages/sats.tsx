import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { SlPicture } from "react-icons/sl";
const Sats = () => {
  return (
    <div className="min-h-screen  text-white fira">
         <div
          style={{ zIndex: -1 }}
          className="fixed top-0 bottom-0 right-0 left-0"
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="/assets/images/bg1.png"
            alt="bg"
          />
        </div>
      <Header />
    <div className='relative z-[1] bg-black bg-opacity-50'>
    <div className="pt-10">
        <div className="flex justify-center px-10">
          <div className="w-full text-2xl  md:w-8/12 lg:w-4/12 border-2 py-4 space-y-3 px-2">
          <p>Sats/vByte:</p>
          <p>Total Sats:</p>
          <p>Scribe fee:</p>
          <p>Total Cost:</p>
          </div>
        </div>
      <div className="flex justify-center px-12 pt-6 text-2xl">
      <div className="flex justify-between  md:w-8/12 lg:w-4/12">
              <button>Slower</button>
              <button>Regular</button>
              <button>Faster</button>
          </div>
      </div>
      </div>
      <div className=" fira space-y-4 pt-10 pb-20">
        <p className="text-center text-sm px-10 md:text-xl">
        The Sats/vByte rate depends on BTC network congestion.
        </p>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default Sats;
