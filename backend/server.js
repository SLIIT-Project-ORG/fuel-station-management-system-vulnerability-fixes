const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv/config");

//DB Connection
require("./config/dbconnection");

const app = express();

const corsOptions = {
    origin: ['http://localhost:3000'],
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(
    helmet({
      contentSecurityPolicy: true,
      dnsPrefetchControl: true,
      nosniff: true,
      noCache: true,
      public: true,
      maxAge: '1y',
      immutable: true,
    })
  );

const PORT = process.env.PORT;

const fueldetailRouter = require("./routes/FuelDetails");
const fuelInventorydetailRouter = require("./routes/FuelInventory");
const fuelstoragedetailRouter = require("./routes/FuelStorage");
let employeeprofile = require("./routes/Employee__Profiles_Page.js");
let ppayment = require("./routes/Payments");
let alogin = require("./routes/AdminRoute");
const identifier = require("./routes/fuel_pass/IdentifierRoute.js");
const quantity = require("./routes/fuel_pass/QuantityRoute.js");
const order = require("./routes/fuel_order/OrderRoute.js");
let VehicleRegistration = require('./routes/VehicleRegistrations');
let SupplierRegistration = require('./routes/SupplierRegistrations');
let FuelRequest = require('./routes/FuelRequests');

//For Route declareration
app.use("/fueldetail", fueldetailRouter);
app.use("/fuelinventory", fuelInventorydetailRouter);
app.use("/fuelstorage", fuelstoragedetailRouter);
app.use("/admin/employeeprofile", employeeprofile);
app.use("/admin/payment", ppayment);
app.use("/admin/employeeprofile", employeeprofile);
app.use("/admin/payment", ppayment);
app.use("/admin", alogin);
app.use("/identifier", identifier);
app.use("/quantity", quantity);
app.use("/fuel-order", order);
app.use("/fueldetail", fueldetailRouter);
app.use("/fuelinventory", fuelInventorydetailRouter);
app.use("/fuelstorage", fuelstoragedetailRouter);
app.use('/VehicleRegistration', VehicleRegistration);
app.use('/SupplierRegistration', SupplierRegistration);
app.use('/FuelRequest', FuelRequest);

//End
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})