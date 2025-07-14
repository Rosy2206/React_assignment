import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const data = [
  {
    job: "Launch social media campaign for pro...",
    submitted: "15-1-2024",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabro...",
    assigned: "Sophie Choudhury",
    priority: "Low",
    dueDate: "30-01-2025",
    estValue: "2,800,000"
  },
  {
    job: "Update press kit for company design",
    submitted: "28-8-2024",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygree...",
    assigned: "Mark Johnson",
    priority: "Low",
    dueDate: "10-12-2025",
    estValue: "4,500,000"
  },
  {
    job: "Finalize user testing feedback for app",
    submitted: "10-9-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohns...",
    assigned: "Rachel Lee",
    priority: "Medium",
    dueDate: "15-10-2024",
    estValue: "4,750,000"
  },
  {
    job: "Design new feature for the website",
    submitted: "25-8-2021",
    status: "In-process",
    submitter: "Irfan Khan",
    url: "www.irfankhan...",
    assigned: "Tejas Pandey",
    priority: "High",
    dueDate: "20-1-2024",
    estValue: "6,300,000"
  },
  {
    job: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Need to start",
    submitter: "Kevin Smith",
    url: "www.kevinsmit...",
    assigned: "Tom Wright",
    priority: "Medium",
    dueDate: "30-01-2025",
    estValue: "3,500,000"
  }
];

const getStatusBadge = (status) => {
  switch (status) {
    case "Blocked":
      return "badge bg-danger";
    case "Complete":
      return "badge bg-success";
    case "In-process":
      return "badge bg-warning text-dark";
    case "Need to start":
      return "badge bg-info text-dark";
    default:
      return "badge bg-secondary";
  }
};

const getPriorityBadge = (priority) => {
  switch (priority) {
    case "Low":
      return "badge bg-primary";
    case "Medium":
      return "badge bg-warning text-dark";
    case "High":
      return "badge bg-danger";
    default:
      return "badge bg-secondary";
  }
};

const Table = () => {
  return (
    <div className="container-fluid mt-3">
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>Job Request</th>
              <th>Submitted</th>
              <th>Status</th>
              <th>Submitter</th>
              <th>URL</th>
              <th>Assigned</th>
              <th>Priority</th>
              <th>Due Date</th>
              <th>Est. Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                <td>{row.job}</td>
                <td>{row.submitted}</td>
                <td>
                  <span className={getStatusBadge(row.status)}>
                    {row.status}
                  </span>
                </td>
                <td>{row.submitter}</td>
                <td>{row.url}</td>
                <td>{row.assigned}</td>
                <td>
                  <span className={getPriorityBadge(row.priority)}>
                    {row.priority}
                  </span>
                </td>
                <td>{row.dueDate}</td>
                <td>{row.estValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;



