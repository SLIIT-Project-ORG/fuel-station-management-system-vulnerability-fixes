const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fuelRequestSchema = new Schema({

    // registerID:{
    //     type:String,
    //     required:true
    // },
    supplierID:{
        type:String,
        required:true
    },
    supplierName:{
        type:String,
        required:true
    },
    fuelType:{
        type:String,
        required:true
    },
    fuelAmount:{
        type:String,
        required:true
    },
    estimatedDelivery:{
        type:String,
        required:true
    },
    specialNotice:{
        type:String,
        required:true
    }
})

const FuelRequest= mongoose.model("FuelRequest" ,fuelRequestSchema );

module.exports=FuelRequest;