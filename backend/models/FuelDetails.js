const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fueldetailSchema = new Schema({
    
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
    price : {
        type : Number,
        required: true
    },
    priceupdateddate: {
        type : String,
        required: true
    },
    description : {
        type : String,
        required: true
    }
   
})
const FuelDetails = mongoose.model("FuelDetails",fueldetailSchema);
module.exports=FuelDetails;