const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fuelinventrydetailSchema = new Schema({
    
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
   
    unloadeddate: {
        type : String,
        required: true
    },
    UnloadedCapacity : {
        type : Number,
        required: true
    }
   
})
const Fuelinventry = mongoose.model("FuelInventory",fuelinventrydetailSchema);
module.exports=Fuelinventry;