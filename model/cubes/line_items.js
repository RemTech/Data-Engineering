cube(`line_items`, {
  sql_table: `public.line_items`,
  
  data_source: `default`,
  
  joins: {
    products: {
      sql: `${CUBE}.product_id = ${products}.id`,
      relationship: `many_to_one`
    },
    
    orders: {
      sql: `${CUBE}.order_id = ${orders}.id`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    created_at: {
      sql: `created_at`,
      type: `time`
    }
  },
  
  measures: {
    count: {
      type: `count`
    },
    
    quantity: {
      sql: `quantity`,
      type: `sum`
    },
    
    price: {
      sql: `price`,
      type: `sum`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
