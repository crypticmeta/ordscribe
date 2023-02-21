import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { SlPicture } from "react-icons/sl";
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai"
import Link from "next/link";
import Head from "next/head";
const Upload = () => {
  return (
    <div id="upload" className="min-h-screen  text-white fira">
       <Head>
         <title>Ordscribe</title>
       </Head>
         <div
          style={{ zIndex: -1 }}
          className="fixed top-0 bottom-0 right-0 left-0"
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity:"0.9" }}
            src="/assets/images/bg1.png"
            alt="bg"
          />
        </div>
      <Header />
    <div className='relative z-[1] min-h-screen bg-black bg-opacity-60'>
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
      <div className="flex justify-center space-x-10 text-4xl font-semibold pb-10">
        <Link href="/"><div className="flex space-x-2 ">
          <AiOutlineArrowLeft/>
           <p>Back</p>
        </div></Link>
        <Link href="/address"><div className="flex space-x-2">
          <p>Continue</p>
           <AiOutlineArrowRight/>
        </div> </Link>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default Upload;
