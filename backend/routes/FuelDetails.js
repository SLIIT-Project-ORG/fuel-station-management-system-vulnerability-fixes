const router = require("express").Router();
let FuelDetails = require("../models/FuelDetails");

router.route("/add").post((req, res) => {

  const fueltype = req.body.fueltype;
  const fuelquality = req.body.fuelquality;
  const cypetcoitemno = req.body.cypetcoitemno;

  const price = Number(req.body.price);
  const priceupdateddate = req.body.priceupdateddate;
  const description = req.body.description;

  const newFuelDetails = new FuelDetails({

    fueltype,
    fuelquality,
    cypetcoitemno,
    price,
    priceupdateddate,

    description
  })
  newFuelDetails.save().then(() => {
    res.setHeader('Content-Security-Policy', "default-src 'self'");
    res.json("FuelDetails Added")
  }).catch((err) => {
    console.log(err);
  })
})

router.route("/").get((req, res) => {
  FuelDetails.find().then((FuelDetailss) => {
    res.setHeader('Content-Security-Policy', "default-src 'self'");
    res.json(FuelDetailss)
  }).catch((err) => {
    console.log(err)
  })
})
router.route('/update/:id').put((req, res, next) => {
  FuelDetails.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {

      res.setHeader('Content-Security-Policy', "default-src 'self'");
      res.json(data)
      console.log('FuelDetails updated successfully !')
    }
  })
})

router.route("/delete/:id").delete(async (req, res) => {
  let accId = req.params.id;

  await FuelDetails.findByIdAndDelete(accId)
    .then(() => {
      res.setHeader('Content-Security-Policy', "default-src 'self'");
      res.status(200).send({ status: " FuelDetails deleted" });
    }).catch((err) => {
      console.log(err.message);
      res.setHeader('Content-Security-Policy', "default-src 'self'");
      res.status(500).send({ status: "Error with delete", error: err.message });
    })
})


router.route('/get/:id').get((req, res) => {
  FuelDetails.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {

      res.setHeader('Content-Security-Policy', "default-src 'self'");
      res.json(data)
    }
  })
})
module.exports = router;