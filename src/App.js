import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/HomePages/LandingPage";
import ClientHome from "./components/HomePages/ClientHome";
import VetDoctorHome from "./components/HomePages/VetDoctorHome";
import ClientRegistration from "./components/Registration/ClientRegistration";
import ClientLogin from "./components/Login/ClientLogin";
import VetDoctorRegistration from "./components/Registration/VetDoctorRegistration";
import VetDoctorLogin from "./components/Login/VetDoctorLogin";
import ClientIndex from "./components/IndexPages/ClientIndex";
import ClientPets from "./components/ClientUserPages/ClientPets";
import ClientAddPet from "./components/ClientUserPages/ClientAddPet";
import ClientUpdate from "./components/ClientUserPages/ClientUpdate";
import ClientChangePassword from "./components/ClientUserPages/ClientChangePassword";
import VetDoctorIndex from "./components/IndexPages/VetDoctorIndex";
import VetDoctorAddEducation from "./components/VetDoctorUserPages/VetDoctorAddEducation";
import VetDoctorAddExperience from "./components/VetDoctorUserPages/VetDoctorAddExperience";
import VetDoctorUpdate from "./components/VetDoctorUserPages/VetDoctorUpdate";
import VetDoctorChangePassword from "./components/VetDoctorUserPages/VetDoctorChangePassword";



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/client-home" element={<ClientHome />} />
          <Route
            path="/client-home/register"
            element={<ClientRegistration />}
          />
          <Route path="/client-home/login" element={<ClientLogin />} />
          <Route path="/client-home/index" element={<ClientIndex />} />
          <Route path="/client-home/index/pets" element={<ClientPets />} />
          <Route path="/client-home/index/add-pet" element={<ClientAddPet />} />
          <Route
            path="/client-home/index/update-client"
            element={<ClientUpdate />}
          />
          <Route
            path="/client-home/index/change-password"
            element={<ClientChangePassword />}
          />

          <Route path="/vetdoctor-home" element={<VetDoctorHome />} />
          <Route
            path="/vetdoctor-home/register"
            element={<VetDoctorRegistration />}
          />
          <Route path="/vetdoctor-home/login" element={<VetDoctorLogin />} />
          <Route path="/vetdoctor-home/index" element={<VetDoctorIndex />} />

          <Route path="/vetdoctor-home/index/add-education" element={<VetDoctorAddEducation />} />
          <Route path="/vetdoctor-home/index/add-experience" element={<VetDoctorAddExperience />} />

          <Route
            path="/vetdoctor-home/index/update-vetdoctor"
            element={<VetDoctorUpdate />}
          />
          <Route
            path="/vetdoctor-home/index/change-password"
            element={<VetDoctorChangePassword />}
          />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
