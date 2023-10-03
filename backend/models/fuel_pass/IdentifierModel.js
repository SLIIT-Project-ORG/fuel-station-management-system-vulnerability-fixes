const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IdentifierSchema = new Schema({

    owner_name: {
        type: String,
        required: true
    },
    nic: {
        type: String,
        required: true
    },
    mobile_number: {
        type: String,
        required: true
    },
    vehicle_type: {
        type: String,
        required: true
    },
    vehicle_number: {
        type: String,
        required: true
    },
    chassie_number: {
        type: String,
        required: true
    },
    fuel_type: {
        type: String,
        required: true
    },
    reference_no: {
        type: String,
        required: true
    }

})

const Identifier = mongoose.model("identifier", IdentifierSchema);
module.exports = Identifier;