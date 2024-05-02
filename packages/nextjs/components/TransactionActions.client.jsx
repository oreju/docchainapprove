// TransactionActions.client.jsx
'use client';
import factory from '../utils/factory';
import web3 from '../utils/web3';
import { useEffect, useState } from "react";


export default function TransactionActions() {

  const [propsalList, setPropsalList] = useState([]);

  useEffect(()=>{
    let proposals = proposalsList()
    setPropsalList(proposals)
  })
  // Define a method to handle the entire transaction creation process
  const handleCreateTransaction = async () => {
    console.log("Starting transaction creation...");

    // Fetch accounts from web3 and perform the transaction
    const accounts = await fetchAccountsAndExecuteTransaction();
    console.log('Fetched accounts:', accounts);  // This log is now appropriately placed after accounts are fetched
  };

  // A separate function to fetch accounts and initiate the transaction
  const fetchAccountsAndExecuteTransaction = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('accounts1', accounts);

    // Execute the transaction once accounts are fetched
    const transaction = await factory.methods
      .createTransaction("1234141214", "4444444", "default", "test", 213)
      .send({ from: accounts[0] });

    console.log(transaction.transactionHash, 'Transaction Hash');
    console.log('Transaction Details:', transaction);
    

    return accounts;  // Returning accounts if needed elsewhere, though not used here
  };

  // Define event handlers for approval and decline buttons
  const handleApproveProposal = async(hash) => {
    try{
    const accounts = await web3.eth.getAccounts();
    console.log('accounts1', accounts);

    // Execute the transaction once accounts are fetched
    const transaction = await factory.methods
      .approveTransaction("_ipfsHash")
      .send({ from: accounts[0] });

    console.log(transaction.transactionHash, 'Transaction Hash');
    console.log('Transaction Details:', transaction);
    console.log("Transaction approved.");
    }
    catch (err){
      console.log(err)
    }

    return 
    
  };

  const proposalsList = async() =>{
    const proposals = await factory.methods
    .listTransaction()
    return proposals
  }

  const handleDecline = () => {
    console.log("Transaction declined.");
  };
  
//once we have transactions/proprosals we can retreive them from smart contract and map each element from array to an object 
  return (
    <>
      <div className="card w-96 neutral-content shadow-md">
        <div className="card-body">
          <div className="card-actions justify-between btn-group">
            <button className="btn btn-success" onClick={()=>handleApproveProposal("ipfsHash")}>Approve</button>
            <button className="btn btn-ghost" onClick={handleDecline}>Decline</button>
          </div>
        </div>
      </div>

      <div className="card w-96 neutral-content shadow-md">
        <button className="btn btn-primary" onClick={handleCreateTransaction}>
          Create Transaction
        </button>
      </div>
    </>
  );
}
