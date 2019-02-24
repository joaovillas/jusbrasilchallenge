var express = require("express");
var entitiesrouter = require("./routes/entitiesrouter");
var elasticsearch = require("./config/elasticsearch");
var bodyParser = require("body-parser");
var cors = require("cors");
var extractor = require("./extractors/extractor");
var axios = require("axios");

app = express();
app.use(bodyParser.json());
app.use("/entities", entitiesrouter);
app.use(cors());

app.listen(5000, () => {
  elasticsearch.indexExists().then(response => {
    if (response === false) {
      elasticsearch
        .initIndex()
        .then(() => {
          elasticsearch
            .initMapping()
            .then(response => {})
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    } else {
      elasticsearch
        .deleteIndex()
        .then(
          elasticsearch
            .initIndex()
            .then(() => {
              elasticsearch
                .initMapping()
                .then(response => {})
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err))
        )
        .catch(err => console.log(err));
    }
  });
  console.log("Server running at port 5000");
});
