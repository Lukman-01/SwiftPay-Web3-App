import React, { useState } from "react";
import { ethers } from "ethers";
// import {
//   contractMultiSendABI,
//   contractMultiSendAddress,
// } from "../utils/constantsMultiSend";
import { contractABI, contractAddress } from "../utils/constants";

const { ethereum } = window;

//the function below fetch ethereum contract from the smart contract
const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  //use to fetch transaction contract from the smart contract

  const multiSendsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return multiSendsContract;
};

const MultiSendTable = () => {
  const [tableData, setTableData] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    amount: "",
    message: "",
  });

  const handleAdd = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({ name: "", address: "", amount: "", message: "" });
    setShowForm(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDelete = (index) => {
    let newData = [...tableData];
    newData.splice(index, 1);
    setTableData(newData);
  };

  const handleSend = async () => {
    try {
      if (ethereum) {
        let currentAccount;
        const transactionsContract = createEthereumContract();
        const accounts = await ethereum.request({ method: "eth_accounts" });
        if (accounts.length) {
          currentAccount = accounts[0];
        }

        for (let i = 0; i < tableData.length; i++) {
          const addr = tableData[i].address;
          const amt = tableData[i].amount;
          console.log(addr, amt);
          const parsedAmount = ethers.utils.parseEther(amt);
          await ethereum.request({
            method: "eth_sendTransaction",
            params: [
              {
                from: currentAccount,
                to: addr,
                gas: "0x5208",
                value: parsedAmount._hex,
              },
            ],
          });

          const transactionHash = await transactionsContract.addToBlockchain(
            addr,
            parsedAmount,
            "gdshvay",
            "ksndksndknsd"
          );
          await transactionHash.wait();
          console.log(`Success - ${transactionHash.hash}`);
        }
        // tableData.map((data) => {
        //   addrs.push(data.address);
        //   amnts.push(ethers.utils.parseEther(data.amount));
        // });
        // let tx = await multiSendsContract.withdrawls(addrs, amnts, {
        //   gasLimit: 50000,
        //   gasPrice: 20000000000,
        // });

        // let signedTx = await multiSendsContract.signer.sign(tx);
        // let txHash = await multiSendsContract.provider.sendTransaction(signedTx);
        // console.log(txHash);

        // (async function() {
        //   const senderAddress = signer.address;

        //     // check if the caller is the owner of the contract
        //     const owner = await multiSendsContract.getOwner();
        //     if (owner !== senderAddress) {
        //         console.log('Caller is not the owner of the contract');
        //         return;
        //     }

        //     // send the transaction to call the withdrawls function
        //     const tx = await multiSendsContract.withdrawls(addrs, amnts);
        //     console.log('Transaction hash: ', tx.hash);

        //     // wait for the transaction to be mined
        //     await tx.wait();
        //     console.log('Transaction mined');
        // })();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-auto w-[60%] justify-center content-center">
      <div className="pb-10px">
        <h1 className="text-center text-white text-5xl justify-center font-bold font-mono">
          Send To Multiple Accounts
        </h1>
      </div>
      <div className="pb-5px justify-end content-end">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4 ml-2 "
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
      <div className="justify-center m-auto">
        {showForm && (
          <form onSubmit={handleSubmit}>
            <input
              className="border p-2 mr-2 rounded-full"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="border p-2 mr-2 rounded-full"
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              className="border p-2 mr-2 rounded-full"
              type="text"
              name="amount"
              placeholder="Amount in (ETH)"
              value={formData.amount}
              onChange={handleChange}
            />
            <input
              className="border p-2 mr-2 rounded-full"
              type="text"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-2 rounded-full "
            >
              Submit
            </button>
          </form>
        )}
        <div>
          <table className="w-full justify-center items-center">
            <thead>
              <tr>
                <th className="px-4 py-2 text-white">Name</th>
                <th className="px-4 py-2 text-white">Address</th>
                <th className="px-4 py-2 text-white">Amount</th>
                <th className="px-4 py-2 text-white">Message</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 text-white">{data.name}</td>
                  <td className="px-4 py-2 text-white">{data.address}</td>
                  <td className="px-4 py-2 text-white">{data.amount}</td>
                  <td className="px-4 py-2 text-white">{data.message}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white py-2 px-4 rounded-full mr-4"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="m-auto w-[60%] justify-center content-center my-10">
            <button
              className="m-auto w-[60%] flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
              onClick={handleSend}
            >
              Send Ether
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiSendTable;
