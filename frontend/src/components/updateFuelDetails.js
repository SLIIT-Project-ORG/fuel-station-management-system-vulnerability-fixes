import React, { Component } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Admin.css";

export const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();

  return <WrappedComponent {...props} params={params} navigate={navigate} />;
};


class EditFuelDetails extends Component {

  constructor(props) {
    super(props);

    this.onChangefueltype = this.onChangefueltype.bind(this);

    this.onChangefuelquality = this.onChangefuelquality.bind(this);
    this.onChangecypetcoitemno = this.onChangecypetcoitemno.bind(this);
    this.onChangeprice = this.onChangeprice.bind(this);
    this.onChangepriceupdateddate = this.onChangepriceupdateddate.bind(this);


    this.onChangedescription = this.onChangedescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      fueltype: "",
      price: "",
      fuelquality: "",
      cypetcoitemno: "",
      priceupdateddate: "",
      description: "",
      records: [],
    };
  }

  componentDidMount() {

    axios
      .get("http://localhost:8000/fueldetail/get/" + this.props.params.id)
      .then((response) => {
        this.setState({
          fueltype: response.data.fueltype,
          price: response.data.price,
          priceupdateddate: response.data.priceupdateddate,
          fuelquality: response.data.fuelquality,
          cypetcoitemno: response.data.cypetcoitemno,
          description: response.data.description,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  onChangefueltype(e) {
    this.setState({
      fueltype: e.target.value,
    });
  }



  onChangeprice(e) {
    this.setState({
      price: e.target.value,
    });
  }
  onChangepriceupdateddate(e) {
    this.setState({
      priceupdateddate: e.target.value,
    });
  }
  onChangefuelquality(e) {
    this.setState({
      fuelquality: e.target.value,
    });
  }
  onChangecypetcoitemno(e) {
    this.setState({
      cypetcoitemno: e.target.value,
    });
  }
  onChangedescription(e) {
    this.setState({
      description: e.target.value,
    });
  }


  onSubmit(e) {
    e.preventDefault();
    const newEditedProduct = {
      fueltype: this.state.fueltype,
      price: this.state.price,
      priceupdateddate: this.state.priceupdateddate,
      fuelquality: this.state.fuelquality,
      cypetcoitemno: this.state.cypetcoitemno,
      description: this.state.description,
    };
    console.log(newEditedProduct);


    axios
      .put(
        "http://localhost:8000/fueldetail/update/" + this.props.params.id,
        newEditedProduct
      )
      .then((res) => console.log(res.data));


    //this.props.history.push("");
  }
  render() {
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

              <div>

                <header class="bg-dark py-5">
                  <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white">
                      <h1 class="display-4 fw-bolder">Admin: Update Fuel Details</h1>
                      <p class="lead fw-normal text-white-50 mb-0">Fuel Details</p>
                    </div>
                  </div>
                </header>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <a href="/fueldetailsmanage" class="btn btn-primary btn-lg active" role="button" aria-pressed="true"> Go Back</a>
                </div>
                <div className="container">

                  <div className="row align-items-md-stretch">

                    <div className="col-md-6">
                      <div className="h-100 p-5 bg-light border rounded-3">
                        <form onSubmit={this.onSubmit}>
                          <div class="form-row">


                            <div className="form-group row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">fueltype </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.fueltype}
                                  onChange={this.onChangefueltype}
                                />
                              </div>
                            </div>



                            <div className="form-group row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">fuelquality: </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.fuelquality}
                                  onChange={this.onChangefuelquality}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">cypetcoitemno: </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.cypetcoitemno}
                                  onChange={this.onChangecypetcoitemno}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">Price: </label>
                                <input
                                  type="Number"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.price}
                                  onChange={this.onChangeprice}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">priceupdateddate: </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.priceupdateddate}
                                  onChange={this.onChangepriceupdateddate}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail3" class="col-sm-2 col-form-label"> description: </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.description}
                                  onChange={this.onChangedescription}
                                />
                              </div>
                            </div>

                            <br />

                            <div className="form-group row">
                              <input
                                type="submit"
                                value="Update Record"
                                className="btn btn-primary"

                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <img src={`https://img.freepik.com/free-vector/gas-station-cartoon-icon-illustration_138676-2605.jpg?w=740&t=st=1662570181~exp=1662570781~hmac=c8490dece8f25e8e3fa29e53397313c0279b2c1209eba50b56b789d919a2ea0e`} class="img-fluid" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
              {/* our code */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(EditFuelDetails);