
export const apiUrl = 'https://heavy-lansford.gcp-us-central1.cubecloudapp.dev/cubejs-api/v1';
export const cubeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjEwMDAwMDAwMDAsImV4cCI6NTAwMDAwMDAwMH0.OHZOpOBVKr-sCwn8sbZ5UFsqI3uCs6e4omT7P6WVMFw';

export const model={
    
    dimensions: [
      'Artworks.yearAcquired',
    ],
    measures: [
      'Artworks.count'
    ],
    filters: [ {
      member: 'Artworks.yearAcquired',
      operator: 'set'
    } ],
    order: {
      'Artworks.yearAcquired': 'asc'
    }
  
}