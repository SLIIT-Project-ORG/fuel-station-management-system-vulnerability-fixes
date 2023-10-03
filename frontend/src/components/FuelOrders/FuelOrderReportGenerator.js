import jsPDF from 'jspdf';
import "jspdf-autotable";


const FuelOrderReportGenerator = order => {

    const doc = new jsPDF();

    const tableColumn = ["Institute", "Reg NO", "Province", "District", "City", "Email", "Mobile No"];
    const tableRows = [];

    order.forEach(order => {
        const orderData = [
            order.institute,
            order.regstration_no,
            order.province,
            order.district,
            order.city,
            order.email,
            order.mobile_no
        ]

        tableRows.push(orderData);
    });

    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();


    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.text("List of Orders", 14, 15);
    doc.save(`Order_Report_${year + " " + month + " " + date}.pdf`);
};

export default FuelOrderReportGenerator;