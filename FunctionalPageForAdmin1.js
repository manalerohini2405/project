import React from "react";
import { Navbar } from "react-bootstrap";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
export default function FunctionalPageForAdmin1() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="FunctionalPage0Container">
        <h1
          style={{
            textAlign: "center",
            fontFamily: "cursive",
            marginTop: "30px",
            color: "blueviolet",
          }}
        >
          Admin Login
        </h1>
        <div className="FunctionalPage1Container">
          <div
            style={{
              padding: "6rem",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              width: "400px",
            }}
          >
            <h1 style={{ fontFamily: "cursive", color: "gray" }}>Reqest</h1>
            <button
              class="btn btn-outline-success"
              style={{ padding: "7px 22px 7px 22px" }}
            >
              User Info
            </button>
          </div>

          <div
            style={{
              padding: "6rem",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              width: "400px",
            }}
          >
            <h1 style={{ fontFamily: "cursive", color: "gray" }}>View</h1>
            <button
              class="btn btn-outline-success"
              style={{ padding: "7px 22px 7px 22px" }}
            >
              User Request
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
