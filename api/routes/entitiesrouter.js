var express = require("express");
var elasticsearch = require("../config/elasticsearch.js");
var axios = require("axios");
var bodyParser = require("body-parser");
var router = express.Router();

router.use(bodyParser());
router.get("/:input", (req, res) => {
  elasticsearch
    .getSuggestions(req.params.input)
    .then(resp => res.json(resp))
    .catch(err => res.json(err));
});

router.post("/", (req, res) => {
  let request = {};
  request = req.body;
  console.log(JSON.stringify(request));
  elasticsearch
    .addDocument(request)
    .then(resp => res.json(resp))
    .catch(err => res.json(err));
});

module.exports = router;
