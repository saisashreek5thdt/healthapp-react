import React from "react";
import Navbar from "../shared/Navbar";
import DoctorTabs from "../shared/ButtonTabs";

import PatientDoctorInfo from "./Patient-DoctorInfo";

const MyPatientsInfo = () => {
  return (
    <>
      {/* Dashboard Container Starts Here */}
      <div className="dashboard__Container">
        <Navbar />
        <DoctorTabs />
        {/*
          <header className="header__Box">
          <div className="header__Box--Heading">
            <h1 className="header__Box--Heading-Primary">Dashboard</h1>
          </div>
        </header>
        */}
        <main>
          <div className="dashboard__Content">
            {/* Replace with your content */}
            <div className="dashboard__Content--Box">
              {/* <div className="dashboard__Content--Border" /> */}
              {/* <PatientDoctorInfo /> */}

              <div className="tab-content" id="tabs-tabContentJustify">
              <div
                className="tab-pane fade show active"
                id="tabs-homeJustify"
                role="tabpanel"
                aria-labelledby="tabs-home-tabJustify"
              >
                Tab 1
              </div>
              <div
                className="tab-pane fade"
                id="tabs-profileJustify"
                role="tabpanel"
                aria-labelledby="tabs-profile-tabJustify"
              >
                Tab 2
              </div>
              <div
                className="tab-pane fade"
                id="tabs-messagesJustify"
                role="tabpanel"
                aria-labelledby="tabs-profile-tabJustify"
              >
                Tab 3
              </div>
            </div>

            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
      {/* Dashboard Container Ends Here */}
    </>
  );
};

export default MyPatientsInfo;
