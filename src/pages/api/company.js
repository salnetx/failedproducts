// pages/api/data.js

const data = [
    {
      name: 'Alphabet',
      route: '/example-1',
      image: 'https://via.placeholder.com/150', // Replace with your image URL
    },
    {
      name: 'Meta',
      route: '/example-2',
      image: 'https://via.placeholder.com/150', // Replace with your image URL
    },
    {
        name: 'Apple',
        route: '/example-3',
        image: 'https://via.placeholder.com/150', // Replace with your image URL
      },
      {
        name: 'Amazon',
        route: '/example-4',
        image: 'https://via.placeholder.com/150', // Replace with your image URL
      },
    // Add more data objects as needed
  ];
  
  export default function handler(req, res) {
    // Assuming this would be your data fetching logic from a database or elsewhere
    res.status(200).json(data);
  }
  