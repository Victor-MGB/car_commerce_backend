const newArrival = [
  {
    id: 1,
    model: "2022",
    name: "Rolls Royce",
    productDetails:
      "Rolls-Royce is a renowned British luxury automobile and aerospace manufacturer.",
    image: "/NewArrivalCarImage/RoyceRollsPhantom.jpg",

    images: [
      "/NewArrivalCarImage/Phantom.jpg",
      "/NewArrivalCarImage/Phantom2.jpg",
      "/NewArrivalCarImage/RoyceRollsPhantom.jpg",
    ],

    rating: "3000",
    percentage_rating: "30%",
    price: 250000,
    year: 2022,
    mileage: 30000,
    quantity: "15",
    availability: true,
  },

  {
    id: 2,
    model: "G_guard",
    name: "G-Class",
    productDetails:
      "The G-Class is often associated with exclusivity and a high price point, attracting customers who seek a combination of luxury and ruggedness.",
    image: "/NewArrivalCarImage/gClass.jpg",

    images: [
      "/NewArrivalCarImage/gClass1.jpg",
      "/NewArrivalCarImage/gClass.jpg",
      "/NewArrivalCarImage/gClass2.jpg",
    ],
    rating: "3100",
    percentage_rating: "31%",
    price: 500000,
    year: 2023,
    quantity: "35",
    availability: true,
  },

  {
    id: 3,
    model: "Future_mobility",
    name: "Future Mobility",
    productDetails:
      "Cutting-edge technology, such as large infotainment screens.",
    image: "/NewArrivalCarImage/FutureMobility.jpg",

    images: [
      "/NewArrivalCarImage/FutureMobility.jpg",
      "/NewArrivalCarImage/FutureMobility.jpg",
      "/NewArrivalCarImage/FutureMobility.jpg",
    ],
    rating: "3100",
    percentage_rating: "31%",
    price: 100000000,
    year: 2030,
    quantity: "25",
    availability: false,
  },

  {
    id: 4,
    model: "2022 Model",
    name: "G Class",
    productDetails:
      "Modern G-Class vehicles are equipped with advanced safety features.",
    image: "/NewArrivalCarImage/GreyClass.jpg",

    images: [
      "/NewArrivalCarImage/GreyClass.jpg",
      "/NewArrivalCarImage/GreyClass.jpg",
      "/NewArrivalCarImage/GreyClass.jpg",
    ],
    rating: "1100",
    percentage_rating: "11%",
    price: 474900,
    year: 2022,
    quantity: "15",
    availability: true,
  },

  {
    id: 5,
    model: "2022 Model",
    name: "Mercedes-AMG",
    productDetails: "highly equipped variant of the mercedes amg gt",
    image: "/NewArrivalCarImage/Amg.jpg",

    images: [
      "/NewArrivalCarImage/amg1.jpg",
      "/NewArrivalCarImage/Amg.jpg",
      "/NewArrivalCarImage/amg1.jpg",
    ],
    rating: "1000",
    percentage_rating: "10%",
    price: 150000,
    year: 2022,
    quantity: "55",
    availability: true,
  },

  {
    id: 6,
    model: "2021 Model",
    name: "Mercedes Benz SL",
    productDetails: "Mercedes Benz sl class is a good value",
    image: "/NewArrivalCarImage/sl.jpg",

    images: [
      "/NewArrivalCarImage/sl2.jpg",
      "/NewArrivalCarImage/sl.jpg",
      "/NewArrivalCarImage/sl1.jpg",
    ],
    rating: "1000",
    percentage_rating: "10%",
    price: 120900,
    year: 2022,
    quantity: "45",
    availability: true,
  },

  {
    id: 7,
    model: "2013 Model",
    name: "4Matic",
    productDetails: "All wheel is always in action with fixed torque split",
    image: "/NewArrivalCarImage/4matic.jpg",

    images: [
      "/NewArrivalCarImage/4matic2.jpg",
      "/NewArrivalCarImage/4matic.jpg",
      "/NewArrivalCarImage/4matic1.jpg",
      "/NewArrivalCarImage/4matic3.jpg",
    ],
    rating: "2000",
    percentage_rating: "20%",
    price: 87000,
    quantity: "65",
    availability: true,
  },

  {
    id: 8,
    model: "2022 Model",
    name: "Mercedes-AMG",
    productDetails: "highly equipped variant of the mercedes amg gt",
    image: "/NewArrivalCarImage/amg1.jpg",

    images: [
      "/NewArrivalCarImage/amg1.jpg",
      "/NewArrivalCarImage/Amg.jpg",
      "/NewArrivalCarImage/amg1.jpg",
    ],
    rating: "15000",
    percentage_rating: "15%",
    price: 450000,
    year: 2022,
    quantity: "65",
    availability: true,
  },

  {
    id: 9,
    model: "2024 Model",
    name: "Mercedes Benz Sl63",
    productDetails: "Handcrafted Amg 4.0L v8 biturbo.Engine",
    image: "/NewArrivalCarImage/sl63.jpg",

    images: [
      "/NewArrivalCarImage/sl631.jpg",
      "/NewArrivalCarImage/sl63.jpg",
      "/NewArrivalCarImage/sl631.jpg",
    ],
    rating: "67000",
    percentage_rating: "67%",
    price: 240000,
    year: 2024,
    quantity: "35",
    availability: true,
  },

  {
    id: 10,
    model: "2023 Model",
    name: "Mercedes-AMGSL",
    productDetails: "Highs a renew sense of styles exceeding quick.",
    image: "/NewArrivalCarImage/Amgsl.jpg",

    images: [
      "/NewArrivalCarImage/Amgsl.jpg",
      "/NewArrivalCarImage/Amgsl1.jpg",
      "/NewArrivalCarImage/Amgsl2.jpg",
    ],
    rating: "47000",
    percentage_rating: "47%",
    price: 135000,
    year: 2023,
    quantity: "25",
    availability: true,
  },

  {
    id: 11,
    model: "2022 Model",
    name: "Mercedes Benz GLS",
    productDetails: "Gls delivers everything you need from mecerdes benz",
    image: "/NewArrivalCarImage/Gls.jpg",
    images: [
      "/NewArrivalCarImage/Gls.jpg",
      "/NewArrivalCarImage/gls1.jpg",
      "/NewArrivalCarImage/Gls.jpg",
    ],
    rating: "47000",
    percentage_rating: "47%",
    price: 187000,
    year: 2022,
    quantity: "35",
    availability: true,
  },

  {
    id: 12,
    model: "2022 Model",
    name: "Mercedes E Class",
    productDetails:
      "The E class is a 5 seater 6 cylinder car and has lenght of 5075mm.",
    image: "/NewArrivalCarImage/Eclass.jpg",

    images: [
      "/NewArrivalCarImage/Eclass1.jpg",
      "/NewArrivalCarImage/Eclass.jpg",
      "/NewArrivalCarImage/Eclass1.jpg",
    ],
    rating: "47000",
    percentage_rating: "47%",
    price: 100000,
    year: 2022,
    quantity: "35",
    availability: true,
  },

  {
    id: 13,
    model: "2023 Model",
    name: "Audi sportsback q3",
    productDetails: "petroleum engine displacement is 1984cc.",
    image: "/NewArrivalCarImage/sportback.jpg",
    images: [
      "/NewArrivalCarImage/sportback1.jpg",
      "/NewArrivalCarImage/sportback.jpg",
      "/NewArrivalCarImage/sportback1.jpg",
    ],
    rating: "3000",
    percentage_rating: "30%",
    price: 300000,
    year: 2024,
    quantity: "35",
    availability: true,
  }, 

  {
    id: 14,
    model: "2023 Model",
    name: "Audi sportsback q5",
    productDetails: "petroleum engine displacement is 1984cc.",
    image: "/NewArrivalCarImage/sportbackq5.jpg",

    images: [
      "/NewArrivalCarImage/sportbackq6.jpg",
      "/NewArrivalCarImage/sportbackq7.jpg",
      "/NewArrivalCarImage/sportbackq8.jpg",
    ],
    rating: "3000",
    percentage_rating: "30%",
    price: 300000,
    year: 2024,
    quantity: "35",
    availability: true,
  },

  {
    id: 15,
    model: "2023 Model",
    name: "Audi q8etron",
    productDetails: "Electric power engine displacement is 1984cc.",
    image: "/NewArrivalCarImage/q8etron.jpg",

    images: [
      "/NewArrivalCarImage/sportbackq6.jpg",
      "/NewArrivalCarImage/q8etron.jpg",
      "/NewArrivalCarImage/sportbackq8.jpg",
    ],
    rating: "4000",
    percentage_rating: "40%",
    price: 350000,
    year: 2023,
    quantity: "45",
    availability: true,
  },

  {
    id: 16,
    model: "2023 Model",
    name: "Audi q8",
    productDetails: "Buckle up  for exhilarating performance",
    image: "/NewArrivalCarImage/q8.jpg",

    images: [
      "/NewArrivalCarImage/q81.jpg",
      "/NewArrivalCarImage/q82.jpg",
      "/NewArrivalCarImage/q83.jpg",
      "/NewArrivalCarImage/q84.jpg",
    ],
    rating: "4000",
    percentage_rating: "40%",
    price: 200000,
    year: 2023,
    quantity: "45",
    availability: true,
  },

  {
    id: 17,
    model: "2023 Model",
    name: "Audi Rsq3",
    productDetails:
      "racing heart that gets heart racing engine displacement is 1984cc.",
    image: "/NewArrivalCarImage/rsq8.jpg",

    images: [
      "/NewArrivalCarImage/clubsport.jpg",
      "/NewArrivalCarImage/rsq8.jpg",
      "/NewArrivalCarImage/rsq81.jpg",
    ],
    rating: "4000",
    percentage_rating: "40%",
    price: 300000,
    year: 2023,
    quantity: "35",
    availability: true,
  },

  {
    id: 18,
    model: "2023 Model",
    name: "Audi R8",
    productDetails: "The ski patrol got a serious upgrade",
    image: "/NewArrivalCarImage/ar8.jpg",

    images: [
      "/NewArrivalCarImage/ar81.jpg",
      "/NewArrivalCarImage/ar8.jpg",
      "/NewArrivalCarImage/ar82.jpg",
    ],
    rating: "3000",
    percentage_rating: "30%",
    price: 200000,
    year: 2023,
    quantity: "65",
    availability: true,
  },

  {
    id: 19,
    model: "2023 Model",
    name: "Audi Rs7",
    productDetails: "petroleum engine displacement is 1984cc.",
    image: "/NewArrivalCarImage/rs7.jpg",

    images: [
      "/NewArrivalCarImage/rs7.jpg",
      "/NewArrivalCarImage/rs7.jpg",
      "/NewArrivalCarImage/rs7.jpg",
    ],
    rating: "5000",
    percentage_rating: "50%",
    price: 250000,
    year: 2023,
    quantity: "45",
    availability: true,
  },

  {
    id: 20,
    model: "2023 Model",
    name: "Audi R8",
    productDetails: "The ski patrol got a serious upgrade",
    image: "/NewArrivalCarImage/ar81.jpg",

    images: [
      "/NewArrivalCarImage/ar4.jpg",
      "/NewArrivalCarImage/ar81.jpg",
      "/NewArrivalCarImage/ar3.jpg",
    ],
    rating: "3000",
    percentage_rating: "30%",
    price: 200000,
    year: 2023,
    quantity: "65",
    availability: true,
  },

  {
    id: 21,
    model: "2023 Model",
    name: "Audi R8",
    productDetails: "The ski patrol got a serious upgrade",
    image: "/NewArrivalCarImage/ar81.jpg",

    images: [
      "/NewArrivalCarImage/ar5.jpg",
      "/NewArrivalCarImage/ar6.jpg",
      "/NewArrivalCarImage/ar7.jpg",
    ],
    rating: "3000",
    percentage_rating: "30%",
    price: 200000,
    year: 2023,
    quantity: "65",
    availability: true,
  },

  {
    id: 22,
    model: "2023 Model",
    name: "AudiTT clubsport ",
    productDetails: "A turbocharge 5 cylinder savage under the hood",
    image: "/NewArrivalCarImage/ar81.jpg",

    images: [
      "/NewArrivalCarImage/ar81.jpg",
      "/NewArrivalCarImage/ar82.jpg",
      "/NewArrivalCarImage/ar4.jpg",
    ],
    rating: "3000",
    percentage_rating: "30%",
    price: 200000,
    year: 2023,
    quantity: "65",
    availability: true,
  },

  {
    id: 23,
    model: "2023 Model",
    name: "Audi R8",
    productDetails: "The ski patrol got a serious upgrade",
    image: "/NewArrivalCarImage/ar81.jpg",

    images: [
      "/NewArrivalCarImage/ar3.jpg",
      "/NewArrivalCarImage/ar4.jpg",
      "/NewArrivalCarImage/ar5.jpg",
    ],
    rating: "3000",
    percentage_rating: "30%",
    price: 200000,
    year: 2023,
    quantity: "65",
    availability: true,
  },

  {
    id: 24,
    model: "2023 Model",
    name: "Rolls Royce Ghost",
    productDetails:
      "it pristine surface awaits the transformative touch of color",
    image: "/NewArrivalCarImage/ghost.jpg",

    images: [
      "/NewArrivalCarImage/badge1.jpg",
      "/NewArrivalCarImage/ghost.jpg",
      "/NewArrivalCarImage/badge1.jpg",
    ],
    rating: "3000",
    percentage_rating: "30%",
    price: 250000,
    year: 2021,
    quantity: "65",
    availability: true,
  },

  {
    id: 25,
    model: "2023 Model",
    name: " Rolls Royce Ghost",
    productDetails:
      "it pristine surface awaits the transformative touch of color",
    image: "/NewArrivalCarImage/ghost1.jpg",

    images: [
      "/NewArrivalCarImage/ghost1.jpg",
      "/NewArrivalCarImage/ghost2.jpg",
      "/NewArrivalCarImage/ghost1.jpg",
    ],
    rating: "3000",
    percentage_rating: "30%",
    price: 250000,
    year: 2021,
    quantity: "65",
    availability: true,
  },

  {
    id: 26,
    model: "2023 Model",
    name: "Roll Royce Blue badge",
    productDetails: "as one of the powerful models in rolls royce history",
    image: "/NewArrivalCarImage/badge.jpg",

    images: [
      "/NewArrivalCarImage/badge.jpg",
      "/NewArrivalCarImage/badge5.jpg",
      "/NewArrivalCarImage/badge6.jpg",
    ],
    rating: "2000",
    percentage_rating: "20%",
    price: 270000,
    year: 2021,
    quantity: "35",
    availability: true,
  },

  {
    id: 27,
    model: "2023 Model",
    name: "Roll Royce White badge",
    productDetails: "as one of the powerful models in rolls royce history",
    image: "/NewArrivalCarImage/badge1.jpg",

    images: [
      "/NewArrivalCarImage/badge1.jpg",
      "/NewArrivalCarImage/badge1.jpg",
      "/NewArrivalCarImage/badge1.jpg",
    ],
    rating: "2000",
    percentage_rating: "20%",
    price: 270000,
    year: 2021,
    quantity: "35",
    availability: true,
  },

  {
    id: 27,
    model: "2023 Model",
    name: "Roll Royce Orange badge",
    productDetails: "as one of the powerful models in rolls royce history",
    image: "/NewArrivalCarImage/badge2.jpg",

    images: [
      "/NewArrivalCarImage/badge2.jpg",
      "/NewArrivalCarImage/badge2.jpg",
      "/NewArrivalCarImage/badge2.jpg",
    ],
    rating: "2000",
    percentage_rating: "20%",
    price: 270000,
    year: 2021,
    quantity: "35",
    availability: true,
  },

  {
    id: 28,
    model: "2023 Model",
    name: "Roll Royce Black badge",
    productDetails: "as one of the powerful models in rolls royce history",
    image: "/NewArrivalCarImage/badge4.jpg",

    images: [
      "/NewArrivalCarImage/badge4.jpg",
      "/NewArrivalCarImage/badge41.jpg",
      "/NewArrivalCarImage/badge4.jpg",
    ],
    rating: "2000",
    percentage_rating: "20%",
    price: 270000,
    year: 2021,
    quantity: "35",
    availability: true,
  },

  {
    id: 29,
    model: "2023 Model",
    name: "Roll Royce Blue badge",
    productDetails:
      "as one of the powerful models in rolls royce history with open roof",
    image: "/NewArrivalCarImage/badge5.jpg",

    images: [
      "/NewArrivalCarImage/badge5.jpg",
      "/NewArrivalCarImage/badge5.jpg",
      "/NewArrivalCarImage/badge5.jpg",
    ],
    rating: "3000",
    percentage_rating: "30%",
    price: 270000,
    year: 2021,
    quantity: "55",
    availability: true,
  },

  {
    id: 30,
    model: "2023 Model",
    name: "Roll Royce Darkgreen badge",
    productDetails: "as one of the powerful models in rolls royce history",
    image: "/NewArrivalCarImage/badge6.jpg",

    images: [
      "/NewArrivalCarImage/badge6.jpg",
      "/NewArrivalCarImage/badge6.jpg",
      "/NewArrivalCarImage/badge6.jpg",
    ],
    rating: "2000",
    percentage_rating: "20%",
    price: 270000,
    year: 2021,
    quantity: "35",
    availability: true,
  },

  {
    id: 31,
    model: "2023 Model",
    name: "Roll Royce Black badge",
    productDetails: "as one of the powerful models in rolls royce history",
    image: "/NewArrivalCarImage/badge7.jpg",

    images: [
      "/NewArrivalCarImage/badge7.jpg",
      "/NewArrivalCarImage/badge7.jpg",
      "/NewArrivalCarImage/badge7.jpg",
    ],
    rating: "3000",
    percentage_rating: "30%",
    price: 270000,
    year: 2021,
    quantity: "35",
    availability: true,
  },
];

module.exports = newArrival;