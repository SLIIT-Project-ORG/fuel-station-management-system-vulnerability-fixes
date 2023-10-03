import React, { Component } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


export const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();

  

  return <WrappedComponent {...props} params={params} navigate={navigate} />;
};


  class EditRequest extends Component {
  
  constructor(props) {
    super(props);
 
    this.onChangesupplierID  = this.onChangesupplierID.bind(this);
    this.onChangesupplierName = this.onChangesupplierName.bind(this);
    this.onChangefuelType = this.onChangefuelType.bind(this);
    this.onChangefuelAmount= this.onChangefuelAmount.bind(this);

    this.onChangeestimatedDelivery = this.onChangeestimatedDelivery.bind(this);
    this.onChangespecialNotice = this.onChangespecialNotice.bind(this);
    

    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
        
        supplierID: "",
        supplierName: "",
        fuelType: "",
        fuelAmount: "",
        estimatedDelivery: "",
       specialNotice: "" ,
      
      records: [],
    };
  }
  
  componentDidMount() {
    
    axios
      .get("http://localhost:8000/FuelRequest/" +this.props.params.id)
      .then((response) => {
        this.setState({
          supplierID: response.data.supplierID,
          supplierName: response.data.supplierName,
          fuelType: response.data.fuelType, 
          fuelAmount: response.data.fuelAmount,
          estimatedDelivery: response.data.estimatedDelivery,
          specialNotice: response.data.specialNotice, 
          
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  
  onChangesupplierID (e) {
    this.setState({
      supplierID : e.target.value,
    });
  }
 
 
 
  onChangesupplierName(e) {
    this.setState({
      supplierName: e.target.value,
    });
  }
  onChangefuelType(e) {
    this.setState({
      fuelType: e.target.value,
    });
  }
 
  onChangefuelAmount(e) {
    this.setState({
      fuelAmount: e.target.value,
    });
  }

  onChangeestimatedDelivery(e) {
    this.setState({
      estimatedDelivery: e.target.value,
    });
  }
  onChangespecialNotice(e) {
    this.setState({
      specialNotice: e.target.value,
    });
  }
 
  
  
  onSubmit(e) {
    e.preventDefault();
    const newEditedRequest= {
      supplierID : this.state.supplierID ,
      supplierName: this.state.supplierName,
      fuelType: this.state.fuelType,
      fuelAmount: this.state.fuelAmount,
      estimatedDelivery: this.state.estimatedDelivery,
      specialNotice: this.state.specialNotice,
       

    };
    console.log(newEditedRequest);
 
    
    axios
      .put(
        "http://localhost:8000/FuelRequest/update/" + this.props.params.id,
        newEditedRequest
      )
      .then((res) => {console.log(res.data);    alert("Fuel Updated Successfully!!!");
    });
      
 
    this.props.history.push("");
    
  }
  render() {
    return (
      <div class="card">
          

<br/><br/><br/><br/><br/>
      <div className="container">
        <h3 align="center">Update Request Details</h3>
        <form onSubmit={this.onSubmit}>
          
          <div className="form-group">
            <label>Supplier ID : </label>
            <input
              type="text" 
              className="form-control"
              value={this.state.supplierID }
              onChange={this.onChangesupplierID }
              required/>
          </div>
          
         
          
          <div className="form-group">
            <label>Supplier Name: </label>
            <input
              type="text"
              required 
              className="form-control"
              value={this.state.supplierName}
              onChange={this.onChangesupplierName}
            />
            
          </div>
          <div className="form-group">
            <label>Fuel Type : </label> 
            <input
              type="text" 
              required
              className="form-control"
              value={this.state.fuelType}
              onChange={this.onChangefuelType}
            />
            
          </div>
          
          <div classtName="form-group">
            <label> Fuel Amount: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.fuelAmount}
              onChange={this.onChangefuelAmount}
            />
            
          </div>

          <div className="form-group">
            <label>Estimated Delivery: </label>
            <input
              type="text"
              required 
              className="form-control"
              value={this.state.estimatedDelivery}
              onChange={this.onChangeestimatedDelivery}
            />
            
          </div>
          <div className="form-group">
            <label>Special Notice : </label> 
            <input
              type="text" 
              required
              className="form-control"
              value={this.state.specialNotice}
              onChange={this.onChangespecialNotice}
            />
            
          </div>
          
          
          
          <br />
 
          <div className="form-group">
          <button type="onclick" class="btn btn-danger   me-2"onClick={()=>window.location.href = "/fuelview"}> Cancel </button>
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
export default withRouter(EditRequest);
