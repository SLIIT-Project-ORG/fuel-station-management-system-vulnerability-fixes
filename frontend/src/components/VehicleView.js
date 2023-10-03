import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
 import '../App.css';


 
const Record = (props) => (
  
  
  <tr>
    
    <td>{props.record._id}</td>
    {/* <td>{props.record.registerID}</td> */}
    <td>{props.record.vehicleType}</td>
    <td>{props.record.vehicleNo}</td>
    <td>{props.record.chassisNo}</td>
    <td>{props.record.registeredDate}</td>
    <td>{props.record.vehicleCondition}</td> 
    <td>
      <Link to={"/updatevehicle/" + props.record._id}>Edit</Link> |
      <a className= "del"
        href="/vehicleview"
        
        onClick={() => {
          props.deleteRecord(props.record._id);
          alert("Registered Vehicle Successfully Deleted !!!");
         
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);
 
export default class VehicleList extends Component {
  
  
  
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.state = { records: [] };
  }
 
  
  componentDidMount() {
    axios
      .get("http://localhost:8000/VehicleRegistration/")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  
  deleteRecord(id) {
    axios.delete("http://localhost:8000/VehicleRegistration/delete/" + id).then((response) => {
      
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
        
          <div className="head"> <h1 class="display-4">Registered Vehicle List</h1>
                    <p class="lead">This is the list of already registered Vehicles to the System</p>
           </div>
           <div className="ba" >
                 <a href="/vehicleregister" target="_blank" rel="noreferrer">
                 <button className="badd">+ Register a New Vehicle</button>  
                 </a>
            </div>
        
           <center> 
        <table className="table table-striped" style={{ marginTop: 10 }}>
          <thead>
            <tr>
              
              {/* <th>RecordID</th> */}
              <th>RegisterID</th>
              <th>VehicleType</th>
              <th>VehicleNo</th>
              <th>ChassisNo</th>
              <th>RegisteredDate</th>
              <th>VehicleCondition</th> 
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
