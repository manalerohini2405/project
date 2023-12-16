import React from "react";
import Navbar3 from "./Navbar3";
import { Link } from "react-router-dom";
//import FunctionalPageEditForm from "./FunctionalPageEditForm";
function FunctionalPage2({ Value }) {
  console.log({ Value });
  const {
    name,
    States,
    Address,
    BiodegradeWaste,
    NonBiodegradeWaste,
    DryBiodegradeWaste,
  } = Value;
  const waste = BiodegradeWaste
    ? "BiodegradeWaste"
    : NonBiodegradeWaste
    ? "NonBiodegradeWaste"
    : "DryBiodegradeWaste";
  return (
    <>
      <div
        style={{
          padding: "6rem",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          width: "400px",
          backgroundImage: "url(brownbg.jpg)",
        }}
      >
        <h1 style={{ color: "White", fontFamily: "bold" }}> Your Details:</h1>
        <p style={{ color: "White", fontFamily: "bold" }}>Name : {name}</p>
        <p style={{ color: "White", fontFamily: "bold" }}> State: {States}</p>
        <p style={{ color: "White", fontFamily: "bold" }}>
          Address : {Address}
        </p>
        <p style={{ color: "White", fontFamily: "bold" }}>Waste : {waste}</p>
        {/* <input
                //onClick={() => }
              
                type="button"
                class="btn btn-outline-primary"
                style={{ padding: "7px 24px 7px 24px", marginTop: "10px",marginright:"5px" }}
                value="Edit"
        /> */}
        <button
              class="btn btn-outline-primary"
              style={{ padding: "7px 22px 7px 22px" }}
            >
              <Link to="/editfunctionalpage" style={{ textDecoration: "none" }}>
                Edit
              </Link>
            </button>
         <input
                //onClick={() => setShow(true)}
                type="button"
                class="btn btn-outline-danger"
                style={{ padding: "7px 24px 7px 24px", marginTop: "10px", marginLeft:"10px"}}
                value="Delete"
              />
      </div>
      
    </>
  );
}

export default FunctionalPage2;
