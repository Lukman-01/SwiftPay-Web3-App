/**
 * @title Transactions
 * @dev A smart contract for managing transactions on the blockchain.
 */
 
// SPDX-License-Identifier: UNLICENSED
 
pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCount;
    
    // Event emitted after a transaction has been added to the blockchain
    event Transfer(
        address from,
        address receiver,
        uint amount,
        string message,
        uint256 timestamp,
        string keyword
    );
    
    // Structure to store transaction details
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }
    
    TransferStruct[] transactions;
    
    /**
     * @dev Adds a transaction to the blockchain.
     * @param receiver The address of the receiver.
     * @param amount The amount of the transaction.
     * @param message A message associated with the transaction.
     * @param keyword A keyword associated with the transaction.
     */
    function addToBlockChain(
        address payable receiver,
        uint amount,
        string memory message,
        string memory keyword
    ) public {
        transactionCount += 1;
        transactions.push(
            TransferStruct(
                msg.sender,
                receiver,
                amount,
                message,
                block.timestamp,
                keyword
            )
        );
        emit Transfer(
            msg.sender,
            receiver,
            amount,
            message,
            block.timestamp,
            keyword
        );
    }
    
    /**
     * @dev Retrieves all transactions.
     * @return An array of TransferStruct representing all transactions.
     */
    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }
    
    /**
     * @dev Retrieves the number of transactions.
     * @return The count of transactions.
     */
    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
