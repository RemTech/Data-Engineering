cube(`line_items_count_by_states`, {
  sql_table: `public.line_items_count_by_states`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    users_state: {
      sql: `users_state`,
      type: `string`
    }
  },
  
  measures: {
    count: {
      type: `count`
    },
    
    line_items_count: {
      sql: `line_items_count`,
      type: `sum`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
