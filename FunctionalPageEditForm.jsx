import React, { useState } from "react";
import FunctionalPage2 from "./FunctionalPage2";
import Navbar from "./Navbar";
import Navbar3 from "./Navbar3";
import Footer from "./Footer";
function FunctionalPageEditForm(){

    const [show, setShow] = React.useState(false);
    const [data, setData] = useState({
      name: "",
      States: "",
      Address: "",
      BiodegradeWaste: "",
      NonBiodegradeWaste: "",
      DryBiodegradeWaste: "",
    });
  
    const handleAdd = (e) => {
      let { name, value, checked, type } = e.target;
  
      value = type === "checkbox" ? checked : value;
  
      setData({ ...data, [name]: value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      let waste = "";
      let url = `http://localhost:4000/editUserReq/name?name=${data.name}&state=${
        data.States
      }&city=${data.Address}&waste=${(waste = data.BiodegradeWaste
        ? "BiodegradeWaste"
        : data.NonBiodegradeWaste
        ? "NonBiodegradeWaste"
        : "DryBiodegradeWaste")}`;
      await fetch(url);
  
      // let newData = {
      //   name: "",
      //   States: "",
      //   Address: "",
      //   BiodegradeWaste: "",
      //   NonBiodegradeWaste: "",
      //   DryBiodegradeWaste: "",
      // };
      // setData(newData);
    };
  
    return (
      <>
        <Navbar />
        <Navbar3 />
        <div className="FunctionalPage0Container">
          <div className="FunctionalPage1Container">
            <div
              style={{
                padding: "6rem",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                width: "400px",
              }}
            >
              <form onSubmit={onSubmit}>
                <div class="input-group flex-nowrap">
                  <span class="input-group-text" id="addon-wrapping">
                    #
                  </span>
                  <input
                    onChange={handleAdd}
                    value={data.name}
                    name="name"
                    placeholder="Enter your Name"
                    class="form-control"
                    aria-describedby="addon-wrapping"
                  />
                </div>
                <br />
  
                <select
                  style={{
                    padding: "0.5rem",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                  value={data.States}
                  name="States"
                  onChange={handleAdd}
                >
                  <option value=""> select States </option>
                  <option value="Andhra Pradesh"> Andhra Pradesh </option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh </option>
                  <option value="Bihar"> Bihar </option>
                  <option value="Gujarat">Gujarat </option>
                  <option value="Goa"> Goa </option>
                  <option value="Himachal Pradesh">Himachal Pradesh </option>
                  <option value="Karnataka"> Karnataka </option>
                  <option value="Kerala">Kerala </option>
                  <option value="Madhya Pradesh"> Madhya Pradesh </option>
                  <option value="Maharashtra">Maharashtra </option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram"> Mizoram </option>
                  <option value="Punjab">Punjab </option>
                  <option value="Sikkim">Sikkim</option>
                  <option value=" Tamil Nadu"> Tamil Nadu </option>
                </select>
                <br />
                <br />
  
                <div class="input-group flex-nowrap">
                  <span class="input-group-text" id="addon-wrapping">
                    @
                  </span>
                  <input
                    onChange={handleAdd}
                    value={data.Address}
                    name="Address"
                    placeholder="Enter Address"
                    class="form-control"
                    aria-describedby="addon-wrapping"
                  />
                </div>
                <br />
  
                <label>
                  <span style={{ color: "green" }}>BiodegradeWaste</span>
  
                  <input
                    style={{ marginLeft: "8px" }}
                    type="checkbox"
                    onChange={handleAdd}
                    checked={data.BiodegradeWaste}
                    name="BiodegradeWaste"
                  />
                </label>
                <br />
                <label>
                  <span style={{ color: "red" }}> NonBiodegradeWaste</span>
                  <input
                    style={{ marginLeft: "8px" }}
                    type="checkbox"
                    onChange={handleAdd}
                    checked={data.NonBiodegradeWaste}
                    name="NonBiodegradeWaste"
                  />
                </label>
                <br />
  
                <label>
                  <span style={{ color: "blue" }}> DryBiodegradeWaste </span>
  
                  <input
                    style={{ marginLeft: "8px" }}
                    type="checkbox"
                    onChange={handleAdd}
                    checked={data.DryBiodegradeWaste}
                    name="DryBiodegradeWaste"
                  />
                </label>
                <br />
                <input
                  onClick={() => setShow(true)}
                  type="submit"
                  class="btn btn-outline-success"
                  style={{ padding: "7px 24px 7px 24px", marginTop: "10px" }}
                />
              </form>
            </div>
                  <h3>Edited Data </h3>
            {show ? (
              <FunctionalPage2 Value={data} />
            ) :
            
            (    
              <div
                

                style={{
                  padding: "6rem",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  width: "400px",
                }}
              >
                         
                <img
                  style={{ height: "100%", width: "100%" }}
                  src="https://media.istockphoto.com/id/1252332917/vector/more-info-symbol-navigation-sign-vector.jpg?s=612x612&w=0&k=20&c=7c-vgzLo8nWiEsF0uFuhgdpJlueSD08ux9KG2yacl-A="
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </>
    );
}

export default FunctionalPageEditForm;