const http = require('http');

const url = 'http://localhost:3000/create_module?content=show(%22llolfrfrf%22)';
const options = {
  method: 'POST',
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }};

const request = http.request(url, options, (response) => {
  console.log(response);
});

request.on('error', (e) => {
  console.error(e);
});

request.write(JSON.stringify({
  "name": "lol",
  "lll" : 0,
  "url" : "lmao",
  "dependencies" : ["lol"]
}));
request.end();