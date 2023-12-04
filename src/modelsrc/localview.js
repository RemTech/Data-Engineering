
import cubejs from "@cubejs-client/core";
import { localQuery,apiUrl,CUBEJS_API_SECRET } from "../../data/LocalModel";

const localCubeApi=cubejs(CUBEJS_API_SECRET,{apiUrl});

export async function getLocalDataSet(){

    const connectData=await localCubeApi.load(localQuery)
    return connectData.tablePivot().map(row=>({
        product_count: parseInt(row['products.count']),
        order_status: row['orders.status']
    }));
}