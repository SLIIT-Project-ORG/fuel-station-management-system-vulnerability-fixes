const mongoose = require("mongoose");

const eprofile = new mongoose.Schema({

    First_Name: {

        type: String,
        required: true
    },

    Last_Name: {

        type: String,
        required: true
    },
    Address1: {

        type: String,
        required: true
    },
    Address2: {

        type: String,
        required: true
    },
    NIC: {

        type: String,
        required: true

    },

    Phone_Number: {

        type: String,
        required: true

    },

    Designation: {

        type: String,
        required: true

    },

    Salary: {

        type: String,
        required: true

    },
    Email: {

        type: String,
        required: true

    }

});

const employeeprofile = mongoose.model("Employee Profile", eprofile);
module.exports = employeeprofile;