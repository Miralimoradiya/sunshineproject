import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/fullpages/Login";
import Sendcode from "./Pages/fullpages/Sendcode";
import Project1 from "./Pages/Sidebarpages/Project1";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./Pages/Sidebarpages/Home";
import AddProject from "./Pages/projectAdding/AddProject";
import ForgetPass from "./Pages/fullpages/ForgetPass";
import CodeForgetpass from "./Pages/fullpages/CodeForgetpass";
import Plan from "./Pages/Sidebarpages/Plan";
import Bids from "./Pages/Sidebarpages/Bids/Bids";
import BillingCycle from "./Pages/Sidebarpages/BillingCycle/BillingCycle";
import SubContra from "./Pages/Sidebarpages/SubContra";
import ImagesSidebar from "./Pages/Sidebarpages/ImagesSidebar"
import Setting from "./Pages/Sidebarpages/Settingpage/Setting";
import NewUserForm from "./Pages/Sidebarpages/Settingpage/NewUserForm";
import AddBillingCycle from "./Pages/Sidebarpages/BillingCycle/AddBillingCycle";

const Layout = ({ children }) => (
  <>
    <Header />
    <div style={{ display: "flex", flex: 1 }}>
      <Sidebar />
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  </>
);

export default function RouterPath() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sendcode" element={<Sendcode />} />
        <Route path="/forgetpassword" element={<ForgetPass />} />
        <Route path="/codeofforgetpass" element={<CodeForgetpass />} />
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/project1" element={<Layout><Project1 /></Layout>} />
        <Route path="/addproject" element={<Layout><AddProject /></Layout>} />
        <Route path="/addproject/:id" element={<Layout><AddProject /></Layout>} />
        <Route path="/planpage" element={<Layout><Plan/></Layout>} />
        <Route path="/sidebarbids" element={<Layout><Bids/></Layout>} />
        <Route path="/sidebarbillingcycle" element={<Layout><BillingCycle/></Layout>} />
        <Route path="/sidebarbillingcycle/addbillings" element={<Layout><AddBillingCycle /></Layout>} />
        <Route path="/sidebarsubcontractor" element={<Layout><SubContra /></Layout>} />
        <Route path="/sidebarimages" element={<Layout><ImagesSidebar /></Layout>} />
        <Route path="/sidebarsetting" element={<Layout><Setting /></Layout>} />
        <Route path="/sidebarsetting/newuserform" element={<Layout><NewUserForm /></Layout>} />

      </Routes>
    </Router>
  );
}
