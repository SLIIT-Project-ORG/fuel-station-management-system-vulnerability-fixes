import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
 import '../App.css';


 
const Record = (props) => (
  
  
  <tr>
    
    <td>{props.record._id}</td>
    {/* <td>{props.record.registerID}</td> */}
    <td>{props.record.supplierName}</td>
    <td>{props.record.managerName}</td>
    <td>{props.record.address}</td>
    <td>{props.record.contactNumber}</td>
    <td>{props.record.email}</td> 
    <td>{props.record.registeredDate}</td> 
    <td>{props.record.description}</td> 
    <td>
      <Link to={"/updatesupplier/" + props.record._id}>Edit</Link> |
      <a className= "del"
        href="/supplierview"
        
        onClick={() => {
          props.deleteRecord(props.record._id);
          alert("Registered Supplier Successfully Deleted !!!");
         
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);
 
export default class SupplierList extends Component {
  
  
  
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.state = { records: [] };
  }
 
  
  componentDidMount() {
    axios
      .get("http://localhost:8000/SupplierRegistration/")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  
  deleteRecord(id) {
    axios.delete("http://localhost:8000/SupplierRegistration/delete/" + id).then((response) => {
      
      console.log(response.data);
   

    });
 
    this.setState({
      record: this.state.records.filter((el) => el._id !== id),
    });
  }
 
  
  recordList() {
    return this.state.records.map((currentrecord) => {
      return (
        <Record
          record={currentrecord}
          deleteRecord={this.deleteRecord}
          key={currentrecord._id}
        />
      );
    });
  }


  render() {
    return (
      // <div className="back">
      
        <div class="card" className="container">
          <div class="card-body">
           
          <br></br>
        
          <div className="head"> <h1 class="display-4">Current Supplier List</h1>
                    <p class="lead">This is the list of already registered Suppliers to the System</p>
           </div>
           <div className="raw">
           <div className="ab" >
                 <a href="/fuelview" target="_blank" rel="noreferrer">
                 <button className="bbdd" p-3>+ Request Fuel</button>  
                 </a>
            </div>
            < br/>
           <div className="ba" >
                 <a href="/supplierregister" target="_blank" rel="noreferrer">
                 <button className="badd">+ Register a Supplier</button>  
                 </a>
            </div>

          
           </div>
        
           <center> 
        <table className="table table-striped" style={{ marginTop: 10 }}>
          <thead>
            <tr>
              
              {/* <th>RecordID</th> */}
              <th>RegisterID</th>
              <th>SupplierName</th>
              <th>ManagerName</th>
              <th>Address</th>
              <th>ContactNumber</th> 
              <th>Email</th> 
              <th>RegisteredDate</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
        </center> 
        <br/><br/></div>
        
          </div>
        
        // </div>
    );
  }
}
