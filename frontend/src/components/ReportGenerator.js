import jsPDF from 'jspdf';
import 'jspdf-autotable'

const ReportGenerator = Employee =>{

    const doc = new jsPDF();

    const tableColumn = ["First Name","Last Name","Address1","Address2","NIC","Phone Number","Designation","Salary","Email"];
    const tableRows = [];

    Employee.forEach(Employee => {
        const EmployeeData = [
           Employee.First_Name,
           Employee.Last_Name,
           Employee.Address1,
           Employee.Address2,
           Employee.NIC,
           Employee.Phone_Number,
           Employee.Designation,
           Employee.Salary,
           Employee.Email


        ]
      tableRows.push(EmployeeData);
    });

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    doc.autoTable(tableColumn,tableRows,{startY:20});
    doc.text("Employee Details List",14,15);
    doc.save(`Employee_${year}`+" "+`${month}`+" "+`${day}`+".pdf");

}

export default ReportGenerator;