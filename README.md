<p align="center">
  <h1 align="center"><a href="/" target="_blank">GauMedi</a></h1>
  <p align="center">
    Revolutionizing healthcare data management: blockchain-based medical record storage for patients and insurance companies
  </p>
</p>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
  <li>
      <a href="#getting-started">Problem Statement</a>
  </li>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
      </ul>
        <li><a href="#built-with">Built With</a></li>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#running-the-project">Running the project</a></li>
      </ul>
    </li>
     <li>
      <a href="#Future Prospective">Future Prospects</a>
     </li>
    <!-- <li><a href="#relevant-screenshots">Relevant Screenshots</a></li> -->
  </ol>
</details>

## ℹ️ Problem Statement

Protecting patient data privacy is crucial due to the sensitive nature of personal information, including medical records, test results, and health histories. Breaches in data privacy can lead to serious repercussions, such as financial losses, identity theft, damage to one’s reputation, and even potential physical harm. Furthermore, individuals with specific health conditions may experience discrimination, making it harder for them to secure health insurance. Ensuring robust privacy measures is essential to safeguard patients and uphold their rights.

## ℹ️ About The Project

Our project, GauMedi, aims to tackle the challenges of data privacy in healthcare by utilizing blockchain technology to establish a secure and decentralized platform for storing and sharing medical information. This approach not only enhances data security but also empowers patients and insurance providers to make informed decisions, ultimately leading to better health outcomes and advancements in the healthcare sector. Additionally, we’ve made significant improvements to the user interface and functionality to ensure a seamless experience for all users.

## ℹ️ Future Prospects
1. We will be implementing insurance policy as ERC-721 Standard (i.e Non-Fungible Tokens), so as to specify the uniqueness and ownership of each insurance policy.
2. We will be giving patients the flexibility to buy health insurance policy according to their preference instead of defined policies by the insurance provider.
3. We will predict policy annual premium amount using Machine Learning techniques based on factors like patient's age, location, etc.

## 🛠️ Built With

![img1](https://user-images.githubusercontent.com/66792720/232314435-eaf54582-deb5-4970-ab55-2d9bf8976020.jpeg)
Following technologies and libraries are used for the development of this project.

- [React](https://reactjs.org/)
- [Solidity](https://soliditylang.org/)
- [Truffle](https://trufflesuite.com/)
- [Mocha](https://mochajs.org/)
- [Chai](https://chaijs.com/)
- [Infura](https://infura.io/)

<!-- GETTING STARTED -->

## 📌 Installation

To setup the project locally follow the steps below

### 💻 Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Ganache](https://trufflesuite.com/ganache/)
- [Metamask Wallet Extension](https://docs.docker.com/compose/install/) or a Web3 browser like Brave

### 🤖 Running the project.

To set this up in the local repository:

1. **Fork** and **clone** the project to your local system
2. Copy the commands below to install the dependencies:

```
npm i -g truffle
npm run client:install
npm run truffle:install
```

3. Now, start a local Ethereum blockchain network on your system using Ganache. Ganache provides you with 10 testing accounts each with 100 ETH. 

4. Obtain Infura API Key and API Secret for IPFS from [Infura Dashboard](https://infura.io/), and create a dedicated gateway for your project. Set the environment variables in `client/.env` file. Or you can rename `client/.env.example` to `client/.env`
```bash
REACT_APP_PINATA_API_KEY=....
REACT_APP_PINATA_API_SECRET=....
REACT_APP_PINATA_JWT_TOKEN=....
```

5. Then, copy the following commands to deploy the smart contracts to the local Ethereum blockchain and start the React app:

```
npm run truffle:migrate
npm run client:start
```

6. Set up Metamask to connect to the local blockchain created by Ganache(i.e. [http://localhost:7545/](http://localhost:7545/))

7. Now, obtain the private keys of some of the accounts from Ganache and import the accounts into Metamask wallet.

8. You're ready to go. Visit [http://localhost:3000/](http://localhost:3000/) to check out 
