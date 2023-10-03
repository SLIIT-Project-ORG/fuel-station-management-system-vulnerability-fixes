const router = require("express").Router();
let FuelInventory = require("../models/FuelInventry");

router.route("/add").post((req, res) => {

  const fueltype = req.body.fueltype;
  const fuelquality = req.body.fuelquality;
  const cypetcoitemno = req.body.cypetcoitemno;


  const unloadeddate = req.body.unloadeddate;
  const UnloadedCapacity = Number(req.body.UnloadedCapacity);

  const newFuelInventory = new FuelInventory({

    fueltype,
    fuelquality,
    cypetcoitemno,

    unloadeddate,

    UnloadedCapacity
  })
  newFuelInventory.save().then(() => {
    res.setHeader('Content-Security-Policy', "default-src 'self'");
    res.json("FuelInventory Added")
  }).catch((err) => {
    console.log(err);
  })
})

router.route("/").get((req, res) => {
  FuelInventory.find().then((FuelInventorys) => {
    res.setHeader('Content-Security-Policy', "default-src 'self'");
    res.json(FuelInventorys)
  }).catch((err) => {
    console.log(err)
  })
})
router.route('/update/:id').put((req, res, next) => {
  FuelInventory.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      console.log(error)
      return next(error);
    } else {
      res.setHeader('Content-Security-Policy', "default-src 'self'");
      res.json(data)
      console.log('FuelInventory updated successfully !')
    }
  })
})

router.route("/delete/:id").delete(async (req, res) => {
  let accId = req.params.id;

  await FuelInventory.findByIdAndDelete(accId)
    .then(() => {
      res.setHeader('Content-Security-Policy', "default-src 'self'");
      res.status(200).send({ status: " FuelInventory deleted" });
    }).catch((err) => {
      console.log(err.message);
      res.setHeader('Content-Security-Policy', "default-src 'self'");
      res.status(500).send({ status: "Error with delete", error: err.message });
    })
})


router.route('/get/:id').get((req, res) => {
  FuelInventory.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {

      res.setHeader('Content-Security-Policy', "default-src 'self'");
      res.json(data)
    }
  })
})
module.exports = router;
