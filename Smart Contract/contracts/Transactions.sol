//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;


// 1. create a contract
contract Transactions{
// 2. inside the contract, I need the followings
//   => state variable transactionCounter

    uint256 transactionCount;

//   => An event containing address(from,to), amount, message, keyword and timeStamp

    event Transfer(address from, address reciever, uint amount, string message, uint256 timestamp, string keyword);

//   => A struct (TransferStruct) with add(sender,reciever), amount, message, keyword and timestamp
    struct TransferStruct {
        address sender;
        address reciever;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;

    }

//   => A struct object "transactions"

    TransferStruct[] transactions;

//   => Method to addToBlockChain

    function addToBlockChain (address payable reciever, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, reciever, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, reciever, amount, message, block.timestamp, keyword);
    }
//   => Method getAll Transactions

    function getAllTransactions () public view returns(TransferStruct[] memory){
        
        return transactions;

    }
//   => Method getTransactionCount

    function getTransactionCount () public view returns(uint256){

        return transactionCount;
    }
}





