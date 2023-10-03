const router= require("express").Router();
let VehicleRegistration =require("../models/VehicleRegistration");

router.route("/register").post((req,res)=>{
    //const registerID= req.body.registerID;
    const vehicleType= req.body.vehicleType;
    const vehicleNo= req.body.vehicleNo;
    const chassisNo = req.body.chassisNo;
    const registeredDate= req.body.registeredDate;
    const vehicleCondition = req.body.vehicleCondition;  
   
    const newvehicleRegistration = new VehicleRegistration({
      //  registerID,
        vehicleType,
        vehicleNo,
        chassisNo,
        registeredDate,
        vehicleCondition,
            
    })
    newvehicleRegistration.save().then(()=>{
        
        res.setHeader('Content-Security-Policy', "default-src 'self'");
        res.json("Successfully Registered the Vehicle")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
  VehicleRegistration.find().then((VehicleRegistration)=>{
        
    res.setHeader('Content-Security-Policy', "default-src 'self'");
    res.json(VehicleRegistration)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route("/update/:id").put(async(req,res)=>{
    let vehicleId = req.params.id;
    const{ vehicleType,vehicleNo,chassisNo,registeredDate,vehicleCondition }=req.body;

    const updateVehicle ={

     //   registerID,
        vehicleType,
        vehicleNo,
        chassisNo,
        registeredDate,
        vehicleCondition,
          
    }

    const update = await VehicleRegistration.findByIdAndUpdate(vehicleId,updateVehicle)
    .then(()=>{
        
        res.setHeader('Content-Security-Policy', "default-src 'self'");
        res.status(200).send({status:"Vehicle Updates Successfully" })
    }).catch((err)=>{
        console.log(err);
        
        res.setHeader('Content-Security-Policy', "default-src 'self'");
        res.status(500).send({status:"Error with updating data",error:err.message});
     
    })
})

 

router.route("/delete/:id").delete(async(req, res)=>{
    let vehicleId=req.params.id;

    await VehicleRegistration.findByIdAndDelete(vehicleId)
    .then(()=>{
        
        res.setHeader('Content-Security-Policy', "default-src 'self'");
        res.status(200).send({status:" Deleted Registered Vehicle"});
    }).catch((err)=>{
        console.log(err.message);
        
        res.setHeader('Content-Security-Policy', "default-src 'self'");
        res.status(500).send({status:"Error with delete",error:err.message});
    })
})


router.route('/:id').get((req, res) => {

    let id = req.params.id;

    VehicleRegistration.findById(id)
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
module.exports=router;