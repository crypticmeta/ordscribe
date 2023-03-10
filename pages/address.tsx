import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { SlPicture } from "react-icons/sl";
import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Head from "next/head";
const Address = () => {
  return (
    <div className="min-h-screen  text-white fira">
       <Head>
         <title>Ordscribe</title>
       </Head>
         <div
          style={{ zIndex: -1 }}
          className="fixed top-0 bottom-0 right-0 left-0"
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover",opacity:"0.9" }}
            src="/assets/images/bg1.png"
            alt="bg"
          />
        </div>
      <Header />
    <div className='relative z-[1] min-h-screen bg-black bg-opacity-60'>
    <div className="pt-10">
        <div className="flex justify-center  px-10">
              <div className=" md:w-[50%]">
                <input className="w-full py-1 text-2xl bg-transparent border-2" placeholder="Enter receiving BTC address"  type='text' />
              </div>
        </div>
      </div>
      <div className=" fira space-y-4 px-10 md:px-0 pt-10 pb-20">
        <p className="uppercase text-center text-xl md:text-2xl tracking-wider font-semibold">
         which wallet can store ordinals?
        </p>
        <p className="text-center text-sm px-10 md:text-xl">
          You can recieve,but not send, ordinals with <a href=""><span className="text-blue-500">Sparrow</span></a>wallet.
        </p>
        <p className="text-center text-sm md:text-xl">
        To send ordinals out, you will currently need a full BTC node.
        </p>
      </div>
      <div className="flex justify-center space-x-10 text-4xl font-semibold pb-10">
        <Link href="/upload"><div className="flex space-x-2 ">
          <AiOutlineArrowLeft/>
           <p>Back</p>
        </div></Link>
        <Link href="/sats"><div className="flex space-x-2">
          <p>Continue</p>
           <AiOutlineArrowRight/>
        </div> </Link>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default Address;
