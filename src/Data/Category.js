import {
  batidosDrinks,
  bebidasDrinks,
  cafe,
  morirJugo,
  zumosDrinks,
} from "../helper/bebidas";
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
} from "../helper/frutas";

export const category = [
  {
    id: "0",
    name: "Entradas",
    portada: entryFoot.croquetasPollo,
  },
  {
    id: "1",
    name: "Ensaladas",
    portada: saledFoot.ensaladaAtun,
  },
  {
    id: "2",
    name: "Sandwichs",
    portada: sandwichFoot.sandwichPavo,
  },
  {
    id: "3",
    name: "Mofongos",
    portada: mofongoFoot.mofongoPollo,
  },

  {
    id: "4",
    name: "Pescados",
    portada: fishFoot.meroCrema,
  },

  {
    id: "5",
    name: "Pollos",
    portada: polloFoot.alitasPicante,
  },

  {
    id: "6",
    name: "Bandejas",
    portada: bandejaFoot.bandeja,
  },

  {
    id: "7",
    name: "Hamburguesas",
    portada: hamburguesaFoot.mixta,
  },

  {
    id: "8",
    name: "Wraps",
    portada: wrapFoot.pollo,
  },

  {
    id: "9",
    name: "Guarniciones",
    portada: guarnicionesFoot.papaFritas,
  },

  {
    id: "10",
    name: "Pure",
    portada: pureFoot.papa,
  },

  {
    id: "11",
    name: "Postres",
    portada: postreFoot.dulceCoco,
  },

  {
    id: "12",
    name: "Bebidas",
    portada: bebidasDrinks.refrescos,
  },

  {
    id: "13",
    name: "Zumos",
    portada: zumosDrinks.zumosChinola,
  },

  {
    id: "14",
    name: "Batidos",
    portada: batidosDrinks.baditosGuineo,
  },

  {
    id: "15",
    name: "Café",
    portada: cafe.cafeCapuchino,
  },

  {
    id: "16",
    name: "Morir soñando",
    portada: morirJugo.naranja,
  },
];
