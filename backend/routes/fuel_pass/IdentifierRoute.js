const router = require("express").Router();
const Identifier = require("../../models/fuel_pass/IdentifierModel");
const Quantity = require("../../models/fuel_pass/QuantityModel");

router.route("/").post(async (req, res) => {

    const register = req.body;
    var ReferenceNm = "";

    var part1 = register.nic.substring(0, 3);
    var part2 = register.mobile_number.substring(7, 10);
    var part3 = "";

    switch (register.vehicle_type) {

        case "VAN":
            part3 = "1V";
            break;

        case "CAR":

            part3 = "2C";
            break;

        case "BIKE":
            part3 = "3B";
            break;

        case "BUS":
            part3 = "4B";
            break;

        default: {
            part3 = "DD";
            break;
        }

    }

    var part4 = register.vehicle_number.substring(3, 5);
    var part5 = register.chassie_number.substring(3, 7);
    var part6 = "";

    if (register.fuel_type == "PETROL") {
        part6 = "PT";
    }
    else if (register.fuel_type == "DIESEL") {
        part6 = "DS";
    }
    else {
        part6 = "00";
    }

    ReferenceNm = part1 + "-" +
        part2 + "-" +
        part3 + "-" +
        part4 + "-" +
        part5 + "-" +
        part6 + "-" +
        0;

    register.reference_no = ReferenceNm;

    await Identifier.findOne(

        {
            $or: [
                { owner_name: register.owner_name },
                { nic: register.nic },
                { mobile_number: register.mobile_number },
                { vehicle_number: register.vehicle_number },
                { chassie_number: register.chassie_number }
            ]
        }

    )
        .then(async (data) => {
            if (data) {
                res.status(400);
                res.setHeader('Content-Security-Policy', "default-src 'self'");
                res.json("You have registered within this week");
            }
            else {
                await Identifier.create(register)
                    .then((data) => {

                        var obj = {
                            "message": "Fuel pass Created Successfully",
                            "data": data
                        }
                        res.status(201);
                        res.setHeader('Content-Security-Policy', "default-src 'self'");
                        res.json(obj);
                    })
                    .catch((err) => {
                        res.status(400);
                        res.setHeader('Content-Security-Policy', "default-src 'self'");
                        res.json(err);
                    })
            }
        })
        .catch((err) => {
            res.status(404);
            res.setHeader('Content-Security-Policy', "default-src 'self'");
            res.json(err);
        })

})

router.route("/").get((req, res) => {

    Identifier.find()
        .then((data) => {
            res.status(200);
            res.setHeader('Content-Security-Policy', "default-src 'self'");
            res.json(data);
        })
        .catch((err) => {
            res.status(400);
            res.setHeader('Content-Security-Policy', "default-src 'self'");
            res.json(err.message);
        })

})

router.route("/:id").get(async (req, res) => {

    const id = req.params.id;
    var quantity = 0;

    await Identifier.findById(id)
        .then(async (data) => {

            await Quantity.findOne({ vehicle_type: data.vehicle_type })
                .then((data) => {
                    quantity = data.quantity;
                })
                .catch((err) => {
                    console.log(err.message);
                })

            res.setHeader('Content-Security-Policy', "default-src 'self'");
                res.json({
                "data": data,
                "quantity": quantity
            });
        })
        .catch((err) => {
            console.log(err);
        })

})

router.route("/:id").put((req, res) => {

    const id = req.params.id;
    const body = req.body;

    Identifier.findByIdAndUpdate(id, body)
        .then(() => {
            res.status(201);
            res.setHeader('Content-Security-Policy', "default-src 'self'");
            res.json("Your profile was updated");
        })
        .catch((err) => {
            res.status(400);
            res.setHeader('Content-Security-Policy', "default-src 'self'");
            res.json(err.message);
        })

})

router.route("/:id").delete((req, res) => {

    const id = req.params.id;

    Identifier.findByIdAndDelete(id)
        .then(() => {
            res.status(200);
            res.setHeader('Content-Security-Policy', "default-src 'self'");
            res.json("Profile Deleted");
        })
        .catch((err) => {
            res.status(400);
            res.setHeader('Content-Security-Policy', "default-src 'self'");
            res.json(err.message);
        })

})


//Find by reference number
router.route("/find").post((req, res) => {

    Identifier.findOne({ reference_no: req.body.reference_no })
        .then((data) => {
            res.status(200);
            res.setHeader('Content-Security-Policy', "default-src 'self'");
            res.json(data);
        })
        .catch((err) => {
            res.status(400);
            res.setHeader('Content-Security-Policy', "default-src 'self'");
            res.json(err.message);
        })

})

router.route("/findprofile").post((req, res) => {

    Identifier.findOne({ mobile_number:req.body.mobile_number,nic:req.body.nic })
        .then((data) => {

            if(!data){
                res.status(400);
                res.setHeader('Content-Security-Policy', "default-src 'self'");
                res.json("Profile Not Found");
            }
            else{
                res.status(200);
                res.setHeader('Content-Security-Policy', "default-src 'self'");
                res.json(data);
            }
        })
        .catch((err) => {
            res.status(400);
            res.setHeader('Content-Security-Policy', "default-src 'self'");
            res.json(err.message);
        })

})


router.route("/findprofile/query_param").get((req, res) => {

    Identifier.findOne({ mobile_number:req.query.mobile_number,nic:req.query.nic })
        .then((data) => {
            if(!data){
                res.status(400);
                res.setHeader('Content-Security-Policy', "default-src 'self'");
                res.json("Profile Not Found");
            }
            else{
                res.status(200);
                res.send("<div>" + data + "</div>");
            }
        })
        .catch((err) => {
            res.status(400);
            res.setHeader('Content-Security-Policy', "default-src 'self'");
            res.json(err.message);
        });
})

module.exports = router;