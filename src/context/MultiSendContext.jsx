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