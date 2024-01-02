# SwiftPay

![MainPage](/public/Images/mainpage.png)
![MultiSendPage](/public/Images/multisend.png)

# SwiftPay: Ethereum Transaction Management DApp

SwiftPay is a decentralized application (DApp) designed for seamless and efficient management of Ethereum transactions. It enables users to send Ether to both individual and multiple accounts with ease and security. The project comprises an Ethereum smart contract backend written in Solidity and a user-friendly React frontend, styled using Tailwind CSS and streamlined with Vite.

## Description

SwiftPay integrates two main components:
1. **Ethereum Smart Contract**: The backend logic, written in Solidity, handles transaction processing and tracking on the Ethereum blockchain. It ensures fast, reliable, and secure transactions.
2. **React Frontend**: A dynamic web interface, styled with Tailwind CSS and developed using Vite. This frontend allows users to interact with the Ethereum blockchain, manage transactions, and utilize features such as MultiSend for sending Ether to multiple addresses.

The DApp offers a range of advantages for its users, including speed, reliability, ease of use, cost efficiency, and transparent tracking of transactions.

## Getting Started

### Prerequisites

Before setting up SwiftPay, ensure you have:
- Node.js (LTS version)
- Yarn or npm installed
- MetaMask or any other Ethereum wallet browser extension

### Installation

1. **Clone the SwiftPay repository:**

   ```bash
   git clone https://github.com/Lukman-01/SwiftPay-Web3-App.git
   cd SwiftPay
   ```

2. **Install dependencies for the smart contract:**

   ```bash
   cd smart_contract
   npm install
   ```

3. **Deploy the smart contract:**
   
   - Modify the deployment scripts with your specific Ethereum network details.
   - Deploy using Hardhat.

4. **Install dependencies for the frontend:**

   ```bash
   cd ../frontend
   npm install
   ```

5. **Set up the frontend environment:**

   - Configure the `.env` file with the necessary smart contract addresses and other configurations.

6. **Launch the frontend application:**

   ```bash
   npm run dev
   ```

   The application will be accessible at `http://localhost:5173` or a different specified port.

### Using SwiftPay

1. **Connect Ethereum Wallet:**
   
   - Use MetaMask or a similar extension to connect your Ethereum wallet to SwiftPay.

2. **Send Transactions:**
   
   - Enter transaction details to send Ether to individual or multiple accounts.

3. **Track and Manage Transactions:**
   
   - Monitor the status and details of your transactions through the SwiftPay interface.

## Authors

Developed by a team of dedicated blockchain enthusiasts.

[Your LinkedIn Profile or Website]

## License

SwiftPay is open-sourced under the MIT License - see the LICENSE file in the repository for more details.