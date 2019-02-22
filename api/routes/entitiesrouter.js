var express = require("express");
var elasticsearch = require("../config/elasticsearch.js");
var axios = require("axios");
var bodyParser = require("body-parser");
var router = express.Router();

const ELASTIC_SEARCH_URL = "http://localhost:9200/entities/documents";

router.use(bodyParser());
router.get("/", (req, res) => {
  elasticsearch
    .getSuggestions("A")
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
});

router.post("/", (req, res) => {
  let request = {};
  request = req.body;
  elasticsearch
    .addDocument(request)
    .then(resp => res.json(resp))
    .catch(err => res.json(err));
});

module.exports = router;
