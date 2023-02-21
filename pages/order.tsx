import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { SlPicture } from "react-icons/sl";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Head from "next/head";
const Order = () => {
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
    <div className='relative z-[1] min-h-screen bg-black bg-opacity-60 '>
    <div className="pt-10">
        <p className="text-center">OPTIONAL: Receive and order receipt</p>
        <div className="flex justify-center  px-10">
              <div className=" md:w-[50%]">
                <input className="w-full py-1 text-2xl bg-transparent border-2" placeholder="Enter your email address"  type='text' />
              </div>
        </div>
      </div>
      <div className="flex justify-center py-10 px-10">
          <div className="w-full py-20 flex flex-col items-center bg-white rounded-xl text-black   md:w-8/12 lg:w-4/12 border-2  space-y-2">
           <p className="uppercase ">Payment provider</p>
           <p>or CUSTOM UI</p>
          </div>
        </div>
        <div className="flex justify-center space-x-10 text-4xl font-semibold pb-10">
        <Link href="/sats"><div className="flex space-x-2 ">
          <AiOutlineArrowLeft/>
           <p>Back</p>
        </div></Link>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default Order;
