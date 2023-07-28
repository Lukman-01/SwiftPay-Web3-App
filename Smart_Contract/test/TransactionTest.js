const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Transactions Contract', function () {
  let transactionsContract;
  let owner;
  let receiver;
  const amount = ethers.utils.parseEther('1.0');
  const message = 'Test transaction';
  const keyword = 'TestKeyword';

  beforeEach(async function () {
    [owner, receiver] = await ethers.getSigners();
    const Transactions = await ethers.getContractFactory('Transactions');
    transactionsContract = await Transactions.deploy();
    await transactionsContract.deployed();
  });

  it('should add a transaction to the blockchain', async function () {
    const initialTransactionCount = await transactionsContract.getTransactionCount();

    await transactionsContract.addToBlockChain(receiver.address, amount, message, keyword);

    const newTransactionCount = await transactionsContract.getTransactionCount();
    expect(newTransactionCount).to.equal(initialTransactionCount.add(1));

    const transactions = await transactionsContract.getAllTransactions();
    expect(transactions).to.have.lengthOf(1);

    const transaction = transactions[0];
    expect(transaction.sender).to.equal(owner.address);
    expect(transaction.receiver).to.equal(receiver.address);
    expect(transaction.amount).to.equal(amount);
    expect(transaction.message).to.equal(message);
    expect(transaction.keyword).to.equal(keyword);
  });

  it('should emit a Transfer event when adding a transaction', async function () {
    const tx = await transactionsContract.addToBlockChain(receiver.address, amount, message, keyword);

    // Ensure the event is emitted with the correct data
    expect(tx).to.emit(transactionsContract, 'Transfer').withArgs(
      owner.address,
      receiver.address,
      amount,
      message,
      ethers.BigNumber.from(tx.timestamp),
      keyword
    );
  });
});
