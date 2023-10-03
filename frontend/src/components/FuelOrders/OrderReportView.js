import React, { useEffect, useState } from "react";
import GeneratePdf from "./FuelOrderReportGenerator";
import axios from "axios";
import { Button } from "@mui/material";

const OrderReportView = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:8000/fuel-order/").then((res) => {
            console.log(res.data.data);
            setOrders(res.data.data);
        }).catch((err) => {
            console.log(err);
        })

    }, [])

    return (

        <div>
            <div className="container mb-4 mt-4 p-3">
                <div className="row">
                    {
                        <div className="row">
                            {(
                                <Button variant="contained" size="medium" sx={{width:'20%'}} onClick={() => GeneratePdf(orders)}>
                                    GENERATE REPORT
                                </Button>
                            )}
                        </div>
                    }
                </div>
            </div>
        </div>

    )

}

export default OrderReportView;