'use client';
import React, {useEffect, useState} from "react";
import factory from "../utils/factory";
const proposals = [
  { id: "PID-00123-A", date: "2024-03-28", status: "Pending" },
  { id: "PID-00124-B", date: "2024-04-02", status: "Approved" },
  { id: "PID-00125-C", date: "2024-03-30", status: "Declined" },
  { id: "PID-00126-D", date: "2024-04-10", status: "Pending" },
  { id: "PID-00127-E", date: "2024-04-15", status: "Approved" },
];

const ProposalCard = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const transactionList = await factory.methods.listTransaction().call();
      setTransactions(transactionList);
      console.log(transactionList, 'transactionList');
    };
    fetchData();
  }, []);

  return (
    <div className="card w-96 bg-neutral shadow-md">
      <div className="card-body">
        <h2 className="card-title">Proposal Details</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-primary">
                <th>Proposal ID</th>
                <th>Amount</th>
                <th>Comment</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(proposal => (
                <tr key={proposal.id}>
                  <td>{proposal.id}</td>
                  <td>{proposal.amount}</td>
                  <td>{proposal.comment}</td>
                  <td>{proposal.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProposalCard;
