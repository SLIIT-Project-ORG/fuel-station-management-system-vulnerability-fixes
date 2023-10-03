
import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
 import '../App.css';


 
const Record = (props) => (
  
  
  <tr>
    
    <td>{props.record._id}</td>
    {/* <td>{props.record.registerID}</td> */}
    <td>{props.record.supplierID}</td>
    <td>{props.record.supplierName}</td>
    <td>{props.record.fuelType}</td>
    <td>{props.record.fuelAmount}</td>
    <td>{props.record.estimatedDelivery}</td> 
    <td>{props.record.specialNotice}</td> 
    <td>
      <Link to={"/updaterequest/" + props.record._id}>Edit</Link> |
      <a className= "del"
        href="/fuelview"
        
        onClick={() => {
          props.deleteRecord(props.record._id);
          alert("Fuel Request Successfully Deleted !!!");
         
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);
 
export default class RequestList extends Component {
  
  
  
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.state = { records: [] };
  }
 
  
  componentDidMount() {
    axios
      .get("http://localhost:8000/FuelRequest/")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  
  deleteRecord(id) {
    axios.delete("http://localhost:8000/FuelRequest/delete/" + id).then((response) => {
      
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
        
          <div className="head"> <h1 class="display-4">Requested Fuel Supplies</h1>
                    <p class="lead">This is the list of already Requested Fuel Details to the System</p>
           </div>
           <div className="ba" >
                 <a href="/fuelrequest" target="_blank" rel="noreferrer">
                 <button className="badd">+ New Request Fuel</button>  
                 </a>
            </div>
        
           <center> 
        <table className="table table-striped" style={{ marginTop: 10 }}>
          <thead>
            <tr>
              
              {/* <th>RecordID</th> */}
              <th>RequestID</th>
              <th>SupplierID</th>
              <th>SupplierName</th>
              <th>FuelType</th>
              <th>FuelAmount</th>
              <th>EstimatedDelivery</th>
              <th>SpecialNotice</th> 
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
