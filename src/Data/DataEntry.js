import {
  bandejaFoot,
  entryFoot,
  fishFoot,
  guarnicionesFoot,
  hamburguesaFoot,
  mofongoFoot,
  polloFoot,
  postreFoot,
  pureFoot,
  saledFoot,
  sandwichFoot,
  wrapFoot,
} from "../helper/const";
import { category } from "./Category";

export const footDataEntry = [
  //Entradas//
  {
    id: "1",
    name: "Croquetas de pollo",
    price: 125,
    description:
      "Pechuga de pollo, mozzarella, salsa bechamel y sazones naturales.",
    category: category[0].name,
    status: "Disponible",
    url: entryFoot.croquetasPollo,
  },

  {
    id: "2",
    name: "Rollitos",
    price: 75,
    description: "jamón, mozzarella",
    category: category[0].name,
    status: "Disponible",
    url: entryFoot.rollitosJamon,
  },

  {
    id: "3",
    name: "Plátano chips",
    price: "",
    description: "",
    category: category[0].name,
    status: "Disponible",
    url: entryFoot.platanoChip,
  },
  {
    id: "4",
    name: "Semillas",
    price: "",
    description: "",
    category: category[0].name,
    status: "Disponible",
    url: entryFoot.semillas,
  },

  //Ensaladas//
  {
    id: "5",
    name: "Ensalada de atún",
    price: 300,
    description: "Atún, lechuga, tomate, pepino, salsa cesar y cebolla.",
    category: category[1].name,
    status: "Disponible",
    url: saledFoot.ensaladaAtun,
  },

  {
    id: "6",
    name: "Ensalada cesar",
    price: 350,
    description:
      "Pechuga de pollo, lechuga, tomate, pepino, salsa cesar y cebolla.",
    category: category[1].name,
    status: "Disponible",
    url: saledFoot.ensaladaCesar,
  },

  {
    id: "7",
    name: "Ensalada de camarones",
    price: 325,
    description: "Camarones, lechuga, tomate, pepino, salsa cesar y cebolla.",
    category: category[1].name,
    status: "Disponible",
    url: saledFoot.ensaladaCamarones,
  },

  //Sandwich//

  {
    id: "8",
    name: "Sandwich de mozzarella",
    price: 100,
    description: "",
    category: category[2].name,
    status: "Disponible",
    url: sandwichFoot.sandwichMozzarella,
  },

  {
    id: "9",
    name: "Sandwich classico",
    price: 125,
    description: "Jamón, mozzarella, cebolla, tomate, lechuga y aderezo.",
    category: category[2].name,
    status: "Disponible",
    url: sandwichFoot.sandwichClasico,
  },

  {
    id: "10",
    name: "Sandwich de pollo",
    price: 250,
    description:
      "Pechuga de pollo, tomate, lechuga, salsa cesar, cebolla y aderezo.",
    category: category[2].name,
    status: "Disponible",
    url: sandwichFoot.sandwichPollo,
  },

  {
    id: "11",
    name: "Sándwich de atún",
    price: 250,
    description: "Atún, tomate, lechuga, salsa cesar, cebolla y aderezo.",
    category: category[2].name,
    status: "Disponible",
    url: sandwichFoot.sandwichAtun,
  },

  {
    id: "12",
    name: "Sándwich de pavo ",
    price: 175,
    description:
      "Jamón de pavo, tomate, lechuga, salsa cesar, cebolla y aderezo",
    category: category[2].name,
    status: "Disponible",
    url: sandwichFoot.sandwichPavo,
  },

  //Mofongo//

  {
    id: "13",
    name: "Mofongo de pollo",
    price: 350,
    description:
      "Pechuga de pollo, plátano, salsa bechamel, salsa de queso cheddar y sazones naturales.",
    category: category[3].name,
    status: "Disponible",
    url: mofongoFoot.mofongoPollo,
  },

  {
    id: "14",
    name: "Mofongo de chicharrón",
    price: 350,
    description:
      "Chicharrón, plátano, salsa bechamel, salsa de queso cheddar y sazones naturales.",
    category: category[3].name,
    status: "Disponible",
    url: mofongoFoot.mofongoChicharon,
  },

  {
    id: "15",
    name: "Mofongo de camarones",
    price: 375,
    description:
      "Camarones, plátano, salsa bechamel, salsa de queso cheddar y sazones naturales.",
    category: category[3].name,
    status: "Disponible",
    url: mofongoFoot.mofongoCamarones,
  },

  // Pescados (Mero) //

  {
    id: "16",
    name: "Mero a la plancha",
    price: 350,
    description: "Sazones naturales y pimientos.",
    category: category[4].name,
    status: "Disponible",
    url: fishFoot.meroPlacha,
  },

  {
    id: "17",
    name: "Mero al ajillo",
    price: 350,
    description: "Ajo, mantequilla, sazones naturales y pimientos.",
    category: category[4].name,
    status: "Disponible",
    url: fishFoot.meroAjillo,
  },

  {
    id: "18",
    name: "Mero a la crema",
    price: 350,
    description: "Salsa bechamel, sazones naturales y pimientos.",
    category: category[4].name,
    status: "Disponible",
    url: fishFoot.meroCrema,
  },

  {
    id: "19",
    name: "Mero al limón",
    price: 350,
    description: "Limón y sazones naturales.",
    category: category[4].name,
    status: "Disponible",
    url: fishFoot.meroLimon,
  },

  {
    id: "20",
    name: "Mero al vapor",
    price: 325,
    description: "Sazones naturales y pimientos.",
    category: category[4].name,
    status: "Disponible",
    url: fishFoot.meroVapor,
  },

  {
    id: "21",
    name: "Mero frito",
    price: 325,
    description: "Sazones naturales y pimientos.",
    category: category[4].name,
    status: "Disponible",
    url: fishFoot.meroFrito,
  },

  // Pescados (Mero) //

  {
    id: "22",
    name: "Tilapia a la plancha",
    price: 350,
    description: "Sazones naturales y pimientos.",
    category: category[4].name,
    status: "Disponible",
    url: fishFoot.tilapiaPlancha,
  },

  {
    id: "23",
    name: "Tilapia al ajillo",
    price: 350,
    description: "Ajo, mantequilla, sazones naturales y pimientos.",
    category: category[4].name,
    status: "Disponible",
    url: fishFoot.meroAjillo,
  },

  {
    id: "24",
    name: "Tilapia a la crema",
    price: 350,
    description: "Salsa bechamel, sazones naturales y pimientos.",
    category: category[4].name,
    status: "Disponible",
    url: fishFoot.tilapiaCrema,
  },

  {
    id: "25",
    name: "Tilapia al limón",
    price: 350,
    description: "Limón y sazones naturales.",
    category: category[4].name,
    status: "Disponible",
    url: fishFoot.tilapiaLimon,
  },

  {
    id: "26",
    name: "Tilapia al vapor",
    price: 325,
    description: "Sazones naturales y pimientos.",
    category: category[4].name,
    status: "Disponible",
    url: fishFoot.tilapiaVapor,
  },

  {
    id: "27",
    name: "Tilapia frita",
    price: 325,
    description: "Sazones naturales, empanizado y pimientos.",
    category: category[4].name,
    status: "Disponible",
    url: fishFoot.tilapiaLimon,
  },

  // Pescados (Salmon) //

  {
    id: "28",
    name: "Salmon a la plancha",
    price: 375,
    description: "Sazones naturales y pimientos.",
    category: category[4].name,
    status: "Disponible",
    url: fishFoot.salmonPlancha,
  },

  {
    id: "29",
    name: "Salmon al ajillo",
    price: 375,
    description: "Ajo, mantequilla, sazones naturales y pimientos.",
    category: category[4].name,
    status: "Disponible",
    url: fishFoot.salmonAjillo,
  },

  {
    id: "30",
    name: "Salmon a la crema",
    price: 375,
    description: "Salsa bechamel, sazones naturales y pimientos.",
    category: category[4].name,
    status: "Disponible",
    url: fishFoot.salmonAjillo,
  },

  {
    id: "31",
    name: "Salmon al vapor",
    price: 350,
    description: "Sazones naturales y pimientos.",
    category: category[4].name,
    status: "Disponible",
    url: fishFoot.salmonVapor,
  },

  //Pollo (Alitas)//

  {
    id: "32",
    name: "Litas de pollo picantes",
    price: 200,
    description: "Sazones naturales y salsa barbacoa.",
    category: category[5].name,
    status: "Disponible",
    url: polloFoot.alitasPicante,
  },
  {
    id: "33",
    name: "Alitas de pollo fritas",
    price: 200,
    description: "Empanizada y sazones naturales.",
    category: category[5].name,
    status: "Disponible",
    url: polloFoot.alitasFritas,
  },
  {
    id: "34",
    name: "Alitas de pollo a la crema",
    price: 250,
    description: "Salsa bechamel, sazones naturales y pimientos.",
    category: category[5].name,
    status: "Disponible",
    url: polloFoot.alitasCrema,
  },

  //Pollo (Pechurina)//

  {
    id: "35",
    name: "Pechurina",
    price: 250,
    description: "",
    category: category[5].name,
    status: "Disponible",
    url: polloFoot.pechurina,
  },

  {
    id: "36",
    name: "Pechuga a la plancha",
    price: 325,
    description: "Pimientos y sazones naturales.",
    category: category[5].name,
    status: "Disponible",
    url: polloFoot.pechugaPlancha,
  },

  {
    id: "37",
    name: "Pechuga a la crema",
    price: 350,
    description:
      "Salsa bechamel, pimientos, queso cheddar, mozzarella y sazones naturales.",
    category: category[5].name,
    status: "Disponible",
    url: polloFoot.pechugaCrema,
  },

  {
    id: "38",
    name: "Pechuga al ajillo",
    price: 325,
    description: "Pimientos, ajo, paprica y sazones naturales.",
    category: category[5].name,
    status: "Disponible",
    url: polloFoot.pechugaAjillo,
  },

  {
    id: "39",
    name: "Bandeja de Carne (Grande)",
    price: 1.11,
    description:
      "Pechuga de pollo, alita de pollo, carne salada, longaniza, papas fritas, plátanos fritos y pico de gallo.",
    category: category[6].name,
    status: "Disponible",
    url: bandejaFoot.bandeja,
  },

  {
    id: "40",
    name: "Bandeja de Carne (Pequeña)",
    price: 600,
    description:
      "Pechuga de pollo, alita de pollo, carne salada, longaniza, papas fritas, plátanos fritos y pico de gallo.",
    category: category[6].name,
    status: "Disponible",
    url: bandejaFoot.bandeja,
  },

  //Hamburguesas//
  {
    id: "41",
    name: "Hamburguesa de pollo",
    price: 175,
    description:
      "Pechuga de pollo, queso cheddar, aderezo, Cebolla, pepinillo, Tomate y lechuga.",
    category: category[7].name,
    status: "Disponible",
    url: hamburguesaFoot.pollo,
  },
  {
    id: "42",
    name: "Hamburguesa de res",
    price: 175,
    description:
      "Carne de res, queso cheddar, aderezo, Cebolla, pepinillo, Tomate y lechuga.",
    category: category[7].name,
    status: "Disponible",
    url: hamburguesaFoot.res,
  },
  {
    id: "43",
    name: "Hamburguesa de cerdo",
    price: 175,
    description:
      "Carne de cerdo, queso cheddar, aderezo, Cebolla, pepinillo, Tomate y lechuga.",
    category: category[7].name,
    status: "Disponible",
    url: hamburguesaFoot.cerdo,
  },

  {
    id: "44",
    name: "Hamburguesa mixta",
    price: 250,
    description:
      "Pechuga de pollo, carne de cerdo, carne de res, queso cheddar, aderezo, Cebolla, pepinillo, Tomate y lechuga.",
    category: category[7].name,
    status: "Disponible",
    url: hamburguesaFoot.mixta,
  },

  //Wraps//

  {
    id: "45",
    name: "Wrap Pollo",
    price: 250,
    description:
      "Pechuga de pollo, masa de burrito, queso cheddar, guacamole, lechuga, tomate y cebolla.",
    category: category[8].name,
    status: "Disponible",
    url: wrapFoot.pollo,
  },
  {
    id: "46",
    name: "Wrap Atún",
    price: 250,
    description:
      "Atún, masa de burrito, queso cheddar, guacamole, lechuga, tomate y cebolla.",
    category: category[8].name,
    status: "Disponible",
    url: wrapFoot.atun,
  },
  {
    id: "47",
    name: "Wrap Jamón y queso",
    price: 200,
    description:
      "Jamón, mozzarella, cheddar, masa de burrito, queso cheddar, guacamole, lechuga, tomate y cebolla.",
    category: category[8].name,
    status: "Disponible",
    url: wrapFoot.jamonQueso,
  },

  ////

  {
    id: "48",
    name: "Ensalada verde",
    price: "",
    description: "Lechuga tomate, pepino, aguacate y cebolla.",
    category: category[9].name,
    status: "Disponible",
    url: guarnicionesFoot.ensaladaverde,
  },

  {
    id: "49",
    name: "Ensaladas hervidas",
    price: "",
    description: "Brócoli, papa, tayota, vainita y zanahoria.",
    category: category[9].name,
    status: "Disponible",
    url: guarnicionesFoot.ensaladaHervidas,
  },

  {
    id: "50",
    name: "Ensalada con huevo",
    price: "",
    description: "Papa, tayota, vainita, zanahoria y huevo.",
    category: category[9].name,
    status: "Disponible",
    url: guarnicionesFoot.ensaladaHuevo,
  },

  {
    id: "51",
    name: "Papa frita",
    price: "",
    description: "",
    category: category[9].name,
    status: "Disponible",
    url: guarnicionesFoot.papaFritas,
  },

  {
    id: "52",
    name: "Plátano verde frito",
    price: "",
    description: "",
    category: category[9].name,
    status: "Disponible",
    url: guarnicionesFoot.fritoVerde,
  },

  {
    id: "53",
    name: "Plátano maduro frito",
    price: "",
    description: "",
    category: category[9].name,
    status: "Disponible",
    url: guarnicionesFoot.fritomaduro,
  },

  {
    id: "54",
    name: "Pan tostado",
    price: "",
    description: "",
    category: category[9].name,
    status: "Disponible",
    url: guarnicionesFoot.pan,
  },

  {
    id: "55",
    name: "Batata frita",
    price: "",
    description: "",
    category: category[9].name,
    status: "Disponible",
    url: guarnicionesFoot.batata,
  },

  //Pure//
  {
    id: "56",
    name: "Papa",
    price: "",
    description: "",
    category: category[10].name,
    status: "Disponible",
    url: pureFoot.papa,
  },

  {
    id: "57",
    name: "Batata",
    price: "",
    description: "",
    category: category[10].name,
    status: "Disponible",
    url: pureFoot.batata,
  },

  {
    id: "58",
    name: "Guineo",
    price: "",
    description: "",
    category: category[10].name,
    status: "Disponible",
    url: pureFoot.guineo,
  },

  {
    id: "59",
    name: "Yautía",
    price: "",
    description: "",
    category: category[10].name,
    status: "Disponible",
    url: pureFoot.guineo,
  },

  {
    id: "60",
    name: "Yautía",
    price: "",
    description: "",
    category: category[10].name,
    status: "Disponible",
    url: pureFoot.yautia,
  },

  {
    id: "61",
    name: "Plátano maduro",
    price: "",
    description: "",
    category: category[10].name,
    status: "Disponible",
    url: pureFoot.platanoMaduro,
  },

  {
    id: "62",
    name: "Plátano verde",
    price: "",
    description: "",
    category: category[10].name,
    status: "Disponible",
    url: pureFoot.platanoVerde,
  },

  //Postre//

  {
    id: "63",
    name: "Dulce de piña",
    price: 100,
    description: "",
    category: category[11].name,
    status: "Disponible",
    url: postreFoot.dulcePina,
  },

  {
    id: "64",
    name: "Dulce de Coco",
    price: 100,
    description: "",
    category: category[11].name,
    status: "Disponible",
    url: postreFoot.dulceCoco,
  },

  {
    id: "65",
    name: "Dulce de cereza",
    price: 100,
    description: "",
    category: category[11].name,
    status: "Disponible",
    url: postreFoot.dulceCereza,
  },

  {
    id: "66",
    name: "Gelatina",
    price: 25,
    description: "",
    category: category[11].name,
    status: "Disponible",
    url: postreFoot.gelatina,
  },

  {
    id: "67",
    name: "Yogur",
    price: 25,
    description: "",
    category: category[11].name,
    status: "Disponible",
    url: postreFoot.yogur,
  },
  
  
];
