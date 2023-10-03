import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/AdminLogin';
import EmployeeView from './components/EmployeeView';
import UserLogin from './components/UserProfileLogin';
import UserProfileView from './components/UserProfileView';
import UpdateEmployee from './components/UpdateEmployeeDetails';
import Home from './components/HomePage';
import Admin from './components/AdminSideBar';
import EmployeeReportView from './components/EmployeeReportView';
import UpdatePayment from './components/UpdatePaymentDetails';
import Test from './components/Test';
import Test1 from './components/Test1';
import Test4 from './components/Test4';
import Test5 from './components/Test5';
import Test6 from './components/Test6';
import FuelPassLogin from './components/FuelPassLogin';
import FuelPassUserProfile from './components/FuelPassUserProfile';
import AdminFuelPasses from './components/AdminFuelPasses';
import AdminFuelPasses1 from './components/AdminFuelPasses1';
import AdminFuelPassUpdate1 from './components/AdminFuelPassUpdate1';
import FuelPassProfile1 from './components/FuelPassProfile1';
import { FuelOrderHome }  from './components/FuelOrders/FuelOrderHome';
import AddPayment from './components/AddPayment';
import PaymentDetails from './components/PaymentDetails';
import AddFuelDetails from './components/AdminAddFuelDetails';
import FuelDetailsManagement from './components/ManageFuelDetails';
import FuelDetailsCustomer from './components/FuelDetailsCustomerView';
import UpdateFuelDetails from './components/updateFuelDetails';
import AddFuelInventory from './components/AdminAddInventoty';
import FuelInventoryManagement from './components/ManageInventory';
import AddFuelStorage from './components/AdminAddFuelStorage';
import UpdateInventory from './components/updateInventory';
import FuelStorageCustomer from './components/StorageDetailsCustomerView';
import UpdateFuelCapacity from './components/UpdateFuelCapacity';
import UpdateFuelStorage from './components/updateFuelStorage';
import FuelStorageManagement from './components/ManageStorage';
import VehicleRegistration from './components/VehicleRegistration';
import VehicleUpdate from './components/VehicleUpdate'; 
// import VehicleUpdate from './components/VehicleUpdate';
import Admin1 from './components/AdminSideBar1';
import Admin2 from './components/AdminSideBar2';
import Admin3 from './components/AdminSideBar3';
import SupplierRegistration from './components/SupplierRegistration';
import SupplierUpdate from './components/SupplierUpdate';
import FuelRequest from './components/FuelRequest';
import FuelUpdate from './components/FuelUpdate';
import AdminFuelOrderView1 from './components/FuelOrders/AdminFuelOrderView1';
import UserCreationFuelPass from './components/UserCreateFuelPass';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/employeedetails' element={<EmployeeView />}></Route>
          <Route path='/userprofile' element={<UserLogin />}></Route>
          <Route path='/employeeprofile/:id' element={<UserProfileView />}></Route>
          <Route path='/updateemployee/:id' element={<UpdateEmployee />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/employeedetails' element={<EmployeeReportView />}></Route>
          <Route path='/updatepayment/:id' element={<UpdatePayment />}></Route>
          <Route path='/test' element={<Test/>}></Route>
          <Route path='/test1' element={<Test1/>}></Route>
          <Route path='/payment' element={<Test4/>}></Route>
          <Route path='/paymentdetails' element={<Test5/>}></Route>
          <Route path='/payment/:id' element={<Test6/>}></Route>
          <Route path='/payment' element={<AddPayment />}></Route>
          <Route path='/paymentdetails' element={<PaymentDetails />}></Route>
          <Route path='/updatepayment' element={<UpdatePayment />}></Route>
          {/* Gayashan */}
          {/* <Route path='/admin/allfuelpass' element={<AdminFuelPasses/>}></Route>
          <Route path='/admin/fuelpass/:id' element={<FuelPassProfile/>}></Route>
          <Route path='/user/fuelpass/login' element={<FuelPassLogin/>}></Route>
          <Route path='/user/fuelpass/:id' element={<FuelPassUserProfile/>}></Route>
          <Route path='/admin/update/:id' element={<AdminFuelPasses/>}></Route>
          <Route path='/admin/fuelPass/update/:id' element={<AdminFuelPassUpdate/>}></Route> */}
          {/* Gayashan */}
          <Route path='/admin/allfuelpass' element={<AdminFuelPasses1 />}></Route>
          <Route path='/admin/fuelpass/:id' element={<FuelPassProfile1 />}></Route>
          <Route path='/user/fuelpass/login' element={<FuelPassLogin />}></Route>
          <Route path='/user/fuelpass/:id' element={<FuelPassUserProfile />}></Route>
          <Route path='/admin/update/:id' element={<AdminFuelPasses />}></Route>
          <Route path='/admin/fuelPass/update/:id' element={<AdminFuelPassUpdate1 />}></Route> 
          <Route path='/user/fuelOrderHome' element={<FuelOrderHome/>}/>
          <Route path='/admin/fuelOrderView' element={<AdminFuelOrderView1/>}/>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/adddetails' element={<AddFuelDetails />}></Route>
          <Route path='/fueldetailsmanage' element={<FuelDetailsManagement />}></Route>
          <Route path='/updatefueldetails/:id' element={<UpdateFuelDetails />}></Route>
          <Route path='/fueldetailsCustomer' element={<FuelDetailsCustomer />}></Route>
          <Route path='/addinventory' element={<AddFuelInventory />}></Route>
          <Route path='/manageinventory' element={<FuelInventoryManagement />}></Route>
          <Route path='/updatefuelinventory/:id' element={<UpdateInventory/>}></Route>
          <Route path='/addstorage' element={<AddFuelStorage />}></Route>
          <Route path='/updatefuelstorage/:id' element={<UpdateFuelStorage/>}></Route>
          <Route path='/updatefuelcapacity/:id' element={<UpdateFuelCapacity/>}></Route>
          <Route path='/storagecustomer' element={<FuelStorageCustomer/>}></Route>
          <Route path='/storagemanagement' element={<FuelStorageManagement/>}></Route>
		{/* ashan */}
           <Route path='/vehicleregister'   element={<VehicleRegistration/>} > </Route>
          <Route path='/vehicleview'   element={<Admin1/>} > </Route>  
          <Route path='/updatevehicle/:id'   element={<VehicleUpdate/>} > </Route>
          <Route path='/supplierregister'   element={<SupplierRegistration/>} > </Route>
          <Route path='/supplierview'   element={<Admin2/>} > </Route>
          <Route path='/updatesupplier/:id'   element={<SupplierUpdate/>} > </Route>
          <Route path='/fuelrequest'   element={<FuelRequest/>} > </Route>
          <Route path='/fuelview'   element={<Admin3/>} > </Route>
          <Route path='/updaterequest/:id'   element={<FuelUpdate/>} > </Route>
          <Route path="/pass-register" element={<UserCreationFuelPass/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
