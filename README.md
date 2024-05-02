# DocChainApprove

## Introduction
DocChainApprove is a blockchain-based document approval system that leverages smart contracts for secure and verifiable document handling processes.

## Features
- Blockchain integration for immutable document approval.
- Smart contract functionality for secure operations.
- IPFS document store.

## Installation Guide

### Prerequisites
- An [Alchemy](https://www.alchemy.com/) account for interacting with the blockchain.
- Node.js installed on your machine.

### Setting up the environment
1. Clone the repository to your local machine.
2. Copy `.env.example` to `.env`.
3. Add your Alchemy API Key (`ALCHEMY_API_KEY`) and your wallet's private key (`DEPLOYER_PRIVATE_KEY`) to the `.env` file.

### Deploying the Smart Contract
1. Navigate to the Hardhat directory:
   ```bash
   cd packages/hardhat
   ```
2. Install the dependencies:
   ```bash
   npx hardhat compile
   ```
3. Deploy the smart contracts using:
  ```bash
    npx ts-node --files ./scripts/DeployWithViem.ts
  ```

## Usage
After deployment, the smart contract can be interacted with through any frontend interface connected to the blockchain via Alchemy.
