var elasticsearch = require("elasticsearch");

var elasticClient = new elasticsearch.Client({
  host: "localhost:9200",
  log: "info"
});

var indexName = "entities";

/**
 * Delete an existing index
 */
function deleteIndex() {
  return elasticClient.indices.delete({
    index: indexName
  });
}
exports.deleteIndex = deleteIndex;

/**
 * create the index
 */
function initIndex() {
  return elasticClient.indices.create({
    index: indexName
  });
}
exports.initIndex = initIndex;

/**
 * check if the index exists
 */
function indexExists() {
  return elasticClient.indices.exists({
    index: indexName
  });
}
exports.indexExists = indexExists;

function addDocument(document) {
  return elasticClient.index({
    index: indexName,
    type: "document",
    body: {
      title: document.title,
      type: document.type,
      suggest: {
        input: document.title.split(" "),
        // output: document.title
      }
    }
  });
}
exports.addDocument = addDocument;

function initMapping() {
  return elasticClient.indices.putMapping({
    index: indexName,
    type: "document",
    body: {
      properties: {
        title: { type: "text" },
        type: { type: "text" },
        suggest: {
          type: "completion",
          analyzer: "simple",
          search_analyzer: "simple"
        }
      }
    }
  });
}
exports.initMapping = initMapping;

function getSuggestions(input) {
  return elasticClient.search({
    index: indexName,
    type: "document",
    body: {
      docsuggest: {
        text: input,
        completion: {
          field: "suggest",
          fuzzy: true
        }
      }
    }
  });
}
exports.getSuggestions = getSuggestions;
