// ApproverListView.tsx
import { useRouter } from "next/navigation";

const statusIcons = {
  approved: (
    <svg className="w-4 h-4 inline mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  declined: (
    <svg className="w-4 h-4 inline mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  pending: (
    <svg className="w-4 h-4 inline mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 2a1 1 0 011 1v5h5a1 1 0 110 2h-6a1 1 0 01-1-1V3a1 1 0 011-1z"></path>
    </svg>
  ),
};

const approvalRequests = [
  {
    id: "6464s848s4wdq46q54efd98q46fd41q6fd44q",
    date: "2024-04-30",
    userId: "U1001",
    userName: "John Doe",
    transactionHash: "0xabc123fdeokefgokrewowkfgowkfg",
    status: "pending",
  },
  {
    id: "875ds2asd2a8sd2a8sd2a8sd2a8sd2a8sd2a8s",
    date: "2024-04-29",
    userId: "U1002",
    userName: "Jane Smith",
    transactionHash: "0xdef456ffvbrsdgfgsdggggggeggssd",
    status: "approved",
  },
  {
    id: "ew65787s7d8s7d8s7d8s7d8s7d8s7d8s7d8sef",
    date: "2024-04-28",
    userId: "U1003",
    userName: "Alice Johnson",
    transactionHash: "0xghi789ffvbrsdgfgsdgferfwdgssdpi",
    status: "declined",
  },
];

const ApproverList = () => {
  const router = useRouter();
  const changeStatus = (id: string) => {
    console.log("Status changed for transaction ID:", id);
    router.push("/approveordenyproposal"); // Redirects to the homepage for now
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Approval Requests</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Date of Request</th>
            <th>User ID</th>
            <th>User Name</th>
            <th>Transaction Hash</th>
            <th>Status</th>
            <th>Change Status</th>
          </tr>
        </thead>
        <tbody>
          {approvalRequests.map(request => (
            <tr key={request.id}>
              <td>{request.date}</td>
              <td>{request.userId}</td>
              <td>{request.userName}</td>
              <td>{request.transactionHash}</td>
              <td>
                {["approved", "declined", "pending"].includes(request.status)
                  ? statusIcons[request.status as keyof typeof statusIcons]
                  : null}
                {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
              </td>
              <td>
                <button className="btn btn-info" onClick={() => changeStatus(request.id)}>
                  Change Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApproverList;
