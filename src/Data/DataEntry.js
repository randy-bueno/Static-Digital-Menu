import { entryFoot, mofongoFoot, saledFoot, sandwichFoot } from "../helper/const";
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
    description: "Jamón de pavo, tomate, lechuga, salsa cesar, cebolla y aderezo",
    category: category[2].name,
    status: "Disponible",
    url: sandwichFoot.sandwichPavo,
  },

  //Mofongo//

  {
    id: "13",
    name: "Mofongo de pollo",
    price: 350,
    description: "Pechuga de pollo, plátano, salsa bechamel, salsa de queso cheddar y sazones naturales.",
    category: category[3].name,
    status: "Disponible",
    url: mofongoFoot.mofongoPollo,
  },

  {
    id: "14",
    name: "Mofongo de chicharrón",
    price: 350,
    description: "Chicharrón, plátano, salsa bechamel, salsa de queso cheddar y sazones naturales.",
    category: category[3].name,
    status: "Disponible",
    url: mofongoFoot.mofongoChicharon,
  },

  {
    id: "15",
    name: "Mofongo de camarones",
    price: 375,
    description: "Camarones, plátano, salsa bechamel, salsa de queso cheddar y sazones naturales.",
    category: category[3].name,
    status: "Disponible",
    url: mofongoFoot.mofongoCamarones,
  },
];
