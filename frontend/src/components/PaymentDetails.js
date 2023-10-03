import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function PaymentDetails() {

   
    //view
    const [AdminPaymentData, setAdminPaymentData] = useState([]);

    //Search
    const [searchTerm, setsearchTerm] = useState("");

    
    
    useEffect(() => {
        axios.get("http://localhost:8000/admin/payment/").then((res) => {
            setAdminPaymentData(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])


    //delete

    function deletepayment(id) {
        axios.delete(`http://localhost:8000/admin/payment/delete/${id}`).then(() => {
            alert(" Payment Details Successfully deleted");
        }).catch((err) => {
            alert(err);
        })
    }




    return (
        <div>
            <div>

                <div class="container ">
                    <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                        <div class="row ">


                            <div class="col-sm-3 mt-5 mb-4 text-dark" >
                                <div className="search">
                                    <form class="form-inline">
                                        <input class="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" name="searchTerm"
                                            onChange={(e) => {

                                                setsearchTerm(e.target.value);

                                            }}

                                        />


                                    </form>

                                </div>
                            </div>
                            <div class="col-sm-3 offset-sm-2  mb-4 text-gred text-danger" ><h2><b>PAYMENT DETAILS</b></h2></div>

                            <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">


                            </div>
                        </div>
                        <div class="row">
                            <div class="table-responsive " >

                                <table class="table table-striped table-hover table-bordered" style={{ 'overflow': 'scroll', 'width': '1300px' }}>
                                    <thead>
                                        <tr>
                                            
                                            
                                            <th> Name_Of_Payment</th>
                                            <th>Date</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {

                                            AdminPaymentData.filter(val => {

                                                if (searchTerm === "") {

                                                    return val;

                                                } else if (

                                                    val.Name_Of_Payment.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                    val.Date.toLowerCase().includes(searchTerm.toLowerCase())

                                                ) {

                                                    return val;

                                                }

                                            })

                                                .map((val, key) => {
                                                    return (
                                                        <tr className="bg-light  text-dark">
                                                            <td>{val.Name_Of_Payment}</td>
                                                            <td>{val.Date}</td>


                                                            <td><button style={{ 'border': 'none' }}><a href={`/payment/${val._id}`}><img src="https://img.icons8.com/ios/40/000000/visible--v1.png" /></a></button>
                                                                <button style={{ 'border': 'none' }} onClick={() => deletepayment(val._id)}><img src="https://img.icons8.com/metro/25/ff0000/trash.png" /></button>
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

            </div>



        </div>
    )

}