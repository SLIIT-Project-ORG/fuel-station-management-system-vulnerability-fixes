const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");

const adminSchema = new Schema({
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    email:{
        type:String
    },
    contact_no:{
        type:String
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

adminSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id,first_name: this.first_name}, process.env.JWTPRIVATEKEY, {
        expiresIn: "3600"
    });
    return token;
}

const admin = mongoose.model("admins",adminSchema);
module.exports = admin;