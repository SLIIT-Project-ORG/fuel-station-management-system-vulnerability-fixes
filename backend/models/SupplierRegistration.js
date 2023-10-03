const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierRegistrationSchema = new Schema({

    // registerID:{
    //     type:String,
    //     required:true
    // },
    supplierName:{
        type:String,
        required:true
    },
    managerName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    registeredDate:{
        type:Date,
        required:true
    },
    description:{
        type:String,
        required:true
    } 
})

const SupplierRegistration= mongoose.model("SupplierResitration" ,supplierRegistrationSchema );

module.exports=SupplierRegistration;