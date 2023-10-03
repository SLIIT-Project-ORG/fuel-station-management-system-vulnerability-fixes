const router = require("express").Router();
const employeeprofile = require("../models/Employee_Profile_Page");

//insert
router.route("/insert").post((req, res) => {


    let First_Name = req.body.First_Name;
    let Last_Name = req.body.Last_Name;
    let Address1 = req.body.Address1;
    let Address2 = req.body.Address2;
    let NIC = req.body.NIC;
    let Phone_Number = req.body.Phone_Number;
    let Designation = req.body.Designation;
    let Salary = req.body.Salary;
    let Email = req.body.Email;

    const employeeprofileobj = new employeeprofile({

        First_Name, Last_Name, Address1, Address2, NIC, Phone_Number, Designation, Salary, Email
    
    });

    employeeprofile.findOne({ Email: employeeprofileobj.Email, NIC: employeeprofileobj.NIC, Phone_Number: employeeprofileobj.Phone_Number })
        .then((data) => {
            if (!data) {

                employeeprofileobj.save().then(() => {

                    const obj = {
                        msg: "Insert Employee Details Successfully",
                    }
                    
                    res.setHeader('Content-Security-Policy', "default-src 'self'");
                    res.json(obj);

                }).catch((err) => {

                    const obj = {
                        msg: "Employee insert failed",
                    }
                    
                    res.setHeader('Content-Security-Policy', "default-src 'self'");
                    res.json(obj);

                });

            }
            else {
                const obj = {
                    msg: "Mobile No,NIC or email already exists"
                }
                
                res.setHeader('Content-Security-Policy', "default-src 'self'");
                res.json(obj);
            }
        })
        .catch((err) => {
            console.log(err.message);
        })

});

//view
router.route("/").get((req, res) => {

    employeeprofile.find().then((employeeprofile) => {
        
        res.setHeader('Content-Security-Policy', "default-src 'self'");
        res.json(employeeprofile);
    }).catch((err) => {
        console.log(err);
    });

});

//delete
router.route("/delete/:id").delete((req, res) => {

    let Eprofile = req.params.id;

    employeeprofile.findByIdAndDelete(Eprofile).then(() => {
        
        res.setHeader('Content-Security-Policy', "default-src 'self'");
        res.json("Delete Employee Details successfully");
    }).catch((err) => {
        console.log(err);
    });

});


//update
router.route("/update/:id").put((req, res) => {

    const uid = req.params.id;

    let First_Name = req.body.First_Name;
    let Last_Name = req.body.Last_Name;
    let Address1 = req.body.Address;
    let Address2 = req.body.Address;
    let NIC = req.body.NIC;
    let Phone_Number = req.body.Phone_Number;
    let Designation = req.body.Designation;
    let Salary = req.body.Salary;
    let Email = req.body.Email;


    const employeeprofileobj = ({

        First_Name, Last_Name, Address1, Address2, NIC, Phone_Number, Designation, Salary, Email


    })

    employeeprofile.findByIdAndUpdate(uid, employeeprofileobj).then((udata) => {
        
        res.setHeader('Content-Security-Policy', "default-src 'self'");
        res.json(udata);
    }).catch((err) => {
        console.log(err);
    });

});

//Find one
router.route("/:id").get((req, res) => {

    let id = req.params.id;

    employeeprofile.findById(id).then((data) => {
        
        res.setHeader('Content-Security-Policy', "default-src 'self'");
        res.json(data);
    }).catch((err) => {
        console.log(err);
    })

})


router.route("/search").post((req, res) => {

    let employee = req.body;

    employeeprofile.findOne(
        {
            NIC: employee.NIC,
            Phone_Number: employee.Phone_Number
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