import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import MeasurementsDialog from "../../components/AddProject/MeasurementsDialog";
import AddprojectSec1 from "../../components/AddProject/AddprojectSec1";
import AddprojectSec2 from "../../components/AddProject/AddprojectSec2";
import PlanHead from "../../components/Planpage/PlanHead";
import PlanFooter from "../../components/Planpage/PlanFooter";
import SubContractorHead from "../../components/Subcontractorpage/SubContractorHead";
import BidsHead from "../../components/BidsPage/BidsHead";
import BillingHead from "../../components/BillingPage/BillingHead";
import ImagesHead from "../../components/ImagesPage/ImagesHead"

const initialFormData = {
  name: "",
  address: "",
  city: "",
  zip: "",
  state: "",
  contractor: "",
  measurements: { stories: "", units: "", squareFeet: "" },
  additionalInfo: Array(15).fill(""),
};

const AddProject = () => {
  const numbers = [1, 2, 3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();
  const location = useLocation();
  const [formData, setFormData] = useState(initialFormData);
  const [measurementsDialogOpen, setMeasurementsDialogOpen] = useState(false);
  const [isDataSaved, setIsDataSaved] = useState(false);
  const [activeLink, setActiveLink] = useState("basic");

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numbers.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + numbers.length) % numbers.length
    );
  };
  const resetForm = () => {
    setFormData(initialFormData);
    setIsDataSaved(false);
  };

  useEffect(() => {
    if (location.state?.rowData) {
      const { rowData } = location.state;
      setFormData({
        name: rowData.name,
        address: rowData.address,
        city: "example city",
        zip: rowData.id,
        state: "example state",
        contractor: rowData.contractor,
        measurements: { stories: "5", units: "20", squareFeet: "5000" },
        additionalInfo: [
          "John Contractor",
          "Alice Owner",
          "Mark SiteManager",
          "Default Bidder",
          "Jane Architect",
          "Sam Designer",
          "Tom Structural Engineer",
          "Raj MEP Engineer",
          "Kate Designer",
          "01-01-2024",
          "Submit Monthly",
          "First of Month",
          "10th of Month",
          "15th of Month",
          "https://dropbox.com/folder/sample-project",
        ],
      });
      setIsDataSaved(true);
    }
  }, [location.state]);

  const handleInputChange = (key, value) => {
    setFormData((prev) => {
      if (typeof key === "string") {
        const keys = key.split(".");
        return keys.reduceRight(
          (acc, curr) => ({ ...prev, [curr]: acc }),
          value
        );
      } else {
        return {
          ...prev,
          additionalInfo: prev.additionalInfo.map((item, i) =>
            i === key ? value : item
          ),
        };
      }
    });
  };

  const handleMeasurementsData = (measurements) => {
    setFormData((prevData) => ({
      ...prevData,
      measurements: { ...prevData.measurements, ...measurements },
    }));
  };

  const renderfirstsection = () => {
    if (activeLink === "basic") {
      return (
        <AddprojectSec1
          onSave={() => setIsDataSaved(true)}
          onCancel={resetForm}
          onEdit={() => setIsDataSaved(false)}
          isDataSaved={isDataSaved}
        />
      );
    } else if (activeLink === "plan") {
      return <PlanHead />;
    }else if (activeLink === "subcontractor"){
      return <SubContractorHead/>
    }
    else if (activeLink === "bids"){
      return <BidsHead/>
    }
    else if (activeLink === "billing"){
      return <BillingHead/>
    }
    else if (activeLink === "images"){
      return <ImagesHead />
    }
  };

 
  const renderlastsection = () => {
    if (["plan", "subcontractor", "bids", "billing"].includes(activeLink)){
      return (
        <PlanFooter
          currentIndex={currentIndex}
          goToNext={goToNext}
          goToPrevious={goToPrevious}
          numbers={numbers}
        />
      );
    }else{
      return null
    }
  };


  return (
    <>
      <div className="addproject">
        <div className="addproject-main">
          {renderfirstsection()}
          <AddprojectSec2
            formData={formData}
            onInputChange={handleInputChange}
            onMeasurementsDialogOpen={() => setMeasurementsDialogOpen(true)}
            isDataSaved={isDataSaved}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
          {renderlastsection()}
        </div>
      </div>
      <MeasurementsDialog
        open={measurementsDialogOpen}
        onClose={() => setMeasurementsDialogOpen(false)}
        onAddStory={handleMeasurementsData}
      />
    </>
  );
};

export default AddProject;
