const router = require("express").Router();
const Order = require("../../models/fuel_order/OrderModel");

//Create Order
router.route("/").post(async (req, res) => {

    try {

        const response = {
            "msg": null,
            "data": null
        }

        await Order.findOne(
            {
                $or: [
                    { email: req.body.email },
                    { fax_no: req.body.fax_no },
                    { regstration_no: req.body.regstration_no },
                    { institute: req.body.institute },
                    { mobile_no: req.body.mobile_no }
                ]
            }
        ).then(async (data) => {
            if (!data) {

                const OrderReqObj = req.body;

                if (OrderReqObj.email != null || OrderReqObj.email != "") {
                    if (OrderReqObj.mobile_no != null || OrderReqObj.mobile_no != "") {
                        if (OrderReqObj.institute != null || OrderReqObj.institute != "") {
                            if (OrderReqObj.regstration_no != null || OrderReqObj.regstration_no != "") {

                                await Order.create(OrderReqObj)
                                    .then((data) => {
                                        response.data = data;
                                        response.msg = "success";
                                        res.status(200);
                                        res.json(response);
                                    })
                                    .catch((err) => {
                                        response.msg = err.message;
                                        res.status(400);
                                        res.json(response);
                                    })

                            } else {
                                response.msg = "Registration Number is null or empty!!";
                
                                res.status(200);
                                res.json(response);
                            }
                        } else {
                            response.msg = "Institute Name is null or empty!!";
            
                            res.status(200);
                            res.json(response);
                        }
                    } else {
                        response.msg = "Mobile Number is null or empty!!";
        
                        res.status(200);
                        res.json(response);
                    }
                } else {
                    response.msg = "Email is null or empty";
    
                    res.status(200);
                    res.json(response);
                }

            } else {
                response.msg = "Data already in the system";

                res.status(200);
                res.json(response);
            }
        })
            .catch((err) => {
                response.msg = err.message;

                res.status(400);
                res.json(response);
            })

    } catch (err) {
        return err;
    }

});


//Get All Orders
router.route("/").get((req, res) => {

    try {

        const response = {
            "msg": null,
            "data": null
        }

        Order.find()
            .then((data) => {
                response.msg = "success";
                response.data = data;

                res.status(200);
                res.json(response);
            }).catch((err) => {
                response.msg = err.message;

                res.status(400);
                res.json(response);
            })
    } catch (err) {
        return err;
    }

});


//Get Order by ID
router.route("/:id").get((req, res) => {

    try {

        const response = {
            "msg": null,
            "data": null
        }

        const id = req.params.id;
        Order.findById(id)
            .then((data) => {
                response.msg = "success";
                response.data = data;

                res.status(200);
                res.json(response);
            })
            .catch((err) => {
                response.msg = err.message;

                res.status(400);
                res.json(response);
            })

    } catch (err) {
        return err;
    }

})


//Update Order
router.route("/:id").put((req, res) => {

    try {

        const response = {
            "msg": null,
            "data": null
        }

        const id = req.params.id;
        const order = req.body;

        Order.findByIdAndUpdate(id, order)
            .then((data) => {
                response.data = order;
                response.msg = "success";

                res.status(200);
                res.json(response);
            })
            .catch((err) => {
                response.msg = err.message;

                res.status(400);
                res.json(response);
            })

    } catch (err) {
        return err;
    }

})


//Delete Order
router.route("/:id").delete((req, res) => {

    const id = req.params.id;

    const response = {
        "msg": null,
        "data": null
    }

    Order.findByIdAndDelete(id)
        .then((data) => {
            response.msg = "success";
            response.data = data._id;
            res.status(200);
            res.json(response);
        }).catch((err) => {
            response.msg = err.message;
            res.status(400);
            res.json(response);
        })

})



//Approve/Reject Order
router.route("/:id/:status").put((req, res) => {

    const id = req.params.id;
    let status = req.params.status;
    let data = req.body;

    data._id = id;
    data.isApprove = status;

    Order.findByIdAndUpdate(id, data)
        .then((d) => {
            res.status(200);
            res.json(data);
        })
        .catch((err) => {
            res.status(400);
            res.json(err.message);
        })
})

//Get All By Status Type
router.route("/status/:status").get((req, res) => {

    const status = req.params.status;

    Order.find({
        isApprove: status
    })
        .then((data) => {
            res.status(200);
            res.json(data);
        })
        .catch((err) => {
            res.status(400);
            res.json(err);
        })

})

module.exports = router;