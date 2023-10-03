import React,{useState,useEffect} from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';

export default function UpdateEmployee() {

    const { id } = useParams();

    const [data, setData] = useState('');

    const sendData = (e)=> {
        e.preventDefault();
       
     axios.put(`http://localhost:8000/admin/employeeprofile/update/${id}`, data).then(() => {
            swal({

                title: "Update",
                text: " Employee Details  Update Successfully",
                icon: "Success",
                button: "OK",
                
            });
           
        }).catch((err) => {
            alert(err)
        })

    }

    useEffect(() => {
        axios.get(`http://localhost:8000/admin/employeeprofile/${id}`).then((res) => {
            setData(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])


   

    const handleChange = event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }

return (
<div>
<div>
          
          <div class="container-fluid px-1 py-5 mx-auto">
  <div class="row d-flex justify-content-center">
      <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
      <h1 className="text-dARK">UPDATE EMPLOYEE PROFILE</h1>
          
          <div class="card p-5">
           
              <form onSubmit={sendData}class="form-card" onsubmit="event.preventDefault()">
                  <div class="row justify-content-between text-left">
                      <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">First Name<span class="text-danger"> *</span></label> <input type="text"value={data.First_Name} id="First_Name" name="First_Name" onblur="validate(1)" onChange={handleChange}/> </div>
                      <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Last Name<span class="text-danger"> *</span></label> <input type="text" value={data.Last_Name}id="Last_Name" name="Last_Name" onblur="validate(2)"  onChange={handleChange}/> </div>
                  </div>
                  <div class="row justify-content-between text-left">
                      <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Address<span class="text-danger"> *</span></label> <input type="text" value={data.Address1} id="Address1" name="Address1" onblur="validate(3)"  onChange={handleChange}/> </div>
                      <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3"><span class="text-danger"> *</span></label> <input type="text" value={data.Address2} id="Address2" name="Address2" onblur="validate(4)"  onChange={handleChange}/> </div>
                  </div>
                  <div class="row justify-content-between text-left">
                      <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">NIC<span class="text-danger"> *</span></label> <input type="text" value={data.NIC}id="NIC" name="NIC" onblur="validate(5)"  onChange={handleChange}/> </div>
                  </div>
                  <div class="row justify-content-between text-left">
                      <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Phone Number<span class="text-danger"> *</span></label> <input type="text" value={data.Phone_Number} id="Phone_Number" name="Phone_Number"  onblur="validate(5)"  onChange={handleChange}/> </div>
                  </div>
                  <div class="row justify-content-between text-left">
                      <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Designation<span class="text-danger"> *</span></label> <input type="text" value={data.Designation} id="Designation" name="Designation" onblur="validate(5)"  onChange={handleChange}/> </div>
                  </div>
                  <div class="row justify-content-between text-left">
                      <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Salary<span class="text-danger"> *</span></label> <input type="text" value={data.Salary} id="Salary" name="Salary"  onblur="validate(5)"  onChange={handleChange}/> </div>
                  </div>
                  <div class="row justify-content-between text-left">
                      <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Email<span class="text-danger"> *</span></label> <input type="text" value={data.Email} id="Email" name="Email" onblur="validate(5)"  onChange={handleChange}/> </div>
                  </div>
                  
                  <div class="row justify-content-end ">
                     
  
                      <div class="form-group col-sm-6"> <button type="submit" class="btn btn-danger btn-block mt-5 mb-3 p-2 form-control" onClick={()=>window.location.href = "/admin"}> Cancel </button> </div>
                      <div class="form-group col-sm-6"> <button type="submit" class="btn btn-success btn-block ml-5 mt-5 mb-3 p-2 form-control">Update Now</button> </div>
                      

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