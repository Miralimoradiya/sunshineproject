import React from 'react'
import PlanTable from '../../components/Planpage/PlanTable'

const PlanPage = () => {
    const data = [
        {
          name: "John Doe",
          type: "Architect",
          version: "1",
          link: "3 (Latest Version)",
          update:"22/3/2004"
        },
        {
          name: "Jane Smith",
          type: "Mechanical 8",
          version: "2",
          link: "2 (Latest Version)",
          update:"22/3/2004"
        },
        {
          name: "Alice Johnson",
          type: "Architect",
          version: "3",
          link: "3 (Latest Version)",
          update:"22/3/2004"
        },
        {
          name: "John rop",
          type: "Designer",
          version: "4",
          link: "3 (Latest Version)",
          update:"22/3/2004"
        },
        {
          name: "rius Doe",
          type: "Architect",
          version: "5",
          link: "4 (Latest Version)",
          update:"22/3/2004"
        },
        {
          name: "piya jain",
          type: "Architect",
          version: "6",
          link: "2 (Latest Version)",
          update:"22/3/2004"
        },
        {
          name: "vru vachiyat",
          type: "Architect",
          version: "7",
          link: "3 (Latest Version)",
          update:"22/3/2004"
        },
        {
          name: "Maitri jain",
          type: "Mechanical 8",
          version: "8",
          link: "2 (Latest Version)",
          update:"22/3/2004"
        },
        {
          name: "alice pure",
          type: "Architect",
          version: "9",
          link: "3 (Latest Version)",
          update:"22/3/2004"
        },
      ];
      const actionButtonStyles = {
        position: "fixed",
        display: "none",
        top: "17.5%",
        right: "15.5%",
      };
      
      const buttonStyles = {
        color: "white",
        display: "none",
        backgroundColor: "#FF4D4D",
        borderRadius: "25px",
        padding: "10px 79%",
        boxShadow: "0 4px 8px rgba(238, 0, 0, 0.2)",
        transition: "2s",
      };
  return (
    <div>
      <PlanTable data={data} buttonStyles={buttonStyles} actionbuttonStyles={actionButtonStyles}/>
    </div>
  )
}

export default PlanPage
