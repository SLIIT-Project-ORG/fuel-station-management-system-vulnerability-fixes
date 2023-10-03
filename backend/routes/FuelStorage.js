const router = require("express").Router();
let FuelStorage = require("../models/FuelStorage");

router.route("/add").post((req, res) => {

  const fueltype = req.body.fueltype;
  const fuelquality = req.body.fuelquality;
  const cypetcoitemno = req.body.cypetcoitemno;

  const tankcapacity = Number(req.body.tankcapacity);
  const availablecapacity = Number(req.body.availablecapacity);

  const newFuelStorage = new FuelStorage({

    fueltype,
    fuelquality,
    cypetcoitemno,

    tankcapacity,

    availablecapacity
  })
  newFuelStorage.save().then(() => {
    res.setHeader('Content-Security-Policy', "default-src 'self'");
    res.json("FuelStorage Added")
  }).catch((err) => {
    console.log(err);
  })
})

router.route("/").get((req, res) => {
  FuelStorage.find().then((FuelStorages) => {
    res.setHeader('Content-Security-Policy', "default-src 'self'");
    res.json(FuelStorages)
  }).catch((err) => {
    console.log(err)
  })
})
router.route('/update/:id').put((req, res, next) => {
  FuelStorage.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {

      res.setHeader('Content-Security-Policy', "default-src 'self'");
      res.json(data)
      console.log('FuelStorage updated successfully !')
    }
  })
})

router.route("/delete/:id").delete(async (req, res) => {
  let accId = req.params.id;

  await FuelStorage.findByIdAndDelete(accId)
    .then(() => {
      res.setHeader('Content-Security-Policy', "default-src 'self'");
      res.status(200).send({ status: " FuelStorage deleted" });
    }).catch((err) => {
      console.log(err.message);
      res.setHeader('Content-Security-Policy', "default-src 'self'");
      res.status(500).send({ status: "Error with delete", error: err.message });
    })
})


router.route('/get/:id').get((req, res) => {
  FuelStorage.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {

      res.setHeader('Content-Security-Policy', "default-src 'self'");
      res.json(data)
    }
  })
})
module.exports = router;
