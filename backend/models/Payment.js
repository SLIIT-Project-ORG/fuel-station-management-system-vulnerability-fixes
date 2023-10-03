const mongoose = require("mongoose");

const ppayment = new mongoose.Schema({

    Payment_Type: {

        type: String,
        required: true
    },

    Payment_Method: {

        type: String,
        required: true
    },
    Price: {

        type: String,
        required: true
    },

    Description: {

        type: String,
        required: true
    },

    Date: {

        type: String,
        required: true

    },

    Name_Of_Payment: {

        type: String,
        required: true

    },

    

});

const paypayment = mongoose.model("Payment", ppayment);
module.exports = paypayment;