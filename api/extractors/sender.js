var Axios = require("axios");

var obj = [
  {
    title: "PROSURE",
    type: "Burks"
  },
  {
    title: "ZIALACTIC",
    type: "Katina"
  },
  {
    title: "LOCAZONE",
    type: "Brianna"
  },
  {
    title: "EXTRAWEAR",
    type: "Cheri"
  },
  {
    title: "QUINTITY",
    type: "Morgan"
  },
  {
    title: "MIRACULA",
    type: "Gill"
  },
  {
    title: "OTHERWAY",
    type: "Patton"
  },
  {
    title: "EXODOC",
    type: "Kelly"
  },
  {
    title: "BOSTONIC",
    type: "Catalina"
  },
  {
    title: "ARCTIQ",
    type: "Ollie"
  },
  {
    title: "CORMORAN",
    type: "Lawanda"
  },
  {
    title: "PROFLEX",
    type: "Vazquez"
  },
  {
    title: "ZOXY",
    type: "Pansy"
  },
  {
    title: "NSPIRE",
    type: "Smith"
  },
  {
    title: "FURNIGEER",
    type: "Staci"
  },
  {
    title: "KIGGLE",
    type: "Goldie"
  },
  {
    title: "OZEAN",
    type: "Naomi"
  },
  {
    title: "XERONK",
    type: "Penelope"
  },
  {
    title: "ENTOGROK",
    type: "Ingram"
  },
  {
    title: "ORBIN",
    type: "Mcdowell"
  },
  {
    title: "PORTICA",
    type: "Pam"
  },
  {
    title: "DIGIFAD",
    type: "Megan"
  },
  {
    title: "GEOLOGIX",
    type: "Bishop"
  },
  {
    title: "ENTHAZE",
    type: "Russo"
  },
  {
    title: "COMBOGEN",
    type: "Rosario"
  },
  {
    title: "SULTRAX",
    type: "Houston"
  },
  {
    title: "ISONUS",
    type: "Lydia"
  },
  {
    title: "NETILITY",
    type: "Klein"
  },
  {
    title: "EXOSTREAM",
    type: "Helen"
  },
  {
    title: "TETAK",
    type: "Welch"
  },
  {
    title: "MEDESIGN",
    type: "Angelita"
  },
  {
    title: "GREEKER",
    type: "Sweet"
  },
  {
    title: "ZORROMOP",
    type: "Graham"
  },
  {
    title: "INSURON",
    type: "Roxie"
  },
  {
    title: "AUSTEX",
    type: "Erna"
  },
  {
    title: "CIPROMOX",
    type: "Betty"
  },
  {
    title: "ONTAGENE",
    type: "Annette"
  },
  {
    title: "CONFERIA",
    type: "Marcella"
  },
  {
    title: "ZILLATIDE",
    type: "Dixie"
  },
  {
    title: "QUILITY",
    type: "Larson"
  },
  {
    title: "VICON",
    type: "Earlene"
  },
  {
    title: "BIOSPAN",
    type: "Rosie"
  },
  {
    title: "GADTRON",
    type: "Marcie"
  },
  {
    title: "PYRAMAX",
    type: "Maura"
  },
  {
    title: "XEREX",
    type: "Hendrix"
  },
  {
    title: "LYRIA",
    type: "Gale"
  },
  {
    title: "ARCHITAX",
    type: "Charmaine"
  },
  {
    title: "SNIPS",
    type: "Fitzpatrick"
  },
  {
    title: "OVERFORK",
    type: "Villarreal"
  },
  {
    title: "COMTRACT",
    type: "Mcfadden"
  },
  {
    title: "ANIMALIA",
    type: "Janelle"
  },
  {
    title: "BICOL",
    type: "Hardin"
  },
  {
    title: "DIGIGEN",
    type: "Ruthie"
  },
  {
    title: "DEEPENDS",
    type: "Earnestine"
  },
  {
    title: "ERSUM",
    type: "Conner"
  },
  {
    title: "EXOBLUE",
    type: "Kelsey"
  },
  {
    title: "ZEDALIS",
    type: "Lenora"
  },
  {
    title: "BUZZOPIA",
    type: "Myra"
  },
  {
    title: "RECOGNIA",
    type: "Langley"
  },
  {
    title: "ROTODYNE",
    type: "Lea"
  },
  {
    title: "ZOLAVO",
    type: "Mosley"
  },
  {
    title: "ORGANICA",
    type: "Burgess"
  }
];

var i = 0;
setInterval(() => {
  Axios.post("http://localhost:5000/entities", obj[i++])
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
}, 1000);
