var cheerio = require("cheerio");
var request = require("request");

request.get(
  "https://www.businessinsider.com/the-100-most-popular-rock-bands-of-all-time-2018-9#12-linkin-park-89",
  (err, res, page) => {
    if (err && !res.statusCode == 200) {
      console.log(page);
    } else {
      var $ = cheerio.load(page);
      var array = [];
      $(".slide-layout div").each((i, element) => {
        obj = {};
        const cheerioElement = $(element);
        title = cheerioElement.find("h2").text();
        const regex = /[\d\.]/g;
        title = title.replace(regex, "");
        obj.title = title;
        obj.type = "Rock Band";
        array.push(obj);
      });

      arraydef = [];
      array.forEach((element, i) => {
        if (element.title) {
          arraydef.push(element);
        }
      });
    }
  }
);
