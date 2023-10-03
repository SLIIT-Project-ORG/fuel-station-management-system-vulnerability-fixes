import React, { useState, useEffect } from "react";
import axios from 'axios';
import EmployeeReportView from "./EmployeeReportView";


export default function EmployeeView() {


    //view
    const [AdminEmployeeData, setAdminEmployeeData] = useState([]);


    //Search
    const [searchTerm, setsearchTerm] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/admin/employeeprofile/").then((res) => {

            setAdminEmployeeData(res.data);

        }).catch((err) => {
            console.log(err);
        })
    }, [])


    //delete

    function deleteemployee(id) {
        axios.delete(`http://localhost:8000/admin/employeeprofile/delete/${id}`).then(() => {
            alert(" Employee Details Successfully deleted");
            window.location.href = "/test1";
        }).catch((err) => {
            alert(err);
        })
    }

    return (
        <div>

            <div class="container">
                <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body">
                    <div class="row ">


                        <div class="col-sm-3 mt-5 mb-4 text-dark" >
                            <div className="search">
                                <form class="form-inline">
                                    <input class="form-control mr-sm-2 border border-dark" type="search" placeholder="Search" aria-label="Search" name="searchTerm"

                                        onChange={(e) => {

                                            setsearchTerm(e.target.value);

                                        }}
                                    />


                                </form>

                            </div>
                        </div>
                        <div class="col-sm-3 offset-sm-2  mb-4 text-gred text-danger" ><h2><b>EMPLOYEE DETAILS</b></h2></div>

                        <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">


                        </div>
                    </div>
                    <div class="row">
                        <div class="table-responsive">

                            <table class="table table-striped table-hover table-bordered" style={{ 'overflow': 'scroll', 'width': '1300px' }}>
                                <thead>
                                    <tr>
                                        <th>FirstName</th>
                                        <th>LastName</th>
                                        <th>Address1</th>
                                        <th>Address2</th>
                                        <th>NIC</th>
                                        <th>PhoneNumber</th>
                                        <th>Designation</th>
                                        <th>Salary</th>
                                        <th>Email</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        AdminEmployeeData.filter(val => {

                                            if (searchTerm === "") {

                                                return val;

                                            } else if (

                                                val.First_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                val.Last_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                val.NIC.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                val.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                val.Designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                val.Address1.toLowerCase().includes(searchTerm.toLowerCase())

                                            ) {

                                                return val;

                                            }

                                        })
                                            .map((val, key) => {
                                                return (
                                                    <tr className="bg-light  text-dark">
                                                        <td>{val.First_Name}</td>
                                                        <td>{val.Last_Name}</td>
                                                        <td>{val.Address1}</td>
                                                        <td>{val.Address2}</td>
                                                        <td>{val.NIC}</td>
                                                        <td>{val.Phone_Number}</td>
                                                        <td>{val.Designation}</td>
                                                        <td>{val.Salary}</td>
                                                        <td>{val.Email}</td>
                                                        <td><button style={{ 'border': 'none' }}><a href={`/updateemployee/` + val._id}><img src="https://img.icons8.com/external-febrian-hidayat-glyph-febrian-hidayat/30/000000/external-edit-user-interface-febrian-hidayat-glyph-febrian-hidayat.png" /></a></button>
                                                            <button style={{ 'border': 'none' }} onClick={() => deleteemployee(val._id)}><img src="https://img.icons8.com/metro/25/ff0000/trash.png" /></button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                    }

                                </tbody>
                            </table>

                        </div>
                    </div>


                </div>


              

            </div>

            <EmployeeReportView />

        </div>

    )

}