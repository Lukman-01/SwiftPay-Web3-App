import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import {  contractMultiSendABI, contractMultiSendAddress } from "../utils/constantsMultiSend";

//This allow to use react context api
export const MultiSendContext = React.createContext();

//destructuring ethereum from window object
const { ethereum } = window;

//the function below fetch ethereum contract from the smart contract
const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  //use to fetch transaction contract from the smart contract
  const multiSendsContract = new ethers.Contract(contractMultiSendAddress, contractMultiSendABI, signer);

  return multiSendsContract;
};

export const TransactionsProvider = ({ children }) => {
  const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
  const [currentAccount, setCurrentAccount] = useState("");
  const [transactions, setTransactions] = useState([]);

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

  const checkIfTransactionsExists = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        const currentTransactionCount = await transactionsContract.getTransactionCount();

        window.localStorage.setItem("transactionCount", currentTransactionCount);
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
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

  const handleSend = async() => {
    let addrs = [];
    let amnts = [];
    tableData.map((data)=> {
      addrs.push(data.address);
      amnts.push(ethers.utils.parseEther(data.amount));
    });

    let tx = await contract.functions.withdrawls(addrs, amnts, {
      gasLimit: 21000,
      value: 0,
      gasPrice: ethers.utils.bigNumberify("20000000000")
    });
    let signedTx = await wallet.sign(tx);
    let txHash = await provider.sendTransaction(signedTx);
    console.log(txHash);
  }

  useEffect(() => {
    checkIfWalletIsConnect();
    checkIfTransactionsExists();
  }, [transactionCount]);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        transactions,
        currentAccount,
        sendTransaction,
        formData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};