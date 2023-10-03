const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({

    institute: {
        type: String,
        required: true
    },
    regstration_no: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    fax_no: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    mobile_no: {
        type: String,
        required: true
    },
    document_links: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    isApprove:{
        type:Boolean,
        required:false,
        default:null
    }
})

const Order = mongoose.model("orders", orderSchema);
module.exports = Order;