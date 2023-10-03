import React,{ useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';


export default function UserProfileView() {

    const { id } = useParams();

    //view

    const [UserEmployeeData, setUserEmployeeData] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:8000/admin/employeeprofile/${id}`).then((res) => {
            setUserEmployeeData(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div>
            <div className="row mt-5"></div>
            <div className="row">
                <h1 className="text-dark text-center mt-5">Welcome! Thank You</h1>
                <div className="col-3"></div>
                <div className="col-lg-3 d-none d-lg-flex mt-5">
                    <img src="https://uploads-ssl.webflow.com/601159b4ad387b14405d110a/601159b4ad387bdc175d1122_grahic-design-brand-identity-melbourne-patrick-staunton-future-energy-skills-photography--p-1600.jpeg"
                        className="w-100  rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5 " />
                </div>

                <div className="card col-3 mt-5 ">
                    <table>
                        <thead>


                        </thead>
                        <tbody className="text-start">
                            <tr>
                                <td>First Name :</td>
                                <td>{UserEmployeeData.First_Name}</td>
                            </tr>
                            <tr>
                                <td>Last Name  :</td>
                                <td>{UserEmployeeData.Last_Name}</td>
                            </tr>
                            <tr>
                                <td>Address1   :</td>
                                <td>{UserEmployeeData.Address1}</td>
                            </tr>
                            <tr>
                                <td>Address2   :</td>
                                <td>{UserEmployeeData.Address2}</td>
                            </tr>
                            <tr>
                                <td>NIC        :</td>
                                <td>{UserEmployeeData.NIC}</td>
                            </tr>
                            <tr>
                                <td>Phone_Number :</td>
                                <td>{UserEmployeeData.Phone_Number}</td>
                            </tr>
                            <tr>
                                <td>Designation  :</td>
                                <td>{UserEmployeeData.Designation}</td>
                            </tr>
                            <tr>
                                <td>Salary  :</td>
                                <td>{UserEmployeeData.Salary}</td>
                            </tr>
                            <tr>
                                <td>Email :</td>
                                <td>{UserEmployeeData.Email}</td>
                            </tr>
                        </tbody>

                    </table>
                    <button type="button " class="btn btn-danger btn-block mb-2 mt-4  form-control" onClick={()=>window.location.href = "/"}>Cancel</button>

                </div>

            </div>

        </div >
    )

}