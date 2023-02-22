//SPDX-License-Identifier: UNLICENSED

// solidity version .08.0 and above
pragma solidity ^0.8.0;

contract Transactions{

    uint256 transactionCount;
    // declearing an event to emmit after transaction has been added to the blockchain
    event Transfer(address from, address reciever, uint amount, string message, uint256 timestamp, string keyword);
    // structure of data for each transfer or transaction done
    struct TransferStruct {
        address sender;
        address reciever;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }
    // array of transactions
    TransferStruct[] transactions;
    // function to add transaction into blockchain
    function addToBlockChain (address payable reciever, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, reciever, amount, message, block.timestamp, keyword));
        // emitting the transfer event after adding 
        emit Transfer(msg.sender, reciever, amount, message, block.timestamp, keyword);
    }
    // this function is added for future upgrade so as to be able to get list of transaction done
    function getAllTransactions () public view returns(TransferStruct[] memory){
        return transactions;
    }
    // this function is added for future upgrade so as to be able to get number of transaction done 
    function getTransactionCount () public view returns(uint256){

        return transactionCount;
    }
}




