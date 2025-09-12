var cities = [
  {
    "name": "Würzburg",
    "url": "wuerzburg",
    "latLong": [49.79, 9.95],
    "collectionPoints": [
      {
        "postalCode": "97076",
        "street": "Ohmstraße",
        "house": "1",
        "latLong": [49.7974, 9.9708],
        "openingHours": {
            "Sunday": ["12:00-18:00"]
        },
        "duration": "01.10 - 30.11",
        "organization": "HERMINE e. V.",
        "name": "HERMINE e. V. Lagerhalle"
      },
      {
        "latLong": [49.8008, 9.9717],
        "name": "RockInn Boulderhalle"
      },
      {
        "latLong": [49.7951, 9.9405],
        "name": "KHG"
      }
    ]
  },
  {
    "name": "Dortmund",
    "url": "dortmund",
    "latLong": [51.51, 7.46],
    "collectionPoints": [
      {
        "latLong": [51.529124, 7.440845],
        "name": "Grenzenlose Wärme e. V."
      }
    ]
  },
  {
    "name": "Biesenthal",
    "url": "biesenthal",
    "latLong": [52.76, 13.64],
    "collectionPoints": [
      {
        "latLong": [52.754285, 13.674776],
        "name": "Wir packen's an e.V."
      }
    ]
  }
]


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
