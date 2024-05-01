//import { useState } from "react";

const Approver = () => {
  //   const [item, setItem] = useState(null);
  //   const [isApproved, setApproved] = useState(false);
  //   const [isDeclined, setDeclined] = useState(false);
  //   const [userInfo, setUserInfo] = useState(null);
  return (
    <>
      <div className="card w-96 neutral-content shadow-md">
        <div className="card-body">
          <h2 className="card-title">Proposal details</h2>
          <div className="text-start">
            <h3 className="font-bold">Id:</h3>
            <span>6464s848s4wdq46q54efd98q46fd41q6fd44q</span>
          </div>
          <div className="text-start">
            <h3 className="font-bold">Hash:</h3>
            <span>33f1d21fe6f93db23963a0c7b8e31a97</span>
          </div>
          <div className="text-start">
            <h3 className="font-bold">Description:</h3>
            <span>Description of the proposal</span>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 neutral-content">
            <div className="collapse-title text-sm font-medium">Initiator Details</div>
            <div className="collapse-content">
              <p>Name : _________ </p>
              <p>Id : ___________</p>
              <p>Address : ___________</p>
            </div>
          </div>
          <div className="mt-4">
            <button className="btn">
              View File
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 4a7 7 0 104.93 12.93l4.75 4.75a1 1 0 001.41-1.41l-4.75-4.75A7 7 0 0011 4zm0 12a5 5 0 110-10 5 5 0 010 10z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="card w-96 neutral-content shadow-md">
        <div className="card-body">
          <p>Pending...</p>
          <div className="card-actions justify-between btn-group">
            <button className="btn btn-success">Approve</button>
            <button className="btn btn-ghost">Decline</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Approver;
