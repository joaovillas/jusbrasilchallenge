var express = require("express");
var elasticsearch = require("../config/elasticsearch.js");
var bodyParser = require("body-parser");
var router = express.Router();
var cors = require("cors");
var extractor = require('../extractors/extractor');


router.use(cors());
router.use(bodyParser());
router.get("/search", (req, res) => {
  request = {};
  request.q = "";
  request.entity_type = "";

  request.q = req.query.q === undefined ? "" : req.query.q;
  elasticsearch
    .getSuggestions(request.q)
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

router.get("/", (req, res) => {
  let request = {};

  request.q = req.query.q === undefined ? "" : req.query.q;
  request.entity_type = req.query.entity_type === undefined ? "" : req.query.entity_type;

  console.log(request)

  elasticsearch
    .searchQuery(request.q , request.entity_type)
    .then(resp => res.json(resp))
    .catch(err => res.json(err));
});

module.exports = router;
