var express = require("express");
var elasticsearch = require("../config/elasticsearch.js");
var axios = require("axios");
var bodyParser = require("body-parser");
var router = express.Router();
var cors = require("cors");

router.use(cors());
router.use(bodyParser());
router.get("/", (req, res) => {

  elasticsearch
    .getSuggestions(req.query.q)
    .then(resp => res.json(resp))
    .catch(err => res.json(err));
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
