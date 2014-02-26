angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Brewery', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var breweries = [
    {
        "id": 8,
        "name": "Fischerbräu",
        "phone": null,
        "latitude": 48.2347856073445,
        "longitude": 16.3506978750229,
        "url": null,
        "distance": 6.72325386791447,
        "address": "Billrothstr. 17",
        "postal_code": "1190",
        "country": "Österreich",
        "city": "Wien"
    },
    {
        "id": 17,
        "name": "Kadlez Brauerei & Restaurant",
        "phone": null,
        "latitude": 48.2537129966412,
        "longitude": 16.3939190484212,
        "url": null,
        "distance": 7.42217497075957,
        "address": "Floridsdorfer Hauptstrasse 9",
        "postal_code": null,
        "country": "Österreich",
        "city": "Wien"
    },
    {
        "id": 20,
        "name": "Gösser Bräu",
        "phone": null,
        "latitude": 48.2123290787153,
        "longitude": 16.3138739172002,
        "url": null,
        "distance": 8.44292444478833,
        "address": "Thaliastraße 125a",
        "postal_code": "1160",
        "country": "Österreich",
        "city": "Wien"
    },
    {
        "id": 5,
        "name": "Ottakringer Brauerei",
        "phone": "+431491000",
        "latitude": 48.2124915659536,
        "longitude": 16.324610710144,
        "url": "http://www.ottakringer.at",
        "distance": 8.5029254317502,
        "address": "Ottakringer Platz 1",
        "postal_code": "1160",
        "country": "Österreich",
        "city": "Wien"
    },
    {
        "id": 10,
        "name": "Universitätsbräuhaus",
        "phone": "+4314091815",
        "latitude": 48.2161823997516,
        "longitude": 16.3534145248307,
        "url": "http://www.unibrau.at",
        "distance": 8.68040293984483,
        "address": "Campus Altes AKH, Hof 1, Alser Straße 4",
        "postal_code": "1090",
        "country": "Österreich",
        "city": "Wien"
    },
    {
        "id": 4,
        "name": "Café Einstein",
        "phone": "+43140526260",
        "latitude": 48.2122771100137,
        "longitude": 16.3588171056711,
        "url": "http://einstein.at",
        "distance": 9.23789631978852,
        "address": "Rathausplatz 4",
        "postal_code": "1010",
        "country": "Österreich",
        "city": "Wien"
    },
    {
        "id": 19,
        "name": "Bierbeisl Einstein",
        "phone": null,
        "latitude": 48.2122163917241,
        "longitude": 16.3591903182008,
        "url": null,
        "distance": 9.25534197604292,
        "address": "Wien 1, Rathausplatz 4",
        "postal_code": null,
        "country": "Österreich",
        "city": "Wien"
    },
    {
        "id": 14,
        "name": "Bieradies",
        "phone": "+4315356611",
        "latitude": 48.2115270070319,
        "longitude": 16.3698310356355,
        "url": null,
        "distance": 9.67227645898859,
        "address": "Judenplatz 1",
        "postal_code": "1010",
        "country": "Österreich",
        "city": "Wien"
    },
    {
        "id": 16,
        "name": "Plutzer Bräu",
        "phone": "+4315261215",
        "latitude": 48.202997,
        "longitude": 16.354687,
        "url": "http://www.plutzerbraeu.at",
        "distance": 10.0802963479453,
        "address": "Schrankgasse 2",
        "postal_code": "1070",
        "country": "Österreich",
        "city": "Wien"
    },
    {
        "id": 3,
        "name": "7 Stern Bräu",
        "phone": "+4315238697",
        "latitude": 48.2022290490464,
        "longitude": 16.3536773609435,
        "url": "http://www.7stern.at",
        "distance": 10.1353815216122,
        "address": "Siebensterngasse 19",
        "postal_code": "1070",
        "country": "Österreich",
        "city": "Wien"
    },
    {
        "id": 11,
        "name": "Restaurant Pürstner",
        "phone": null,
        "latitude": 48.2070005525722,
        "longitude": 16.3764631748199,
        "url": null,
        "distance": 10.3499792064637,
        "address": "Riemergasse 10",
        "postal_code": "1010",
        "country": "Österreich",
        "city": "Wien"
    },
    {
        "id": 12,
        "name": "Bastei Beisl",
        "phone": "+4315124319",
        "latitude": 48.206516,
        "longitude": 16.377824,
        "url": "http://www.basteibeisl.at",
        "distance": 10.4464906020535,
        "address": "Stubenbastei 10",
        "postal_code": "1010",
        "country": "Österreich",
        "city": "Wien"
    },
    {
        "id": 1,
        "name": "1516 The Brewing Company",
        "phone": "+4319611516",
        "latitude": 48.2034039057114,
        "longitude": 16.3730835914612,
        "url": "http://1516brewingcompany.com",
        "distance": 10.5843261063111,
        "address": "Schwarzenbergstraße 2",
        "postal_code": "1010",
        "country": "Österreich",
        "city": "Wien"
    },
    {
        "id": 7,
        "name": "Stadtbrauerei Schwarzenberg",
        "phone": "+4312084441",
        "latitude": 48.203331,
        "longitude": 16.374115,
        "url": "http://www.stadtbrauerei.at",
        "distance": 10.6265054188238,
        "address": "Schellinggasse 14",
        "postal_code": "1010",
        "country": "Österreich",
        "city": "Wien"
    },
    {
        "id": 13,
        "name": "Mariahilferbräu",
        "phone": "+4318974749",
        "latitude": 48.1938283006134,
        "longitude": 16.334502696991,
        "url": "http://www.mariahilferbrau.com",
        "distance": 10.6707575209926,
        "address": "Mariahilfer Straße 152",
        "postal_code": "1150",
        "country": "Österreich",
        "city": "Wien"
    },
    {
        "id": 9,
        "name": "Kolariks Luftburg",
        "phone": "+4317294999",
        "latitude": 48.2133351851003,
        "longitude": 16.4032208919525,
        "url": "http://www.kolarik.at",
        "distance": 10.9044447222987,
        "address": "Prater 128",
        "postal_code": "1020",
        "country": "Österreich",
        "city": "Wien"
    },
    {
        "id": 6,
        "name": "Wieden Bräu",
        "phone": "+4315860300",
        "latitude": 48.1948512890126,
        "longitude": 16.3664710467611,
        "url": "http://wieden-braeu.at",
        "distance": 11.2419806443539,
        "address": "Waaggasse 5",
        "postal_code": "1040",
        "country": "Österreich",
        "city": "Wien"
    },
    {
        "id": 2,
        "name": "Salm Bräu",
        "phone": "+4317995992",
        "latitude": 48.1967715,
        "longitude": 16.3810349333333,
        "url": "http://www.salmbraeu.com",
        "distance": 11.5107016526277,
        "address": "Rennweg 8",
        "postal_code": "1030",
        "country": "Österreich",
        "city": "Wien"
    },
    {
        "id": 18,
        "name": "Brauhaus Schwechat",
        "phone": "+4317068606",
        "latitude": 48.145405054091,
        "longitude": 16.46810753,
        "url": "http://www.brauhaus-schwechat.at",
        "distance": 19.8153468151912,
        "address": "Mautner Markhof Straße 13",
        "postal_code": "2320",
        "country": "Österreich",
        "city": "Schwechat"
    }
  ];

  return {
    all_with_geo: function() {
      return breweries;
    },
    get: function(breweryId) {
      brewery = null
      for(var l = breweries.length, i = 0; i < l; i++) {
        if (breweries[i].id === parseInt(breweryId)) {
          brewery = breweries[i]
        }
      }
      return brewery;
    }
  }
});
