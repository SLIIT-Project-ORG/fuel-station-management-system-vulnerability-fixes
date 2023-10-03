const router = require("express").Router();
const ppayment = require("../models/Payment");

//insert
router.route("/insert").post((req, res) => {


    let Payment_Type = req.body.Payment_Type;
    let Payment_Method = req.body.Payment_Method;
    let Price = req.body.Price;
    let Description = req.body.Description;
    let Date = req.body. Date;
    let Name_Of_Payment = req.body.Name_Of_Payment;
   

    const ppaymentobj = new ppayment({

        Payment_Type,Payment_Method,Price,Description,Date,Name_Of_Payment

    });

    ppaymentobj .save().then(() => {

        res.setHeader('Content-Security-Policy', "default-src 'self'");
        res.json("Insert Payment Details Successfully");

    }).catch((err) => {

        console.log(err);

    });

})


//view
router.route("/").get((req, res) => {

    ppayment.find().then((ppayment ) => {
        res.setHeader('Content-Security-Policy', "default-src 'self'");
        res.json(ppayment );
    }).catch((err) => {
        console.log(err);
    });

});

//delete
router.route("/delete/:id").delete((req, res) => {

    let paypayment = req.params.id;

    ppayment.findByIdAndDelete(paypayment).then(() => {
        res.setHeader('Content-Security-Policy', "default-src 'self'");
        res.json("Delete Payment Details successfully");
    }).catch((err) => {
        console.log(err);
    });

});


//update
router.route("/update/:id").put((req, res) => {

    const pid = req.params.id;

    let Payment_Type = req.body.Payment_Type;
    let Payment_Method = req.body.Payment_Method;
    let Price = req.body.Price;
    let Description = req.body.Description;
    let Date = req.body. Date;
    let Name_Of_Payment = req.body.Name_Of_Payment;
   


    const ppaymentobj = ({

        Payment_Type,Payment_Method,Price,Description,Date,Name_Of_Payment
 })

    ppayment.findByIdAndUpdate(pid, ppaymentobj).then((pdata) => {
        res.setHeader('Content-Security-Policy', "default-src 'self'");
        res.json(pdata);
    }).catch((err) => {
        console.log(err);
    });

});

//Find one
router.route("/:id").get((req, res) => {

    let id = req.params.id;

    ppayment.findById(id).then((data) => {
        res.setHeader('Content-Security-Policy', "default-src 'self'");
        res.json(data);
    }).catch((err) => {
        console.log(err);
    })

});



router.route("/search").post((req, res) => {

    let  payment = req.body;

    ppayment.findOne(
        {
            Name_Of_Payment: payment.Name_Of_Payment,
            Date: payment.Date
        }
    )
        .then((data) => {

            res.setHeader('Content-Security-Policy', "default-src 'self'");
            res.json(data);
        })
        .catch((err) => {

            res.setHeader('Content-Security-Policy', "default-src 'self'");
            res.json(err.message);
        })

})

module.exports = router;