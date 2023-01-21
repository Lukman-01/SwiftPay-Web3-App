

const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");

  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions are deployed to ", transactions.address);


  const MultiSend = await hre.ethers.getContractFactory("MultiSend");

  const multisends = await MultiSend.deploy();

  await multisends.deployed();

  console.log("Multisends are deployed to ", multisends.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();




// async function deploy() {
//     const Contract1 = await ethers.getContractFactory("Contract1");
//     const contract1 = await Contract1.deploy();
//     await contract1.deployed();

//     const Contract2 = await ethers.getContractFactory("Contract2");
//     const contract2 = await Contract2.deploy();
//     await contract2.deployed();
// }

// deploy()
//     .then(() => {
//         console.log("Contracts deployed!");
//     })
//     .catch((error) => {
//         console.error(error);
//     });

