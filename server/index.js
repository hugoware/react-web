import express from 'express';
import requests from './requests/index.js';

// port number
const PORT = 3001;

// create the main server
const app = express();
app.use(express.json());

// wire up all requests
for (const request of requests) {
  request(app);
}

// start the server
app.listen(PORT, () => {
  console.log(`[server] listening on ${PORT}`);
});