const router= require("express").Router();
let FuelRequest =require("../models/FuelRequest");

router.route("/request").post((req,res)=>{
    //const registerID= req.body.registerID;
    const supplierID= req.body.supplierID;
    const supplierName= req.body.supplierName;
    const fuelType = req.body.fuelType;
    const fuelAmount = req.body.fuelAmount;
    const estimatedDelivery= req.body.estimatedDelivery;
    const specialNotice = req.body.specialNotice;
     
    const newfuelRequest = new FuelRequest({
      //  registerID,
       supplierID,
       supplierName,
       fuelType,
       fuelAmount,
       estimatedDelivery,
       specialNotice
    })
    newfuelRequest.save().then(()=>{
        res.setHeader('Content-Security-Policy', "default-src 'self'");
        res.json("Successfully Requested Fuel")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
  FuelRequest.find().then((FuelRequest)=>{    
    res.setHeader('Content-Security-Policy', "default-src 'self'");
    res.json(FuelRequest)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route("/update/:id").put(async(req,res)=>{
    let requestId = req.params.id;
    const{ supplierID,
        supplierName,
        fuelType,
        fuelAmount,
        estimatedDelivery,
        specialNotice }=req.body;

    const updateRequest ={

     //   registerID,
     supplierID,
     supplierName,
     fuelType,
     fuelAmount,
     estimatedDelivery,
     specialNotice
          
    }

    const update = await FuelRequest.findByIdAndUpdate(requestId,updateRequest)
    .then(()=>{
        res.setHeader('Content-Security-Policy', "default-src 'self'");
        res.status(200).send({status:"Request Updates Successfully" })
    }).catch((err)=>{
        console.log(err);
        res.setHeader('Content-Security-Policy', "default-src 'self'");
        res.status(500).send({status:"Error with updating data",error:err.message});
     
    })

    router.route("/delete/:id").delete(async(req, res)=>{
        let requestId=req.params.id;
    
        await FuelRequest.findByIdAndDelete(requestId)
        .then(()=>{
            res.setHeader('Content-Security-Policy', "default-src 'self'");
            res.status(200).send({status:" Deleted Request"});
        }).catch((err)=>{
            console.log(err.message);
            res.setHeader('Content-Security-Policy', "default-src 'self'");
            res.status(500).send({status:"Error with delete",error:err.message});
        })
    })
    
    
    router.route('/:id').get((req, res) => {
    
        let id = req.params.id;
        FuelRequest.findById(id)
            .then((data) => {
                res.setHeader('Content-Security-Policy', "default-src 'self'");
                res.json(data);
                //console.error(data);
            })
            .catch((err) => {
                res.setHeader('Content-Security-Policy', "default-src 'self'");
                res.json(err);
            })
    
    })
 
})
module.exports=router;