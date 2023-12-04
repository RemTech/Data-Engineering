export const localQuery = {

  measures: [
    "products.count"
  ],
  timeDimensions: [
    {
      dimension: "products.created_at"
    }
  ],
  order: [
    [
      "products.count",
      "desc"
    ]
  ],
  dimensions: [
    "orders.status"
  ]
};

export const CUBEJS_API_SECRET='1912e7e2eb5addaa40cd38cff1d0b6c0';
export const apiUrl='http://localhost:4000/cubejs-api/v1' ;
