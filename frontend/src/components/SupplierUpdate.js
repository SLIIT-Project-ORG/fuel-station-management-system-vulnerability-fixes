import React, { Component } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


export const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();

  

  return <WrappedComponent {...props} params={params} navigate={navigate} />;
};


  class EditSupplier extends Component {
  
  constructor(props) {
    super(props);
 
    this.onChangesupplierName  = this.onChangesupplierName.bind(this);
    this.onChangemanagerName = this.onChangemanagerName.bind(this);
    this.onChangeaddress = this.onChangeaddress.bind(this);
    this.onChangecontactNumber= this.onChangecontactNumber.bind(this);

    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangeregisteredDate = this.onChangeregisteredDate.bind(this);
    this.onChangedescription= this.onChangedescription.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
        
        supplierName: "",
        managerName: "",
        address: "",
        contactNumber: "",
        email: "",
       registeredDate: "",
       description: "",
      records: [],
    };
  }
  
  componentDidMount() {
    
    axios
      .get("http://localhost:8000/SupplierRegistration/" +this.props.params.id)
      .then((response) => {
        this.setState({
          supplierName: response.data.supplierName,
          managerName: response.data.managerName,
          address: response.data.address, 
          contactNumber: response.data.contactNumber,
          email: response.data.email,
          registeredDate: response.data.registeredDate, 
          description: response.data.description,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  
  onChangesupplierName (e) {
    this.setState({
      supplierName : e.target.value,
    });
  }
 
 
 
  onChangemanagerName(e) {
    this.setState({
      managerName: e.target.value,
    });
  }
  onChangeaddress(e) {
    this.setState({
      address: e.target.value,
    });
  }
 
  onChangecontactNumber(e) {
    this.setState({
      contactNumber: e.target.value,
    });
  }

  onChangeemail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangeregisteredDate(e) {
    this.setState({
      registeredDate: e.target.value,
    });
  }
 
  onChangedescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
 
  
  onSubmit(e) {
    e.preventDefault();
    const newEditedSupplier= {
      supplierName : this.state.supplierName ,
      managerName: this.state.managerName,
      address: this.state.address,
      contactNumber: this.state.contactNumber,
      email: this.state.email,
      registeredDate: this.state.registeredDate,
      description: this.state.description,

    };
    console.log(newEditedSupplier);
 
    
    axios
      .put(
        "http://localhost:8000/SupplierRegistration/update/" + this.props.params.id,
        newEditedSupplier
      )
      .then((res) => {console.log(res.data);    alert("Supplier Updated Successfully!!!");
    });
      
 
    this.props.history.push("");
    
  }
  render() {
    return (
      <div class="card">
          

<br/><br/><br/><br/><br/>
      <div className="container">
        <h3 align="center">Update Supplier details</h3>
        <form onSubmit={this.onSubmit}>
          
          <div className="form-group">
            <label>Supplier Name : </label>
            <input
              type="text" 
              className="form-control"
              value={this.state.supplierName }
              onChange={this.onChangesupplierName }
              required/>
          </div>
          
         
          
          <div className="form-group">
            <label>Manager Name: </label>
            <input
              type="text"
              required 
              className="form-control"
              value={this.state.managerName}
              onChange={this.onChangemanagerName}
            />
            
          </div>
          <div className="form-group">
            <label>Address : </label> 
            <input
              type="text" 
              required
              className="form-control"
              value={this.state.address}
              onChange={this.onChangeaddress}
            />
            
          </div>
          
          <div classtName="form-group">
            <label> Contact Number: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.contactNumber}
              onChange={this.onChangecontactNumber}
            />
            
          </div>

          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              required 
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeemail}
            />
            
          </div>
          <div className="form-group">
            <label>Registered Date : </label> 
            <input
              type="text" 
              required
              className="form-control"
              value={this.state.registeredDate}
              onChange={this.onChangeregisteredDates}
            />
            
          </div>
          
          <div classtName="form-group">
            <label> Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangedescription}
            />
            
          </div>
          
          <br />
 
          <div className="form-group">
          <button type="onclick" class="btn btn-danger   me-2"onClick={()=>window.location.href = "/supplierview"}> Cancel </button>
            
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
export default withRouter(EditSupplier);
