import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import StatusContainer from "./StatusContainer";
import EventsContainer from "./EventsContainer";
import Namespace from "../../Components/namespace/Namespace";
import SidebarContainer from "../../Containers/SidebarContainer";
import MetricsContainer from "../../metrics/Container/MetricsContainer";
import OverviewContainer from "./OverviewContainer";

const MainContainer = () => {
  return (
    <Routes>
      
      <Route path="/" element={<OverviewContainer/>} />
      <Route path="/metrics" element={<MetricsContainer />} />
      
    </Routes>
  );
};

// const MainContainer = () => {
//   return (
//     <>
//     <div className="main-container"> 
//        <div className="sidebar-container">
//          <SidebarContainer />
//        </div>
//     </div>
//     </>
//   );
// };

export default MainContainer;
 {/* <Routes>
      <div>
        <Route path="/" element={<Namespace/>} />
        <Route path="/home" element={<StatusContainer />}/>
        <Route path="/home" element={<EventsContainer />}/>
        <Route path="/metrics" element={<MetricsContainer />} />
      </div>
    </Routes> */}