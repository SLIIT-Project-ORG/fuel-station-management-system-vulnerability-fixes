import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AddPayment() {


    const [Payment_Type, setPaymentType] = useState("");
    const [Payment_Method, setPaymentMethod] = useState("");
    const [Price, setPrice] = useState("");
    const [Description, setDescription] = useState("");
    const [Date, setDate] = useState("");
    const [Name_Of_Payment, setNameOfPayment] = useState("");


    function sendData(e) {
        e.preventDefault();

        const newpayment = {

            Payment_Type, Payment_Method, Price, Description, Date, Name_Of_Payment
        }

        axios.post("http://localhost:8000/admin/payment/insert", newpayment).then(() => {
            alert("Payment Details Successfully added.");

        }).catch((err) => {
            alert(err)
        })
    }
    return (
        <div>
            <div>

                <div class="container-fluid px-1 py-5 mx-auto">
                    <div class="row d-flex justify-content-center">
                        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                            <h1 className="text-danger">Add Payment Details</h1>

                            <div class="card p-5">

                                <form class="form-card" onSubmit={sendData}>
                                    <div class="row justify-content-between text-left">
                                        <div class="form-group col-sm-6 flex-column d-flex">
                                            <label class="form-control-label px-3">Payment Type<span class="text-danger"> *</span></label>
                                            <select type="text" id="Payment_Type" name="Payment_Type" class="form-select" aria-label="Default select example" required onChange={
                                                (e) => {
                                                    setPaymentType(e.target.value);
                                                }
                                            } >
                                                <option selected>Select</option>
                                                <option value="Credit">Credit</option>
                                                <option value="Debit">Debit</option></select></div>
                                    </div>

                                    <div class="form-group col-sm-6  mt-3 flex-column d-flex"> <label class="form-control-label px-3">Payment Method<span class="text-danger"> *</span></label>
                                        <select type="text" id="Payment_Method" name="Payment_Method" class="form-select" aria-label="Default select example" required onChange={
                                            (e) => {
                                                setPaymentMethod(e.target.value);
                                            }
                                        } >
                                            <option selected>Select</option>
                                            <option value="Bank Transfer">Bank Transfer</option>
                                            <option value="Normal">Normal</option></select></div>

                                    <div class="row justify-content-between mt-3 text-left">
                                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Price<span class="text-danger"> *</span></label> <input type="text" id="Price" name="Price" placeholder="RS." onblur="validate(3)" required onChange={
                                            (e) => {
                                                setPrice(e.target.value);
                                            }
                                        } /> </div>

                                    </div>
                                    <div class="row justify-content-between mt-3  text-left">
                                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Description<span class="text-danger"> *</span></label> <input type="text" id="Description" name="escription" placeholder="" onblur="validate(5)"

                                            required onChange={
                                                (e) => {
                                                    setDescription(e.target.value);
                                                }
                                            } /> </div></div>
                                    <div class="row justify-content-between mt-3 text-left">
                                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Date<span class="text-danger"> *</span></label> <input type="Date" id="Date" name="Date" placeholder="" onblur="validate(5)"

                                            required onChange={
                                                (e) => {
                                                    setDate(e.target.value);
                                                }
                                            } /> </div>
                                    </div>
                                    <div class="row justify-content-between mt-3 text-left">
                                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Name of Payment<span class="text-danger"> *</span></label> <input type="text" id="Name_Of_Payment" name="Name_Of_Payment" placeholder="" onblur="validate(5)"


                                            required onChange={
                                                (e) => {
                                                    setNameOfPayment(e.target.value);
                                                }
                                            } /></div>
                                        <div class="row justify-content-end ">


                                            <div class="form-group col-sm-6"> <button type="submit" class="btn btn-danger btn-block mt-5 mb-3 p-2 form-control" onClick={() => window.location.href = "/admin"}> Cancel </button> </div>
                                            <div class="form-group col-sm-6"> <button type="submit" class="btn btn-primary btn-block ml-5 mt-5 mb-3 p-2 form-control">Add New Payment</button> </div>

                                           

                                        </div>
                                        <div class="form-group col-sm-6"> <button type="submit" class="btn btn-success btn-block ml-5  mb-3 p-2 form-control"   onClick={() => window.location.href = "/paymentdetails"}>View Details</button> </div>

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