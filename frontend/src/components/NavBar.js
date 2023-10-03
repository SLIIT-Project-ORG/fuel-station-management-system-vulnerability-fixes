import React from "react";
import '../styles/NavBar.css';
import Button from '@material-ui/core/Button';


export default function NaveBar() {

    return (

        <div className="navbar mt-4 mb-4 ">
            <Button><a href="/" style={{ textDecoration: "none" }}>Available Fuel Stock</a></Button>
            <Button><a href="/" style={{ textDecoration: "none" }}>Current Fuel Prices</a></Button>
            <Button><a href="/userprofile" style={{ textDecoration: "none" }}>Employee Profile</a></Button>
            <Button><a href="/user/fuelpass/login" style={{ textDecoration: "none" }}>Fuel Pass</a></Button>
            <Button><a href="/user/fuelOrderHome" style={{ textDecoration: "none" }}>Fuel Order</a></Button>
        </div>


    )

}