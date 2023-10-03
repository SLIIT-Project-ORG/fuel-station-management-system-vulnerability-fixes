const router = require("express").Router();
const Quantity = require("../../models/fuel_pass/QuantityModel");

router.route("/").post(async (req, res) => {

    const data = req.body;

    await Quantity.create(data)
        .then(() => {
            res.status(201);
            res.setHeader('Content-Security-Policy', "default-src 'self'");
            res.json("Vehicle type and quantity inserted");
        })
        .catch((err) => {
            res.status(400);
            res.setHeader('Content-Security-Policy', "default-src 'self'");
            res.json(err.message);
        })
})

router.route("/").get(async (req, res) => {

    Quantity.find()
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

module.exports = router;