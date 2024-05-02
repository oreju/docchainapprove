'use client';
import React, { useState } from 'react';
import { PdfUpload } from './PdfUpload';  // Ensure PdfUpload is correctly imported
import  factory  from '../utils/factory';  // Ensure factory is correctly imported
import web3 from '../utils/web3';  // Ensure web3 is correctly imported
import sha256 from "sha256";
import { uid } from "uid";
const UserView = () => {
  const [proposalUrl, setProposalUrl] = useState('');
  const [documentHash, setDocumentHash] = useState('');
  const [file, setFile] = useState("");
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");
  const [hash, setHash] = useState("");
  const [id, setId] = useState("");
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [estimate, setEstimate] = useState();

  const handleCreateTransaction = async () => {
    if (!proposalUrl) {
      alert('Please upload the PDF and wait for it to finish uploading before submitting the proposal.');
      return;
    }
    // setCreating(true);
    let salt = "";
    let id = "";
    const accounts = await web3.eth.getAccounts();
    //   const docHash = result[0].hash;
    const transaction = await factory.methods
      .createTransaction("11", "111111", "default", "333", 222)
      .send({
        from: accounts[0],
      });
    console.log(proposalUrl, 'setProposalUrl')
    const tx = transaction.transactionHash;
    console.log("Transaction hash: ", tx);
    id = uid(24);
    setId(id);
    console.log(proposalUrl, 'setProposalUrl')
    console.log(documentHash, 'documentHash')
    setHash(tx)
  };

  return (
    <>
      <div className="card w-96 neutral-content shadow-md">
        <div className="card-body">
          <h2 className="card-title">Your Proposal Details</h2>
          <div className="text-start">
            <h3 className="font-bold">Proposal ID:</h3>
            <span>Auto-generated ID here</span>
          </div>
          <div className="text-start">
            <h3 className="font-bold">Proposal Hash:</h3>
            <span>{hash}</span>
          </div>
          <div className="text-start">
            <h3 className="font-bold">Proposal Description:</h3>
            <span>Input for proposal description here</span>
          </div>
          <div className="mt-4">
            <PdfUpload setUrl={setProposalUrl} setHash={setDocumentHash}/>
          </div>
          {/* if document hash then show */}
          <div className="text-start">
            <h3 className="font-bold">Document Hash:</h3>
            <span>{documentHash}</span>
          </div>
          <div className="mt-4">
            <button className="btn" onClick={handleCreateTransaction}>
              Submit Proposal
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserView;
