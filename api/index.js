var express = require("express");
var entitiesrouter = require("./routes/entitiesrouter");
var elasticsearch = require("./config/elasticsearch");
bodyParser = require("body-parser");

app = express();
app.use(bodyParser.json());
app.use("/entities", entitiesrouter);

app.listen(5000, () => {
  elasticsearch.indexExists().then(response => {
    if (response === false) {
      elasticsearch
        .initIndex()
        .then(() => {
          elasticsearch
            .initMapping()
            .then(response => console.log("Everything is OK"))
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
                .then(response => console.log("Everything is OK"))
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err))
        )
        .catch(err => console.log(err));
    }
  });
  console.log("Server running at port 5000");
});
