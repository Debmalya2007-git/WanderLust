let sampleListings = [
  {
    title: "Himalayan Retreat in Manali",
    description:
      "A peaceful mountain stay surrounded by Himalayan scenery, pine forests and beautiful valley landscapes.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789029939/wanderlust_DEV/vcmm5spjmx8vlbgchxx3.jpg",
      filename: "listingimage",
    },
    price: 4200,
    location: "Manali, Himachal Pradesh, India",
    country: "India",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [77.1887, 32.2432],
    },
  },

  {
    title: "Mountain Escape in Shimla",
    description:
      "A comfortable hillside stay in the historic Himalayan city of Shimla, surrounded by forests and mountain views.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789029991/wanderlust_DEV/tzfolxkavihvuhgzvgq0.jpg",
      filename: "listingimage",
    },
    price: 3800,
    location: "Shimla, Himachal Pradesh, India",
    country: "India",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [77.1734, 31.1048],
    },
  },

  {
    title: "Mountain Stay in Dharamshala",
    description:
      "A scenic hillside accommodation with views toward the Dhauladhar mountains and easy access to the surrounding valleys.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789029991/wanderlust_DEV/tzfolxkavihvuhgzvgq0.jpg",
      filename: "listingimage",
    },
    price: 3600,
    location: "Dharamshala, Himachal Pradesh, India",
    country: "India",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [76.3234, 32.219],
    },
  },

  {
    title: "Alpine Retreat in Interlaken",
    description:
      "A beautiful mountain retreat surrounded by the Swiss Alps and the scenic lakes and valleys of the Interlaken region.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789030225/wanderlust_DEV/yxpysvoixqa5ybtd34mj.jpg",
      filename: "listingimage",
    },
    price: 12500,
    location: "Interlaken, Bern, Switzerland",
    country: "Switzerland",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [7.8632, 46.6863],
    },
  },

  {
    title: "Rocky Mountain Stay in Banff",
    description:
      "A mountain accommodation surrounded by the spectacular Canadian Rockies and the natural landscapes around Banff.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789030254/wanderlust_DEV/wdduuir4w6hzcectmkdw.jpg",
      filename: "listingimage",
    },
    price: 14500,
    location: "Banff, Alberta, Canada",
    country: "Canada",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [-115.5708, 51.1784],
    },
  },

  {
    title: "Alpine Chalet in Chamonix",
    description:
      "A mountain getaway surrounded by the spectacular peaks and valleys of the French Alps.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789030290/wanderlust_DEV/h5ot0rqal21vcgqvqwai.jpg",
      filename: "listingimage",
    },
    price: 11800,
    location: "Chamonix, Haute-Savoie, France",
    country: "France",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [6.8694, 45.9237],
    },
  },

  {
    title: "Dolomites Mountain Retreat",
    description:
      "A scenic alpine stay near the dramatic limestone peaks of the Italian Dolomites.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789030332/wanderlust_DEV/melp128swzee7fknpye8.jpg",
      filename: "listingimage",
    },
    price: 10500,
    location: "Cortina d'Ampezzo, Belluno, Italy",
    country: "Italy",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [12.1357, 46.5405],
    },
  },

  {
    title: "Mountain Escape in Queenstown",
    description:
      "A scenic stay surrounded by mountains, lakes and the dramatic landscapes of New Zealand's South Island.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789030362/wanderlust_DEV/t3ojtx4vcvpoznheqoro.jpg",
      filename: "listingimage",
    },
    price: 8200,
    location: "Queenstown, Otago, New Zealand",
    country: "New Zealand",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [168.6626, -45.0312],
    },
  },

  {
    title: "Northern Lights Stay in Tromsø",
    description:
      "A comfortable Arctic stay in Tromsø, surrounded by northern landscapes, fjords and winter scenery.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789030656/wanderlust_DEV/huddp56vbswrzqpcmg9r.jpg",
      filename: "listingimage",
    },
    price: 9500,
    location: "Tromsø, Troms og Finnmark, Norway",
    country: "Norway",
    category: "Arctic",
    geometry: {
      type: "Point",
      coordinates: [18.9553, 69.6492],
    },
  },

  {
    title: "Arctic Cabin in Rovaniemi",
    description:
      "A cozy Nordic stay surrounded by the forests and winter landscapes of Finnish Lapland.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789030716/wanderlust_DEV/hqtnt5zqxjyhwdlfjf5i.jpg",
      filename: "listingimage",
    },
    price: 8700,
    location: "Rovaniemi, Lapland, Finland",
    country: "Finland",
    category: "Arctic",
    geometry: {
      type: "Point",
      coordinates: [25.7294, 66.5039],
    },
  },

  {
    title: "Icelandic Winter Retreat",
    description:
      "A comfortable Nordic accommodation providing a base for exploring Iceland's volcanic and coastal landscapes.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789032155/wanderlust_DEV/ix00cy2x94j7zlckdwjv.jpg",
      filename: "listingimage",
    },
    price: 11000,
    location: "Reykjavik, Capital Region, Iceland",
    country: "Iceland",
    category: "Arctic",
    geometry: {
      type: "Point",
      coordinates: [-21.9426, 64.1466],
    },
  },

  {
    title: "Arctic Stay in Alta",
    description:
      "A peaceful northern stay surrounded by Arctic landscapes and the rugged scenery of Finnmark.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789032210/wanderlust_DEV/vjm4iimsspmrn586fyxc.jpg",
      filename: "listingimage",
    },
    price: 8900,
    location: "Alta, Finnmark, Norway",
    country: "Norway",
    category: "Arctic",
    geometry: {
      type: "Point",
      coordinates: [23.2716, 69.9689],
    },
  },

  {
    title: "Arctic Coastal Stay in Bodø",
    description:
      "A northern coastal accommodation with access to fjords, mountains and Arctic landscapes.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789032252/wanderlust_DEV/sisasnco7jatofayzrvn.jpg",
      filename: "listingimage",
    },
    price: 8400,
    location: "Bodø, Nordland, Norway",
    country: "Norway",
    category: "Arctic",
    geometry: {
      type: "Point",
      coordinates: [14.405, 67.2804],
    },
  },

  {
    title: "Northern Iceland Escape",
    description:
      "A quiet northern Icelandic stay surrounded by dramatic landscapes and open countryside.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789032296/wanderlust_DEV/oobf2cepzxpykj20x1n3.jpg",
      filename: "listingimage",
    },
    price: 9200,
    location: "Akureyri, Northeast Iceland, Iceland",
    country: "Iceland",
    category: "Arctic",
    geometry: {
      type: "Point",
      coordinates: [-18.1262, 65.6885],
    },
  },

  {
    title: "Arctic Adventure in Kiruna",
    description:
      "A winter retreat in Swedish Lapland surrounded by forests, snow-covered landscapes and Arctic wilderness.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789032344/wanderlust_DEV/utqltubabwuxwkdggpwp.jpg",
      filename: "listingimage",
    },
    price: 8600,
    location: "Kiruna, Norrbotten County, Sweden",
    country: "Sweden",
    category: "Arctic",
    geometry: {
      type: "Point",
      coordinates: [20.2253, 67.8558],
    },
  },

  {
    title: "Lofoten Coastal Retreat",
    description:
      "A scenic northern stay surrounded by dramatic mountains, fishing villages and Arctic coastal scenery.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789032407/wanderlust_DEV/b0pwueu348ysrlxtdrpm.jpg",
      filename: "listingimage",
    },
    price: 10200,
    location: "Svolvær, Nordland, Norway",
    country: "Norway",
    category: "Arctic",
    geometry: {
      type: "Point",
      coordinates: [14.5683, 68.2342],
    },
  },

  {
    title: "Tuscan Countryside Farm Stay",
    description:
      "A relaxing countryside stay surrounded by vineyards, farmland and rolling hills in Tuscany.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789032730/wanderlust_DEV/hztlbpme1fcr0yl2h5j4.jpg",
      filename: "listingimage",
    },
    price: 8800,
    location: "Siena, Tuscany, Italy",
    country: "Italy",
    category: "Farms",
    geometry: {
      type: "Point",
      coordinates: [11.3308, 43.3188],
    },
  },

  {
    title: "Chianti Countryside Retreat",
    description:
      "A peaceful rural getaway surrounded by vineyards and rolling Tuscan countryside.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789032779/wanderlust_DEV/z5aphheib3z6wqh4en2q.jpg",
      filename: "listingimage",
    },
    price: 8200,
    location: "Greve in Chianti, Tuscany, Italy",
    country: "Italy",
    category: "Farms",
    geometry: {
      type: "Point",
      coordinates: [11.3175, 43.5833],
    },
  },

  {
    title: "Cotswolds Farmhouse Stay",
    description:
      "A charming countryside accommodation surrounded by green fields and traditional English villages.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789032837/wanderlust_DEV/quiioqpjutyw0iqmzjbo.jpg",
      filename: "listingimage",
    },
    price: 10500,
    location: "Cirencester, Gloucestershire, United Kingdom",
    country: "United Kingdom",
    category: "Farms",
    geometry: {
      type: "Point",
      coordinates: [-1.9688, 51.719],
    },
  },

  {
    title: "Provence Countryside Retreat",
    description:
      "A peaceful rural stay surrounded by fields, vineyards and traditional Provençal landscapes.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789032887/wanderlust_DEV/khllmyyohljpl9ovkbvm.jpg",
      filename: "listingimage",
    },
    price: 8200,
    location: "Avignon, Provence-Alpes-Côte d'Azur, France",
    country: "France",
    category: "Farms",
    geometry: {
      type: "Point",
      coordinates: [4.8055, 43.9493],
    },
  },

  {
    title: "Swiss Alpine Farm Stay",
    description:
      "A peaceful farm-style accommodation surrounded by green meadows and the Swiss Alps.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789032947/wanderlust_DEV/pmcy6hvtumzgsc7znivz.jpg",
      filename: "listingimage",
    },
    price: 11200,
    location: "Grindelwald, Bern, Switzerland",
    country: "Switzerland",
    category: "Farms",
    geometry: {
      type: "Point",
      coordinates: [8.036, 46.6244],
    },
  },

  {
    title: "New Zealand Countryside Farm",
    description:
      "A spacious rural retreat surrounded by green farmland and scenic landscapes in the South Island.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789032986/wanderlust_DEV/mvinu4mrmd8bmreclmxz.jpg",
      filename: "listingimage",
    },
    price: 7200,
    location: "Matamata, Waikato, New Zealand",
    country: "New Zealand",
    category: "Farms",
    geometry: {
      type: "Point",
      coordinates: [175.77, -37.8106],
    },
  },

  {
    title: "Himalayan Farm Retreat",
    description:
      "A peaceful rural stay surrounded by hills, orchards and traditional Himalayan countryside.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789033028/wanderlust_DEV/zhm18uvfl1v5ohlfjqdz.jpg",
      filename: "listingimage",
    },
    price: 3500,
    location: "Nainital, Uttarakhand, India",
    country: "India",
    category: "Farms",
    geometry: {
      type: "Point",
      coordinates: [79.4636, 29.3919],
    },
  },

  {
    title: "English Countryside Farm Stay",
    description:
      "A quiet countryside retreat surrounded by farmland, green fields and traditional rural landscapes.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789033080/wanderlust_DEV/qwrry072mefmy6dlsie9.jpg",
      filename: "listingimage",
    },
    price: 7800,
    location: "York, North Yorkshire, United Kingdom",
    country: "United Kingdom",
    category: "Farms",
    geometry: {
      type: "Point",
      coordinates: [-1.0827, 53.959],
    },
  },

  {
    title: "Jaisalmer Desert Retreat",
    description:
      "A desert-inspired stay in the historic city of Jaisalmer, providing a convenient base for exploring the Thar Desert.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789033425/wanderlust_DEV/u5piylbz5oack9mk15we.jpg",
      filename: "listingimage",
    },
    price: 4500,
    location: "Jaisalmer, Rajasthan, India",
    country: "India",
    category: "Desert",
    geometry: {
      type: "Point",
      coordinates: [70.9167, 26.9157],
    },
  },

  {
    title: "Bikaner Desert Stay",
    description:
      "A comfortable stay in the historic desert city of Bikaner, surrounded by the landscapes of Rajasthan.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789033476/wanderlust_DEV/azuxv9qerb3e5v7fbvyl.jpg",
      filename: "listingimage",
    },
    price: 3800,
    location: "Bikaner, Rajasthan, India",
    country: "India",
    category: "Desert",
    geometry: {
      type: "Point",
      coordinates: [73.3119, 28.0229],
    },
  },

  {
    title: "Wadi Rum Desert Retreat",
    description:
      "A desert-style stay near the dramatic sandstone landscapes of southern Jordan.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789033508/wanderlust_DEV/gcms8ta3xyfyxyuhvaiv.jpg",
      filename: "listingimage",
    },
    price: 7200,
    location: "Aqaba, Aqaba Governorate, Jordan",
    country: "Jordan",
    category: "Desert",
    geometry: {
      type: "Point",
      coordinates: [35.0078, 29.5321],
    },
  },

  {
    title: "Sahara Gateway in Merzouga",
    description:
      "A comfortable desert stay in the village of Merzouga, close to the vast Sahara dune landscapes.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789033539/wanderlust_DEV/ebyhjrnx08axpsim893e.jpg",
      filename: "listingimage",
    },
    price: 5500,
    location: "Merzouga, Drâa-Tafilalet, Morocco",
    country: "Morocco",
    category: "Desert",
    geometry: {
      type: "Point",
      coordinates: [-4.0067, 31.0802],
    },
  },

  {
    title: "Dubai Desert Escape",
    description:
      "A desert-inspired accommodation surrounded by the sandy landscapes outside central Dubai.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789033585/wanderlust_DEV/xypvsefsqorjbxyqbdmp.jpg",
      filename: "listingimage",
    },
    price: 9000,
    location: "Dubai, United Arab Emirates",
    country: "United Arab Emirates",
    category: "Desert",
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048],
    },
  },

  {
    title: "Atacama Desert Stay",
    description:
      "A desert retreat surrounded by the extraordinary arid landscapes of northern Chile.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789033663/wanderlust_DEV/pfq0mimhpocdzfuth1ko.jpg",
      filename: "listingimage",
    },
    price: 7600,
    location: "San Pedro de Atacama, Antofagasta, Chile",
    country: "Chile",
    category: "Desert",
    geometry: {
      type: "Point",
      coordinates: [-68.2018, -22.9087],
    },
  },

  {
    title: "Namib Desert Gateway",
    description:
      "A desert accommodation providing access to the spectacular arid landscapes of Namibia.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789033699/wanderlust_DEV/btqu83fvdv1guphmccuo.jpg",
      filename: "listingimage",
    },
    price: 8500,
    location: "Swakopmund, Erongo, Namibia",
    country: "Namibia",
    category: "Desert",
    geometry: {
      type: "Point",
      coordinates: [14.5053, -22.6792],
    },
  },

  {
    title: "Sahara Stay in Douz",
    description:
      "A comfortable accommodation in southern Tunisia, surrounded by the arid landscapes of the Sahara.",
    image: {
      url: "https://res.cloudinary.com/mutguhjs/image/upload/v1789033737/wanderlust_DEV/srd5m1n48frsdwbfqarb.jpg",
      filename: "listingimage",
    },
    price: 4800,
    location: "Douz, Kebili Governorate, Tunisia",
    country: "Tunisia",
    category: "Desert",
    geometry: {
      type: "Point",
      coordinates: [9.0203, 33.4663],
    },
  },
];

module.exports = { data: sampleListings };
