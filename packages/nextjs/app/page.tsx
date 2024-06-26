import Link from "next/link";
import type { NextPage } from "next";
import ProposalCard from "~~/components/ProposalCard";
import UserView from "~~/components/UserView";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-5">
        <div className="px-5 w-full">
          <div className=" text-right">
            <RainbowKitCustomConnectButton />
          </div>
          <div className="skeleton text-center mt-2">Approver Superpower</div>
          <div className="text-center mt-5 mb-5">
            <Link href="/approverlistproposals" className="btn btn-neutral">
              View Proposals list for Approver X
            </Link>
          </div>
          <div className="flex justify-center">
            <div>
              <h1 className="text-center mb-8">
                <span className="block text-2xl mb-2">Blockchain Based Document Approval System</span>
                <span className="block text-4xl font-bold">DocChainApprove</span>
              </h1>
              <p className="text-center text-lg">
                A proof-of-concept implementation of a blockchain-based document approval system.
              </p>
              <div className=" justify-center card w-200 bg-neutral text-neutral-content mt-10">
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Proposal to Approve or Deny</h2>
                  <p>Overview of pending approval request </p>
                  <ProposalCard></ProposalCard>
                  <UserView></UserView>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
