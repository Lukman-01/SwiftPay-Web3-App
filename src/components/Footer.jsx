import React from "react";
import { SiFampay } from "react-icons/si";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 bg-slate-900">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <SiFampay fontSize={70} className="text-blue-600" />
        <p className="text-5xl italic text-green-600">
          Swift<span className="text-7xl">Pay</span>
        </p>
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 sm:flex-row flex-col w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Binance
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Avalanche
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Hedera
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Solana
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Defi
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          dApps
        </p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">
        SwiftPay is surely your best option for secure,fast and reliable payment
        gig.
      </p>
      <p className="text-white text-sm text-center font-medium mt-2">
        info@swiftpay.com
      </p>
    </div>
  </div>
);

export default Footer;
