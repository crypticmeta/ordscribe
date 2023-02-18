import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { SlPicture } from "react-icons/sl";
const Upload = () => {
  return (
    <div className="min-h-screen bg-black text-white fira">
      <Header />
      <div className="pt-10">
        <div className="flex justify-center px-10">
          <div className="w-full  md:w-8/12 lg:w-4/12 border-2 py-4 space-y-10">
            <p className="text-center md:text-3xl">Upload Image Content</p>
            <div className="text-9xl flex justify-center">
              <SlPicture />
            </div>
            <p className="text-center md:text-2xl">Max size: 390kb</p>
          </div>
        </div>
      </div>
      <div className=" fira space-y-4 pt-10 pb-20">
        <p className="uppercase text-center text-xl md:text-2xl tracking-wider font-semibold">
          Recommended format:webp
        </p>
        <p className="text-center text-sm px-10 md:text-xl">
          .webp format provides the most efficient image compression.
        </p>
        <p className="text-center text-sm md:text-xl">
            Convert your image format <a href=""><span className="text-blue-500">here.</span></a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Upload;
