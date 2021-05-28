const http = require('http');

const url = 'http://localhost:3000/?content=show(%22llolfrfrf%22)';
const options = {
  method: 'GET',
};

const request = http.request(url, options, (response) => {
  console.log(response);
});

request.on('error', (e) => {
  console.error(e);
});
request.end();