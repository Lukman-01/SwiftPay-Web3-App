import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

// we import the smart contract ABI and the contract address from our smart contract
import { contractABI, contractAddress } from "../utils/constants";



//This allow to use react context api
export const TransactionContext = React.createContext();

//destructuring ethereum from window object
const { ethereum } = window;

//the function below fetch ethereum contract from the smart contract
const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  //use to fetch transaction contract from the smart contract
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionsContract;
};

export const TransactionsProvider = ({ children }) => {
  const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
  const [currentAccount, setCurrentAccount] = useState("");


  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_requestAccounts", });

      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const sendTransaction = async () => {
    try {
      if (ethereum) {
        const { addressTo, amount, keyword, message } = formData;
        const transactionsContract = createEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);

        await ethereum.request({
          method: "eth_sendTransaction",
          params: [{
            from: currentAccount,
            to: addressTo,
            gas: "0x5208",
            value: parsedAmount._hex,
          }],
        });

        const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);

      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        sendTransaction,
        handleChange,
        formData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};