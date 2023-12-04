
import { Chart } from "chart.js/auto";
import { getLocalDataSet } from "../modelsrc/localView";

async function localDataDisplay() {
    const displayData = await getLocalDataSet();
    const elementId = document.getElementById('localchart');

    new Chart(elementId, {
        type: 'bar',
        data: {
            labels: displayData.map(row=>row.order_status), // X axis
            datasets:[
                {
                    label: 'Order Status',
                    data: displayData.map(row=> row.product_count) // Y axis
                },
        
            ]
        }
    });
}
localDataDisplay();