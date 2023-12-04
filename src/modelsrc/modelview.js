
import cubejs from "@cubejs-client/core";
import { apiUrl,cubeToken,model } from "../../data/query";

const cubeJsApi=cubejs(cubeToken,{apiUrl});

export async function getDataResult(){

    const resultSet= await cubeJsApi.load(model);
    return resultSet.tablePivot().map(row=>({
        year: parseInt(row['Artworks.yearAcquired']), // dimensions
        count: parseInt(row['Artworks.count']) // measures
    }));

}