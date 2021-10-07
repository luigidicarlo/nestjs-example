const axios = require('axios');

axios
  .post(
    'http://localhost:9977/auth/login',
    {
      password: 'test1234',
      email: 'luish@conviertemas.com',
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  .then(res => {
    console.log(res.data);
  });
