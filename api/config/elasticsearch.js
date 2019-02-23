var elasticsearch = require("elasticsearch");

var elasticClient = new elasticsearch.Client({
  host: "http://192.168.99.100:9200",
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
        input: document.title.split(" ")
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
        title: {
          type: "completion",
          analyzer: "simple",
          search_analyzer: "simple"
        },
        type: {
          type: "completion",
          analyzer: "simple",
          search_analyzer: "simple"
        },
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

function getSuggestions(text) {
  return elasticClient.search({
    index: indexName,
    type: "document",
    body: {
      suggest: {
        titleSuggester: {
          prefix: text,
          completion: {
            field: "title",
            fuzzy: {
              fuzziness: "auto"
            }
          }
        },
        typeSuggester: {
          prefix: text,
          completion: {
            field: "type",
            fuzzy: {
              fuzziness: "auto"
            }
          }
        }
      }
    }
  });
}
exports.getSuggestions = getSuggestions;

function bulkAddDocument() {
  return elasticClient.bulk({
    index: indexName,
    type: "document",
    body: [],
    refresh: "true"
  });
}
exports.bulkAddDocument = bulkAddDocument;

