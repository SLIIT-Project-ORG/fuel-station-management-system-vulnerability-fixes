import React, { useState } from "react"
import axios from "axios";
import "../styles/Admin.css";

export default function AddFuelStorage() {


  const [fueltype, setfueltype] = useState("");
  const [fuelquality, setfuelquality] = useState("");
  const [cypetcoitemno, setcypetcoitemno] = useState("");
  const [tankcapacity, settankcapacity] = useState("");
  const [availablecapacity, setavailablecapacity] = useState("");



  function sendData(e) {
    e.preventDefault();
    const newfueldetail = {

      fueltype,
      fuelquality,
      cypetcoitemno,
      tankcapacity,
      availablecapacity

    }
    //console.log(newfueldetail);
    axios.post("http://localhost:8000/fuelstorage/add", newfueldetail).then(() => {
      alert("Fuel Detais added")
    }).catch((err) => {
      alert(err)
    })
  }

  return (
    <div>
      <div className=" display-table mt-5 ">
        <div className="row display-table-row mt-5">
          <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
            <div className="logo">


            </div>
            <h3 style={{ color: "white" }}><b>Admin Panel</b></h3>
            <div className="navi">
              <ul>
                <li ><a href="/test"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Employee Management</span></a></li>
                <li><a href="/fueldetailsmanage"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Fuel Management</span></a></li>
                <li><a href="/admin/fuelOrderView/"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Order Management</span></a></li>
                <li><a href="/manageinventory"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Inventory Management</span></a></li>
                <li><a href="/storagemanagement"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Storage Management</span></a></li>
                <li><a href="/admin/allfuelpass"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Fuel queue Management</span></a></li>
                <li><a href="/payment"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Payment Management</span></a></li>
                <li><a href="#"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Supplier Management</span></a></li>
                <li><a href="#"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Vehicle Management</span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-10 col-sm-11 display-table-cell v-align">

            <div className="row mb-4">
              <header>
                <div className="col-md-7">
                  <nav className="navbar-default pull-left">
                    <div className="navbar-header">
                      <div className="header">

                        {/*---- Include the above in your HEAD tag --------*/}

                        {/* Navigation */}
                        <div className="fixed-top">

                          <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear w-100 p-4">
                            <div className="container">
                              <a className="navbar-brand" rel="nofollow" target="_blank" href="#" style={{ textTransform: 'uppercase' }}>Admin Panel
                              </a>
                              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                              </button>
                              <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">
                                  <li className="nav-item active" style={{ marginLeft: "900px" }}>
                                    <a className="nav-link" href="/">Home</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="/login">Signin</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="/register">About Us</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </nav>

                </div>
                <div className="col-md-5">
                  <div className="header-rightside">

                  </div>
                </div>
              </header>
            </div>


            {/* our code */}<div >
              <div class="p-5 mb-4 bg-dark rounded-3">
                <div class="container-fluid py-5">
                  <h1 class="display-5 text-white fw-bold"> Admin: Manage Fuel Storage</h1>
                  <p class="col-md-8 text-white fs-4">cypetco fuel station</p>

                </div>
              </div>
              <br></br>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <a href="http://localhost:3000/fueldetailsmanage" class="btn btn-primary btn-lg active" role="button" aria-pressed="true"> Go Back</a>


              </div>
              <br></br>
              <div >
                <form className="row g-3 needs-validation" novalidate onSubmit={sendData}>

                  <div className="col-md-4">
                    <label for="name" className="form-label">Fuel Type</label>
                    <select id="inputState" class="form-control" required
                      onChange={(e) => {
                        setfueltype(e.target.value)

                      }}>
                      <option selected></option>
                      <option>Petrol</option>
                      <option>Diesel</option>
                      <option>Kerosene</option>
                    </select>
                  </div>


                  <div className="col-md-4">
                    <label for="type_ID" className="form-label">Quality</label>
                    <select id="inputState" class="form-control" required
                      onChange={(e) => {
                        setfuelquality(e.target.value)

                      }}>
                      <option selected></option>
                      <option>Octane 92</option>
                      <option>Octane 93</option>
                      <option>Octane 95</option>
                      <option>Auto Diesel</option>
                      <option>4 Star Euro 4</option>
                      <option>Lanka Kerosene</option>
                      <option>Lanka Industrial Kerosene</option>
                    </select>

                    <div className="valid-feedback">

                    </div>

                  </div>
                  <div className="col-md-4">
                    <label for="type_ID" className="form-label">Cypetco Item No</label>
                    <select id="inputState" class="form-control" required
                      onChange={(e) => {
                        setcypetcoitemno(e.target.value)

                      }}>
                      <option selected></option>
                      <option>A0023L99 octane 92</option>
                      <option>A0018L99 Octane 93</option>
                      <option>A0013L95 Octane 95</option>
                      <option>A0045L77 auto</option>
                      <option>A0041222 supper</option>
                      <option>A0015256 lanka</option>\
                      <option>A0017423 industrial</option>


                    </select>
                    <div className="valid-feedback">

                    </div>

                  </div>
                  <div className="col-md-4">
                    <label for="tankcapacity" className="form-label">Tank Capacity liters</label>
                    <input type="number" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
                      onChange={(e) => {
                        settankcapacity(e.target.value)

                      }} />

                    <div className="valid-feedback">

                    </div>

                  </div>
                  <div className="col-md-4">
                    <label for="availablecapacity" className="form-label">Available tank capacity </label>
                    <input type="number" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
                      onChange={(e) => {
                        setavailablecapacity(e.target.value)
                      }} />
                    <div id="validationServerUsernameFeedback" className="invalid-feedback">

                    </div>
                  </div>





                  <br />
                  <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                  </div>
                </form>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>


  )
}