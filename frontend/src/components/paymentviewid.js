import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Paper, Card, Stack, FormLabel, CardContent,Button } from '@mui/material';
import { fontWeight } from "@mui/system";


export default function PaymentDetailsid() {

    const { id } = useParams();

    //view
    const [AdminPaymentData, setAdminPaymentData] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:8000/admin/payment/${id}`).then((res) => {

            setAdminPaymentData(res.data);

        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div>

            {/* <div class="container ">
                    <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                        <div class="row ">


                            <div class="col-sm-3 mt-5 mb-4 text-dark" >
                                <div className="search">
                                    <form class="form-inline">
                                

                                    </form>

                                </div>
                            </div>
                            <div class="col-sm-3 offset-sm-2  mb-4 text-gred text-danger" ><h2><b>Payment Details</b></h2></div>

                            <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">


                            </div>
                        </div>
                        <div class="row">
                            <div class="table-responsive " >

                                <table class="table table-striped table-hover table-bordered" style={{ 'overflow': 'scroll', 'width': '1300px' }}>
                                    <thead>
                                        <tr>




                                            <th>Payment Type</th>
                                            <th>Payment Method</th>
                                            <th> Price </th>
                                            <th>Description</th>
                                            <th>Date</th>
                                            <th> Name_Of_Payment</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {

                                            <tr className="bg-light  text-dark">

                                                <td>{AdminPaymentData.Payment_Type}</td>
                                                <td>{AdminPaymentData.Payment_Method}</td>
                                                <td>{AdminPaymentData.Price}</td>
                                                <td>{AdminPaymentData.Description}</td>
                                                <td>{AdminPaymentData.Date}</td>
                                                <td>{AdminPaymentData.Name_Of_Payment}</td>

                                                <td><button style={{ 'border': 'none' }}><a href={`/updatepayment/` + AdminPaymentData._id}><img src="https://img.icons8.com/external-febrian-hidayat-glyph-febrian-hidayat/30/000000/external-edit-user-interface-febrian-hidayat-glyph-febrian-hidayat.png" /></a></button>

                                                </td>
                                            </tr>

                                        }

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
                <center> <div class="form-group col-sm-2"> <button type="submit" class="btn btn-danger btn-block mt-3 mb-3 p-2  form-control" onClick={() => window.location.href = "/paymentdetails"}> Cancel </button> </div></center>
            </div> */}
            
            <Stack spacing={2}>

                <Box marginTop={15} >

                    <h3>Payment Details</h3>
                    
                    <Stack spacing={3} direction={'column'}>
                    <center>
                        <Card sx={{width:"400px"}} >
                            <CardContent >
                                <FormLabel sx={{ fontWeight: 'bold', color: 'black', display: 'flex', fontSize: '20px' }}>Payment Type      :{AdminPaymentData.Payment_Type}</FormLabel>
                                <FormLabel sx={{ fontWeight: 'bold', color: 'black', display: 'flex', fontSize: '20px' }}>Payment Method    :{AdminPaymentData.Payment_Method}</FormLabel>
                                <FormLabel sx={{ fontWeight: 'bold', color: 'black', display: 'flex', fontSize: '20px' }}>Price             :{AdminPaymentData.Price}</FormLabel>
                                <FormLabel sx={{ fontWeight: 'bold', color: 'black', display: 'flex', fontSize: '20px' }}>Payment Description:{AdminPaymentData.Description}</FormLabel>
                                <FormLabel sx={{ fontWeight: 'bold', color: 'black', display: 'flex', fontSize: '20px' }}>Payment Date:{AdminPaymentData.Date}</FormLabel>
                                <FormLabel sx={{ fontWeight: 'bold', color: 'black', display: 'flex', fontSize: '20px' }}>Payment Name:{AdminPaymentData.Name_Of_Payment}</FormLabel>
                            </CardContent>
                            
                        </Card>
                       
                        </center>
                    </Stack>
                   
                </Box>

            </Stack>
            
            <Button color="error" variant="contained" size="medium" onClick={() => window.location.href = "/"}>Cancel</Button> 
           


        </div>
    )

}