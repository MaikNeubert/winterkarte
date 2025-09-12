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
          { "day": "Sunday", "times": ["12:00-18:00"] }
        ]
      },
      {
        "name": "KHG",
        "organization": "HERMINE e.V.",
        "address": {
          "street": "Hofstallstr.",
          "house": "4",
          "postalCode": "97070"
        },
        "latLong": [49.7951, 9.9405],
        "openingHours": [
          { "day": "Monday", "times": ["09:00-12:00", "14:00-16:00"] },
          { "day": "Tuesday", "times": ["09:00-12:00", "14:00-16:00"] },
          { "day": "Wednesday", "times": ["09:00-12:00", "14:00-16:00"] }
        ]
      },
      {
        "latLong": [49.8008, 9.9717],
        "name": "RockInn Boulderhalle"
      }
    ]
  },
  {
    "name": "Dortmund",
    "url": "dortmund",
    "latLong": [51.51, 7.46],
    "collectionPoints": [
      {
        "name": "Grenzenlose Wärme e.V.",
        "organization": "Grenzenlose Wärme",
        "address": {
          "street": "Kanalstrasse 25, Halle 51",
          "house": "25",
          "postalCode": "44147"
        },
        "latLong": [51.529124, 7.440845],
        "openingHours": [
          { "day": "Thursday", "times": ["17:00-20:00"] },
          { "day": "On Request", "times": [] }
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
        "name": "Wir packen's an e.V.",
        "organization": "Wir packen's an",
        "address": {
          "street": "Bahnhofstr.",
          "house": "81 a",
          "postalCode": "16359"
        },
        "latLong": [52.754285, 13.674776],
        "openingHours": [
          { "day": "Wednesday", "times": [] },
          { "day": "Friday", "times": [] },
          { "day": "Saturday", "times": [] },
          { "day": "On Request", "times": [] }
        ]
      }
    ]
  }
];




var organizations = [
    {
        "name": "HERMINE e. V.",
        "cities": ["Würzburg"],
        "supportedOrganisations": ["RWC", "SV", ""],
    },
    {
        "name": "Grenzenlose Wärme e. V.",
        "cities": ["Dortmund"],
        "supportedOrganisations": ["RWC", "SV"],
    },
        {
        "name": "Wir packen's an e.V.",
        "cities": ["Biesenthal"],
        "supportedOrganisations": ["RWC", "SV"],
    },
]
