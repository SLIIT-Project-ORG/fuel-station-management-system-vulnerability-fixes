const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fuelstoragedetailSchema = new Schema({
    
    fueltype : {
        type : String,
        required: true
    },
 
    fuelquality : {
        type : String,
        required: true

    },
    cypetcoitemno : {
        type : String,
        required: true
    },
   
    tankcapacity: {
        type : Number,
        required: true
    },
    availablecapacity : {
        type : Number,
        required: true
    }
   
})
const Fuelstorage = mongoose.model("FuelStorage",fuelstoragedetailSchema);
module.exports=Fuelstorage;