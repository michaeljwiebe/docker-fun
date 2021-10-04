const express = require("express");
const bodyParser = require('body-parser');
const url = require('url');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const nodeServer = express();
const port = process.env.PORT || "8080"
const whoisApi = 'https://www.whoisxmlapi.com/whoisserver/WhoisService?&outputFormat=JSON';

nodeServer.use(bodyParser.urlencoded({ extended: false }));
nodeServer.use(bodyParser.json());

nodeServer.get("/", cors(), async (req, res) => {
  if (!req.query.domain) {
    res.status(400).send({message: 'The request did not include a domain'})
  } else {
    axios.get(`${whoisApi}&apiKey=${process.env.API_KEY}&domainName=${req.query.domain}`)
    .then(response => {
      res.json(response.data);
    })
    .catch(err => {
      console.error(err)
      res.status(502);
    });
  }
});

nodeServer.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
