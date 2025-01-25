import React from "react";
import BillingTable from "../../components/BillingPage/BillingTable";

const BillingPage = () => {
  const data = [
    {
      id: "1",
      project: "Project’s 2819172829",
      period: "30/6/2020 - 30/6/2020",
      status: "Open",
    },
    {
      id: "2",
      project: "Project’s 2819172829",
      period: "30/6/2020 - 30/6/2020",
      status: "Open",
    },
    {
      id: "3",
      project: "Project’s 2819172829",
      period: "30/6/2020 - 30/6/2020",
      status: "Open",
    },
    {
      id: "4",
      project: "Project’s 2819172829",
      period: "30/6/2020 - 30/6/2020",
      status: "Open",
    },
    {
      id: "5",
      project: "Project’s 2819172829",
      period: "30/6/2020 - 30/6/2020",
      status: "Closed",
    },
    {
      id: "6",
      project: "Project’s 2819172829",
      period: "30/6/2020 - 30/6/2020",
      status: "Open",
    },
    {
      id: "7",
      project: "Project’s 2819172829",
      period: "30/6/2020 - 30/6/2020",
      status: "Send to Owner",
    },
    {
      id: "8",
      project: "Project’s 2819172829",
      period: "30/6/2020 - 30/6/2020",
      status: "Send to Owner",
    },
    {
      id: "9",
      project: "Project’s 2819172829",
      period: "30/6/2020 - 30/6/2020",
      status: "Closed",
    },
  ];
  return (
    <div>
      <BillingTable data={data} />
    </div>
  );
};

export default BillingPage;
