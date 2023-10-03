import jsPDF from 'jspdf';
import 'jspdf-autotable'

const ReportGenerator = Inventory =>{

    const doc = new jsPDF();

    const tableColumn = ["fuel type","fuel quality","cypetco item no","unloaded date","capacity"];
    const tableRows = [];

    Inventory.forEach(Inventory => {
        const InventoryData = [
           Inventory.fueltype,
           Inventory.fuelquality,
           Inventory.cypetcoitemno,
           Inventory.unloadeddate,
           Inventory.UnloadedCapacity


        ]
      tableRows.push(InventoryData);
    });

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    doc.autoTable(tableColumn,tableRows,{startY:20});
    doc.text("Inventory Details List",14,15);
    doc.save(`Inventory_${year}`+" "+`${month}`+" "+`${day}`+".pdf");

}

export default ReportGenerator;