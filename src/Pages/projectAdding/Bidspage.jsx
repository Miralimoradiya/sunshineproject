import React from 'react'
import BidsTable from '../../components/BidsPage/BidsTable';

const Bidspage = () => {
    const data = [
        {
          id:"1",
          projectid: "Project’s 2819172829",
          trade: "Architect",
          status:"closed",
          priority:"High"
        },
        {
          id:"2",
          projectid: "Project’s 2519172829",
          trade: "Mechanical 8",
          status:"open",
          priority:"High"
        },
        {
          id:"3",
          projectid: "Project’s 2819172829",
          trade: "Architect",
          status:"Open",
          priority:"Medium"
        },
        {
          id:"4",
          projectid: "Project’s 2819172829",
          trade: "Designer",
          status:"Open",
          priority:"Medium"
        },
        {
          id:"5",
          projectid: "Project’s 2819172829",
          trade: "Architect",
          status:"Open",
          priority:"Medium"
        },
        {
          id:"6",
          projectid: "Project’s 2819172829",
          trade: "Architect",
          status:"Closed",
          priority:"Medium"
        },
        {
          id:"7",
          projectid: "Project’s 2819172829",
          trade: "Architect",
          status:"Draft",
          priority:"Medium"
        },
        {
          id:"8",
          projectid: "Project’s 2819172829",
          trade: "Mechanical 8",
          status:"Draft",
          priority:"Medium"
        },
        {
          id:"9",
          projectid: "Project’s 2819172829",
          trade: "Architect",
          status:"Draft",
          priority:"Medium"
        },
      ];
  return (
    <div>
      <BidsTable data={data}/>
    </div>
  )
}

export default Bidspage
