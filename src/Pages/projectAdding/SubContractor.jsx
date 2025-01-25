import React from 'react'
import SubContractorTable from "../../components/Subcontractorpage/SubContractorTable"

const SubContractor = () => {
    const data = [
        {
          name: "John Doe",
          projectcontracts: "Sunshine Constructor",
          Trade: "MEP Engineer",
          plans: "3 (Latest Trade)",
          Contract:"$ Null"
        },
        {
          name: "Jane Smith",
          projectcontracts: "Sunshine Subs",
          Trade: "Mechanical 8",
          plans: "2 (Latest Trade)",
          Contract:"$ Null"
        },
        {
          name: "Alice Johnson",
          projectcontracts: "Sunshine Subs",
          Trade: "Architect Designer",
          plans: "3 (Latest Trade)",
          Contract:"$ Null"
        },
        {
          name: "John Doe",
          projectcontracts: "John Smith",
          Trade: "MEP Engineer",
          plans: "3 (Latest Trade)",
          Contract:"$ Null"
        },
        {
          name: "John Doe",
          projectcontracts: "Architect",
          Trade: "Architect Designer",
          plans: "4 (Latest Trade)",
          Contract:"$ Null"
        },
        {
          name: "John Doe",
          projectcontracts: "Sunshine Constructor",
          Trade: "MEP Engineer",
          plans: "2 (Latest Trade)",
          Contract:"$ Null"
        },
        {
          name: "John Doe",
          projectcontracts: "Architect",
          Trade: "Architect Designer",
          plans: "3 (Latest Trade)",
          Contract:"$ Null"
        },
        {
          name: "John Doe",
          projectcontracts: "Mechanical 8",
          Trade: "Architect Designer",
          plans: "2 (Latest Trade)",
          Contract:"$ Null"
        },
        {
          name: "John Doe",
          projectcontracts: "Architect",
          Trade: "MEP Engineer",
          plans: "3 (Latest Trade)",
          Contract:"$ Null"
        },
      ];
  return (
    <>
      <SubContractorTable data={data}/>
    </>
  )
}

export default SubContractor
