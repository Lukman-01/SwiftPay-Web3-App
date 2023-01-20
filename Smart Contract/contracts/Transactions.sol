//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions{

    uint256 transactionCount;

    event Transfer(address from, address reciever, uint amount, string message, uint256 timestamp, string keyword);

    struct TransferStruct {
        address sender;
        address reciever;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockChain (address payable reciever, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, reciever, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, reciever, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions () public view returns(TransferStruct[] memory){
        return transactions;
    }

    function getTransactionCount () public view returns(uint256){

        return transactionCount;
    }
}


// This version of the contract uses a struct Recipient to store the recipient address, amount, and whether the transfer was successful or not. This allows you to store all the data in a single storage slot, which is more gas-efficient than storing multiple arrays.
// It also includes a new function getRecipients() which returns all the addresses that have been added to the contract regardless of success or failure.
// The getSuccessfulTransfers() and getFailedTransfers() functions have been updated to use a loop to iterate through the recipients array and only return the addresses that have the corresponding success status.
// Also, the returned arrays are not fixed size, they are dynamic arrays, which means that they will only consume the storage needed for their content, so it will be more gas efficient.
// It's worth noting that the dynamic arrays are created in memory and are not stored permanently in the contract's storage, this will save gas costs.

pragma solidity ^0.8.0;

contract MultiSender {
    struct Recipient {
        address payable recipient;
        uint256 amount;
        bool success;
    }
    Recipient[] recipients;

    function addRecipient(address payable _recipient, uint256 _amount) public {
        require(_recipient != address(0), "Invalid address provided");
        require(_amount > 0, "Amount must be greater than 0");
        recipients.push(Recipient(_recipient, _amount, false));
    }

    function sendEther() public {
        for (uint256 i = 0; i < recipients.length; i++) {
            if (recipients[i].recipient.transfer(recipients[i].amount).value == recipients[i].amount) {
                recipients[i].success = true;
            }else{
                revert();
            }
        }
    }

    function getRecipients() public view returns (address[] memory) {
        address[] memory result = new address[](recipients.length);
        for (uint256 i = 0; i < recipients.length; i++) {
            result[i] = recipients[i].recipient;
        }
        return result;
    }

    function getSuccessfulTransfers() public view returns (address[] memory) {
        address[] memory result = new address[](recipients.length);
        uint256 count = 0;
        for (uint256 i = 0; i < recipients.length; i++) {
            if (recipients[i].success) {
                result[count] = recipients[i].recipient;
                count++;
            }
        }
        // Return a new array with the correct size
        address[] memory newArray = new address[](count);
        for(uint i=0; i<count; i++) {
            newArray[i] = result[i];
        }
        return newArray;
    }

    function getFailedTransfers() public view returns (address[] memory) {
        address[] memory result = new address[](recipients.length);
        uint256 count = 0;
        for (uint256 i = 0; i < recipients.length; i++) {
            if (!recipients[i].success) {
                result[count] = recipients[i].recipient;
                count++;
            }
        }
        // Return a new array with the correct size
        address[] memory newArray = new address[](count);
        for(uint i=0; i<count; i++) {
            newArray[i] = result[i];
        }
        return newArray;
    }
}





