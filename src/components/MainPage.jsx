import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../context/TransactionContext";

const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;

 
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-full p-2 outline-none border-1px text-sm "
  />
);

const MainPage = () => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-10">
        <div className="flex flex-1 justify-start items-start flex-col md:mr-10">
          <h1 className="text-6xl sm:text-7xl text-white  py-1 justify-center">
            SwiftPay
          </h1>
          <p className="text-center mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Easy, Secure and Reliable payment of goods and services.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="w-full flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className="rounded-tl-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[1px] border-gray-400 text-lg font-light text-white">
              Reliable
            </div>
            <div className="min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[1px] border-gray-400 text-lg font-light text-white">Secure</div>
            <div className="sm:rounded-tr-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[1px] border-gray-400 text-lg font-light text-white">
              Easy Use
            </div>
            <div className="sm:rounded-bl-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[1px] border-gray-400 text-lg font-light text-white">
              Fast
            </div>
            <div className="min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[1px] border-gray-400 text-lg font-light text-white">Low Fees</div>
            <div className="rounded-br-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[1px] border-gray-400 text-lg font-light text-white">
              Blockchain
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10 ">
          <div className="p-3 flex justify-end items-start flex-col rounded-full h-40 sm:w-72 w-full my-5 ">
            <div className="flex justify-between flex-col w-full h-full rounded-lg border-white bg-[#94a3b8] px-2">
              <div className="flex justify-between items-start my-2">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div
            id="tblack"
            className="p-5 sm:w-96 w-full flex flex-col justify-start items-center border-1 rounded-lg text-black"
          >
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword "
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />

            <div className="h-[1px] w-full bg-white my-2" />
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[2px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send now
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
