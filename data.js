var cities = [
  {
    "name": "Würzburg",
    "url": "wuerzburg",
    "latLong": [49.79, 9.95],
    "collectionPoints": [
      {
        "name": "HERMINE e. V. Lagerhalle",
        "organization": "HERMINE e. V.",
        "address": {
          "street": "Ohmstraße",
          "house": "1",
          "postalCode": "97076"
        },
        "latLong": [49.7974, 9.9708],
        "openingHours": [
          { "day": "Sonntag", "times": ["12:00-18:00"] }
        ]
      },
      {
        "name": "KHG",
        "organization": "HERMINE e. V.",
        "address": {
          "street": "Hofstallstr.",
          "house": "4",
          "postalCode": "97070"
        },
        "latLong": [49.7951, 9.9405],
        "openingHours": [
          { "day": "Montag", "times": ["09:00-12:00", "14:00-16:00"] },
          { "day": "Dienstag", "times": ["09:00-12:00", "14:00-16:00"] },
          { "day": "Mittwoch", "times": ["09:00-12:00", "14:00-16:00"] }
        ]
      },
      {
        "latLong": [49.8008, 9.9717],
        "name": "RockInn Boulderhalle",
        "organization": "HERMINE e. V.",
        "openingHours": [
          { "day": "Montag", "times": ["12:00-23:00"] },
          { "day": "Dienstag", "times": ["09:00-23:00"] },
          { "day": "Mittwoch", "times": ["12:00-23:00"] },
          { "day": "Donnerstag", "times": ["09:00-23:00"] },
          { "day": "Freitag", "times": ["12:00-23:00"] },
          { "day": "Samstag-Sonntag", "times": ["09:00-23:00"] }
        ]
      },
      {
        "name": "KiTa Abenteuerland Rottenbauer",
        "organization": "HERMINE e. V.",
        "address": { "street": "Unterer Kirchplatz", "house": "2a", "postalCode": "97084" },
        "latLong": [49.72033, 9.96718],
        "openingHours": [{ "day": "Montag-Donnerstag", "times": ["14:00-16:00"] }]
      },
      {
        "name": "Cairo",
        "organization": "HERMINE",
        "address": { "street": "Fred-Joseph-Platz", "house": "3", "postalCode": "97082" },
        "latLong": [49.78963, 9.92469],
        "openingHours": [
          { "day": "Montag-Donnerstag", "times": ["15:00-21:00"] }
        ]
      }
    ]
  },
  {
    "name": "Dortmund",
    "url": "dortmund",
    "latLong": [51.53, 7.46],
    "collectionPoints": [
      {
        "name": "Grenzenlose Wärme e. V.",
        "organization": "Grenzenlose Wärme e. V.",
        "address": {
          "street": "Kanalstrasse 25, Halle 51",
          "house": "25",
          "postalCode": "44147"
        },
        "latLong": [51.529124, 7.440845],
        "openingHours": [
          { "day": "Donnerstag", "times": ["17:00-20:00"] },
          { "day": "Auf Anfrage", "times": [] }
        ]
      }
    ]
  },
  {
    "name": "Biesenthal",
    "url": "biesenthal",
    "latLong": [52.76, 13.64],
    "collectionPoints": [
      {
        "name": "Wir packen's an e. V.",
        "organization": "Wir packen's an e. V.",
        "address": {
          "street": "Bahnhofstr.",
          "house": "81 a",
          "postalCode": "16359"
        },
        "latLong": [52.754285, 13.674776],
        "openingHours": [
          { "day": "Montag-Sonntag", "times": ["0-24"] },
        ]
      }
    ]
  },
  {
    "name": "Leipzig",
    "url": "leipzig",
    "latLong": [51.3310, 12.3730],
    "collectionPoints": [
      {
        "name": "Cafe Später Vogel",
        "organization": "Project Elpida",
        "address": {
          "street": "Kolonnadenstraße",
          "house": "5/7",
          "postalCode": "04109"
        },
        "latLong": [51.337984, 12.367241],
        "openingHours": [
          { "day": "Montag-Freitag", "times": ["10:00-20:00"] },
          { "day": "Samstag-Sonntag", "times": ["09:00-20:00"] }
        ]
      },
      {
        "name": "Lixer",
        "organization": "Project Elpida",
        "address": {
          "street": "Pörstener Str.",
          "house": "9",
          "postalCode": "04229"
        },
        "latLong": [51.312987, 12.323896],
        "openingHours": [
          { "day": "Samstag-Sonntag", "times": ["11:00-19:00"] }
        ]
      },
      {
        "name": "Cafe Drei der Münze",
        "organization": "Project Elpida",
        "address": {
          "street": "Münzgasse",
          "house": "28",
          "postalCode": "04107"
        },
        "latLong": [51.331687, 12.372144],
        "openingHours": [
          { "day": "Dienstag", "times": ["11:00-18:00"] },
          { "day": "Mittwoch-Freitag", "times": ["11:00-22:00"] },
          { "day": "Samstag", "times": ["12:00-00:00"] }
        ]
      },
      {
        "name": "Patina 45",
        "organization": "Project Elpida",
        "address": { "street": "Rabet", "house": "15", "postalCode": "04315" },
        "latLong": [51.34340, 12.40256],
        "openingHours": [
          { "day": "Mo-Do", "times": ["16:00-22:00"] },
          { "day": "Fr", "times": ["16:00-00:00"] },
          { "day": "Sa-So", "times": ["14:00-22:00"] }
        ]
      },
      {
        "name": "Simini",
        "organization": "Project Elpida",
        "address": { "street": "Eisenbahnstraße", "house": "109", "postalCode": "04315" },
        "latLong": [51.34540, 12.41130],
        "openingHours": [
          { "day": "Sonntag-Dienstag", "times": ["12:00-19:00"] },
          { "day": "Donnerstag-Samstag", "times": ["12:00-00:00"] }
        ]
      },
      {
        "name": "Vleischerei",
        "organization": "Project Elpida",
        "address": { "street": "Eisenbahnstraße", "house": "128", "postalCode": "04315" },
        "latLong": [51.34505, 12.41243],
        "openingHours": [
          { "day": "Dienstag-Freitag", "times": ["17:00-22:00"] },
          { "day": "Samstag-Sonntag", "times": ["12:00-22:00"] }
        ]
      }
    ]
  },
  {
    "name": "Berlin",
    "url": "berlin",
    "latLong": [52.52, 13.405],
    "collectionPoints": [
      {
        "name": "SG GM/BTSV 1850 Heimspiele Oktober / November",
        "organization": "Project Elpida",
        "address": {
          "street": "Siemensstraße",
          "house": "20 A",
          "postalCode": "10551"
        },
        "latLong": [52.533355, 13.338357],
        "openingHours": [
          { "day": "4.10.", "times": [] },
          { "day": "8.11.", "times": [] },
          { "day": "28.11.", "times": [] }
        ]
      },
      {
        "name": "Kuckucksei",
        "organization": "Project Elpida",
        "address": { "street": "Barbarossastraße", "house": "5a", "postalCode": "10781" },
        "latLong": [52.49211, 13.35233],
        "openingHours": [{ "day": "Mo-So", "times": ["17:00-03:00"] }]
      },
      {
        "name": "EWA Frauenzentrum",
        "organization": "Project Elpida",
        "address": { "street": "Prenzlauer Allee", "house": "6", "postalCode": "10405" },
        "latLong": [52.52942, 13.41848],
        "openingHours": [{ "day": "Mo-Do", "times": ["11:00-19:00"] }]
      },
      {
        "name": "AWO Begegnungszentrum",
        "organization": "Project Elpida",
        "address": { "street": "Adalbertstraße", "house": "23a", "postalCode": "10997" },
        "latLong": [52.50379, 13.42148],
        "openingHours": [{ "day": "Mo-Fr", "times": ["09:00-15:00"] }]
      },
      {
        "name": "Bibliothek Tiergarten-Süd",
        "organization": "Project Elpida",
        "address": { "street": "Lützowstraße", "house": "27", "postalCode": "10785" },
        "latLong": [52.50375, 13.36342],
        "openingHours": [{ "day": "Mo-Fr", "times": ["12:30-18:00"] }]
      }
    ]
  },
  {
    "name": "Vaihingen an der Enz",
    "url": "vaihingen-enz",
    "latLong": [48.933, 8.957],
    "collectionPoints": [
      {
        "name": "AK Asyl Vaihingen an der Enz",
        "organization": "AK Asyl Vaihingen/E",
        "address": {
          "street": "Friedrichstr.",
          "house": "3",
          "postalCode": "71665"
        },
        "latLong": [48.93451, 8.957622],
        "openingHours": [
          { "day": "Freitag 10.10.", "times": ["14:00-18:00"] },
          { "day": "Samstag 11.10.", "times": ["11:00-17:00"] }
        ]
      }
    ]
  },
  {
    "name": "Köln",
    "url": "koeln",
    "latLong": [50.9381, 6.96],
    "collectionPoints": [
      {
        "name": "Cologne Cares e. V.",
        "organization": "Cologne Cares e. V.",
        "address": {
          "street": "Neusser Platz",
          "house": "8",
          "postalCode": "50670"
        },
        "latLong": [50.954564, 6.95797],
        "openingHours": [
          { "day": "Sonntag 26.10.", "times": ["13:00-16:00"] }
        ]
      }
    ]
  },
  {
    "name": "Herzogenaurach",
    "url": "herzogenaurach",
    "latLong": [49.567, 10.885],
    "collectionPoints": [
      {
        "name": "Herzo Packt an e.V. Scheune",
        "organization": "Herzo Packt an e.V.",
        "address": { "street": "Eichelmühlgasse", "house": "24", "postalCode": "91074" },
        "latLong": [49.566, 10.89332],
        "openingHours": []
      }
    ]
  }
];


