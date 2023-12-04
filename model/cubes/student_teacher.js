cube(`student_teacher`, {
  sql_table: `public.student_teacher`,
  
  data_source: `default`,
  
  joins: {
    student: {
      sql: `${CUBE}.student_id = ${student}.id`,
      relationship: `many_to_one`
    },
    
    teacher: {
      sql: `${CUBE}.teacher_id = ${teacher}.id`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
