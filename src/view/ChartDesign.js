
import  Chart  from "chart.js/auto";
import { getDataResult } from "../modelsrc/modelview";

/**
 * @view for the data
 */
  async function displayData() {

   const result = await getDataResult()
   const ctx=document.getElementById('chart')
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: result.map(row => row.year), // X axis
            datasets: [
                {
                    label: 'Year Acquired',
                    data: result.map(row => row.count) // Y axis
                }
            ]
        }
    })
};
displayData();