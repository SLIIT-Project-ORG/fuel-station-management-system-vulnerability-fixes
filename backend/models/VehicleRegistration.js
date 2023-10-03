const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleRegistrationSchema = new Schema({

    // registerID:{
    //     type:String,
    //     required:true
    // },

    vehicleType:{
        type:String,
        required:true
    },
    vehicleNo: {
        type:String,
        required:true
    },

    chassisNo:{
        type:String,
        required:true
    },

    registeredDate:{
        type:String,
        required:true,
    },

    vehicleCondition:{
        type:String,
        required:true
    } 
})

const VehicleRegistration= mongoose.model("VehicleRegistration" ,vehicleRegistrationSchema );

module.exports=VehicleRegistration;