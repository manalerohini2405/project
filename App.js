import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Home from "./Home";
import AboutUs from "./AboutUs";
import SignUp from "./SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import ContactUs from "./ContactUs";
import FunctionalPage from "./FunctionalPage";
import FunctionalPage1 from "./FunctionalPage1";
import FunctionalInfo from "./FuncitonalInfo";
import FunctionalPageForAdmin1 from "./FunctionalPageForAdmin1";
import FunctionalPageEditForm from "./FunctionalPageEditForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/functionalpage" element={<FunctionalPage />} />
          <Route path="/functionalpage1" element={<FunctionalPage1 />} />
          <Route path="/pickup-list" element={<FunctionalInfo />} />
          <Route path="/admin" element={<FunctionalPageForAdmin1 />} />
          <Route path="/editfunctionalpage" element={<FunctionalPageEditForm/>} />
          <Route path="*" element={<h1>Page not found </h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