var organizations = [
  {
    "name": "HERMINE e. V.",
    "cities": ["Würzburg"],
    "supportedOrganisations": ["RWC", "SV", "CA", "JNRC"],
  },
  {
    "name": "Grenzenlose Wärme e. V.",
    "cities": ["Dortmund"],
    "supportedOrganisations": ["RWC", "MRS"],
  },
  {
    "name": "Wir packen's an e. V.",
    "cities": ["Biesenthal"],
    "supportedOrganisations": ["RWC", "SV", "JA", "CA", "NNK", "MRS"],
  },
  {
    "name": "Project Elpida",
    "cities": ["Leipzig", "Berlin"],
    "supportedOrganisations": ["SV"]
  },
  {
    "name": "AK Asyl Vaihingen",
    "cities": ["Vaihingen an der Enz"],
    "supportedOrganisations": ["SV"]
  },
  {
    "name": "Cologne Cares e.V.",
    "cities": ["Köln"],
    "supportedOrganisations": ["SV"]
  },
]

var supportedOrganisations = [
  {
    "id": "RWC",
    "name": "Refugee Woman Center",
    "country": "Frankreich",
    "region": "Calais"
  },
  {
    "id": "SV",
    "name": "Samos Volunteers",
    "country": "Griechenland",
    "region": "Samos"
  },
  {
    "id": "CA",
    "name": "Collective Aids",
    "country": "Serbien, Bosnien und Lesvos",
  },
  {
    "id": "JNRC",
    "name": "Joel Nafuma Refugee Center",
    "country": "Italien",
    "region": "Rom"
  },
  {
    "id": "NNK",
    "name": "No Name Kitchen",
    "country": "Serbien und Bosnien"
  },
  {
    "id": "MRS",
    "name": "Mobile Refugee Support",
    "country": "Frankreich",
    "region": "Dunkerque"
  },
  {
    "id": "JA",
    "name": "Just Action",
    "country": "Griechenland",
    "region": "Samos"
  },
  {
    "id": "CESTR",
    "name": "Offene Arme CESTR",
    "country": "Griechenland",
    "region": "Chios"
  }
]
