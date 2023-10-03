const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuantitySchema = new Schema({

    vehicle_type:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    }

})

const quantity = mongoose.model("Quantities",QuantitySchema);
module.exports = quantity;