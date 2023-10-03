import React, { Component } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


export const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();

  

  return <WrappedComponent {...props} params={params} navigate={navigate} />;
};


  class EditVehicle extends Component {
  
  constructor(props) {
    super(props);
 
    this.onChangevehicleType  = this.onChangevehicleType.bind(this);
   
    this.onChangevehicleNo = this.onChangevehicleNo.bind(this);
    this.onChangechassisNo = this.onChangechassisNo.bind(this);
    
    
    this.onChangevehicleCondition= this.onChangevehicleCondition.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
        
        vehicleType: "",
        vehicleNo: "",
        chassisNo: "",
        vehicleCondition: "",
      records: [],
    };
  }
  
  componentDidMount() {
    
    axios
      .get("http://localhost:8000/VehicleRegistration/" +this.props.params.id)
      .then((response) => {
        this.setState({
          vehicleType: response.data.vehicleType,
          vehicleNo: response.data.vehicleNo,
          chassisNo: response.data.chassisNo, 
          vehicleCondition: response.data.vehicleCondition,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  
  onChangevehicleType (e) {
    this.setState({
      vehicleType : e.target.value,
    });
  }
 
 
 
  onChangevehicleNo(e) {
    this.setState({
      vehicleNo: e.target.value,
    });
  }
  onChangechassisNo(e) {
    this.setState({
      chassisNo: e.target.value,
    });
  }
 
  onChangevehicleCondition(e) {
    this.setState({
      vehicleCondition: e.target.value,
    });
  }
 
  
  onSubmit(e) {
    e.preventDefault();
    const newEditedVehicle= {
      vehicleType : this.state.vehicleType ,
      vehicleNo: this.state.vehicleNo,
      chassisNo: this.state.chassisNo,
      vehicleCondition: this.state.vehicleCondition,
    };
    console.log(newEditedVehicle);
 
    
    axios
      .put(
        "http://localhost:8000/VehicleRegistration/update/" + this.props.params.id,
        newEditedVehicle
      )
      .then((res) => {console.log(res.data);    alert("Vehicle Updated Successfully!!!");
    });
      
 
    this.props.history.push("");
    
  }
  render() {
    return (
      <div class="card">
          

<br/><br/><br/><br/><br/>
      <div className="container">
        <h3 align="center">Update Vehicle details</h3>
        <form onSubmit={this.onSubmit}>
          
          <div className="form-group">
            <label>Vehicle Type : </label>
            <input
              type="text" 
              className="form-control"
              value={this.state.vehicleType }
              onChange={this.onChangevehicleType }
              required/>
          </div>
          
         
          
          <div className="form-group">
            <label>vehicle No: </label>
            <input
              type="text"
              required 
              className="form-control"
              value={this.state.vehicleNo}
              onChange={this.onChangevehicleNo}
            />
            
          </div>
          <div className="form-group">
            <label>Chassis No: </label> 
            <input
              type="text" 
              required
              className="form-control"
              value={this.state.chassisNo}
              onChange={this.onChangechassisNo}
            />
            
          </div>
          
          <div classtName="form-group">
            <label> vehicleCondition: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.vehicleCondition}
              onChange={this.onChangevehicleCondition}
            />
            
          </div>
          
          <br />
 
          <div className="form-group">
          <button type="onclick" class="btn btn-danger   me-2"onClick={()=>window.location.href = "/vehicleview"}> Cancel </button>
            <input
              type="submit"
              
              value="Update Record"
              className="btn btn-primary"
              
            />
            
          </div>
        </form>
      </div>
      </div>
    );
  }


}
export default withRouter(EditVehicle);

