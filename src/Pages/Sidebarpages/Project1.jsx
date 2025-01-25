import React, { useState } from "react";
import img1 from "../../assets/project1/alex-wong-l5Tzv1alcps-unsplash.png";
import img2 from "../../assets/project1/all-bong-L2oedF1AsH8-unsplash-1.png";
import img3 from "../../assets/project1/zia-syed-gOq27RHoL3s-unsplash.png";
import img4 from "../../assets/project1/fezbot2000-80b0ydkwj9A-unsplash.png";
import img5 from "../../assets/project1/joel-filipe-RFDP7_80v5A-unsplash.png";
import img6 from "../../assets/project1/luke-stackpoole-KjvIaa_Q5rY-unsplash.png";
import img7 from "../../assets/project1/matthew-henry-VviFtDJakYk-unsplash.png";
import img8 from "../../assets/project1/sean-pollock-PhYq704ffdA-unsplash.png";
import img9 from "../../assets/project1/sorasak-KxCJXXGsv9I-unsplash.png";
import Section1 from "../../components/Project1_Sections/Section1"
import Section2 from "../../components/Project1_Sections/Section2";
import Section3 from "../../components/Project1_Sections/Section3";

const Project1 = () => {
  const numbers = [1, 2, 3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({}); 

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numbers.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + numbers.length) % numbers.length
    );
  };

  const data = [
    {
      id: 1,
      img: img1,
      name: "John Doe",
      address: "123 Main St",
      owner: "Owner A",
      siteManager: "Manager A",
    },
    {
      id: 2,
      img: img2,
      name: "Jane Smith",
      address: "456 Elm St",
      owner: "Owner B",
      siteManager: "Manager B",
    },
    {
      id: 3,
      img: img3,
      name: "Alice Johnson",
      address: "789 Maple St",
      owner: "Owner C",
      siteManager: "Manager C",
    },
    {
      id: 4,
      img: img4,
      name: "John Doe",
      address: "123 Main St",
      owner: "Owner A",
      siteManager: "Manager A",
    },
    {
      id: 5,
      img: img5,
      name: "John Doe",
      address: "123 Main St",
      owner: "Owner A",
      siteManager: "Manager A",
    },
    {
      id: 6,
      img: img6,
      name: "John Doe",
      address: "123 Main St",
      owner: "Owner A",
      siteManager: "Manager A",
    },
    {
      id: 7,
      img: img7,
      name: "John Doe",
      address: "123 Main St",
      owner: "Owner A",
      siteManager: "Manager A",
    },
    {
      id: 8,
      img: img8,
      name: "John Doe",
      address: "123 Main St",
      owner: "Owner A",
      siteManager: "Manager A",
    },
    {
      id: 9,
      img: img9,
      name: "John Doe",
      address: "123 Main St",
      owner: "Owner A",
      siteManager: "Manager A",
    },
  ];

  const handleRowSelect = (rowData) => {
    setFormData(rowData);
  };

  return (
    <div className="project1">
      <div className="project1-main">
        <Section1 />
        <Section2 data={data} onRowSelect={handleRowSelect} />
        <Section3
          currentIndex={currentIndex}
          goToNext={goToNext}
          goToPrevious={goToPrevious}
          numbers={numbers}
        />
      </div>
    </div>
  );
};

export default Project1;


