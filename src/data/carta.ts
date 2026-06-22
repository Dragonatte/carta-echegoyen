import type { SeccionCarta } from "../types/carta";

export const cartaPrincipal = [
{
  id: "nuestras-patatas",
  titulo: "Nuestras patatas",
  productos: [
    {
      id: "patatas-echegoyen",
      nombre: "Echegoyen",
      descripcion:
        "Gouda fundido, salsa Cheddar, salsa especial y virutas de bacon crispy.",
      precioCentimos: 700,
      alergenos: ["leche", "huevo", "mostaza"]
    },
    {
      id: "patatas-cheeseburger",
      nombre: "Cheeseburger",
      descripcion:
        "Carne especiada, salsa Burger, Cheddar ahumado fundido, mahonesa ahumada, dados de tomate y virutas de bacon crispy.",
      precioCentimos: 850,
      alergenos: ["leche", "huevo", "mostaza"]
    },
    {
      id: "patatas-steak-house",
      nombre: "Steak House",
      descripcion:
        "Nuestro pulled pork, Gouda fundido, mahonesa ahumada, BBQ Jack Daniel’s Tennessee, salsa Bourbon y jalapeños.",
      precioCentimos: 900,
      picante: 1,
      alergenos: ["leche", "huevo", "mostaza", "sulfitos"]
    },
    {
      id: "patatas-bravas",
      nombre: "Bravas",
      descripcion:
        "Patatas con nuestra salsa picante y alioli de ajo negro.",
      precioCentimos: 750,
      alergenos: ["huevo"]
    }
  ]
},

{
  id: "entrantes",
  titulo: "Entrantes",
  productos: [
    {
      id: "pollo-corn-flakes",
      nombre: "Pollo Corn Flakes",
      descripcion:
        "Pollo crujiente con cereales, acompañado de salsa miel y mostaza.",
      nota: "8 unidades",
      precioCentimos: 850,
      alergenos: ["gluten", "huevo", "mostaza"]
    }
  ]
},

{
  id: "hamburguesas",
  titulo: "Hamburguesas",
  productos: [
    {
      id: "hamburguesa-suculenta",
      nombre: "Suculenta",
      descripcion:
        "Pan Viena, 250 g de vaca rubia gallega, lechuga, tomate, Gouda, cebolla, pepinillo, bacon y huevo frito.",
      precioCentimos: 1200,
      alergenos: ["gluten", "leche", "huevo"]
    },
    {
      id: "hamburguesa-crispy",
      nombre: "Crispy",
      descripcion:
        "Brioche potato roll, pollo rebozado en Corn Flakes, salsa Thai, lechuga, tomate, pepinillo y cebolla caramelizada. Coronado con una bola de queso asturiano René Picot.",
      precioCentimos: 1200,
      alergenos: ["gluten", "leche", "huevo", "soja", "sesamo"]
    },
    {
      id: "hamburguesa-cojonuda",
      nombre: "Cojonuda",
      descripcion:
        "Brioche potato roll, 220 g de vaca rubia gallega ahumada, salsa Print, lechuga, cebolla, pepinillo y doble Cheddar ahumado.",
      precioCentimos: 1200,
      alergenos: ["gluten", "leche", "huevo", "mostaza"]
    },
    {
      id: "hamburguesa-cabrisima",
      nombre: "Cabrísima",
      descripcion:
        "Brioche negro, 250 g de vaca rubia gallega, lechuga, queso de cabra puro, salsa de cerveza negra y cebolla roja encurtida en habaneros.",
      precioCentimos: 1200,
      picante: 1,
      alergenos: ["gluten", "leche", "sulfitos"]
    },
    {
      id: "hamburguesa-locura",
      nombre: "Locura",
      descripcion:
        "Brioche negro, 220 g de vaca rubia gallega ahumada, crema Lotus, bacon, tomate, salsa ranchera y doble Gouda.",
      precioCentimos: 1200,
      alergenos: ["gluten", "leche", "huevo", "soja"]
    },
    {
      id: "hamburguesa-xtreme-cheddar",
      nombre: "Xtreme Cheddar",
      descripcion:
        "Brioche potato roll, 220 g de vaca rubia gallega ahumada, bacon, aros de Cheddar, cebolla caramelizada, mahonesa ahumada y muuucho Cheddar ahumado.",
      precioCentimos: 1350,
      alergenos: ["gluten", "leche", "huevo"]
    },
    {
      id: "hamburguesa-xtreme-bacon",
      nombre: "Xtreme Bacon",
      descripcion:
        "Brioche potato roll, 220 g de vaca rubia gallega ahumada, salsa Smokey Baconnaise, mermelada de bacon casera, doble Gouda, cebolla picada y muuucho bacon.",
      precioCentimos: 1350,
      alergenos: ["gluten", "leche", "huevo", "mostaza"]
    },
    {
      id: "hamburguesa-carnivora",
      nombre: "Carnívora",
      descripcion:
        "Brioche potato roll, 250 g de vaca rubia gallega, 250 g de pulled pork, mahonesa ahumada, Gouda, bacon, tomate, aros de cebolla rebozados y BBQ Jack Daniel’s Tennessee.",
      precioCentimos: 1500,
      alergenos: ["gluten", "leche", "huevo", "mostaza", "sulfitos"]
    },
    {
      id: "hamburguesa-trufavorita",
      nombre: "Trufavorita",
      descripcion:
        "Brioche potato roll, 250 g de vaca rubia gallega, setas Portobello, aceite crudo de trufa, queso Monterrey Jack fundido, salsa de trufa y trufa laminada.",
      precioCentimos: 1550,
      alergenos: ["gluten", "leche", "huevo"]
    }
  ]
},

{
  id: "pulled-pork",
  titulo: "Pulled Pork",
  productos: [
    {
      id: "pulled-pork-diablo",
      nombre: "Diablo",
      descripcion:
        "Brioche negro, pulled pork con salsa Búffalo, lechuga, tomate, cebolla y queso Monterrey Jack.",
      precioCentimos: 1050,
      picante: 1,
      alergenos: ["gluten", "leche", "huevo", "sulfitos"]
    },
    {
      id: "pulled-pork-black-jack",
      nombre: "Black Jack",
      descripcion:
        "Brioche negro, pulled pork en salsa, lechuga, tomate, cebolla y queso Monterrey Jack.",
      precioCentimos: 1050,
      alergenos: ["gluten", "leche", "huevo", "sulfitos"]
    }
  ]
},

{
  id: "pulled-chicken",
  titulo: "Pulled Chicken",
  productos: [
    {
      id: "pulled-chicken-original",
      descripcion:
        "Pan Viena, jugoso pollo desmechado con salsa de yogur casera, lechuga, Gouda, bacon y aros de cebolla rebozados.",
      precioCentimos: 1070,
      alergenos: ["gluten", "leche", "huevo"]
    }
  ]
},

{
  id: "cochinita-pibil",
  titulo: "Cochinita Pibil",
  productos: [
    {
      id: "cochinita-pibil-original",
      descripcion:
        "Pan Viena, carne de cerdo desmechada y macerada en achiote, lechuga, tomate, jalapeños, queso Monterrey Jack y cebolla roja encurtida con chiles habaneros.",
      precioCentimos: 1150,
      picante: 1,
      alergenos: ["gluten", "leche", "sulfitos"]
    }
  ]
},

{
  id: "hot-dogs",
  titulo: "Hot dogs",
  productos: [
    {
      id: "hot-dog-original",
      nombre: "Original",
      descripcion:
        "Ketchup, mostaza, cebolla picada, pepinillo y cebolla crujiente.",
      precioCentimos: 600,
      alergenos: ["gluten", "mostaza"]
    },
    {
      id: "hot-dog-bacon-cheese",
      nombre: "Bacon & Cheese",
      descripcion:
        "Mahonesa, Gouda, bacon, salsa Cheddar y virutas de bacon crispy.",
      precioCentimos: 690,
      alergenos: ["gluten", "leche", "huevo"]
    },
    {
      id: "hot-dog-weno-weno",
      nombre: "Weno, Weno",
      descripcion:
        "Salsa Bourbon, Gouda, carne especiada, salsa Cheddar y patatas paja.",
      precioCentimos: 790,
      alergenos: ["gluten", "leche", "sulfitos"]
    },
    {
      id: "hot-dog-tex-mex",
      nombre: "Tex-Mex",
      descripcion:
        "Cochinita pibil, bacon, Gouda, maíz, dados de tomate, mahonesa Sriracha y alioli de ajo negro.",
      precioCentimos: 900,
      picante: 1,
      alergenos: ["gluten", "leche", "huevo", "sulfitos"]
    },
    {
      id: "hot-dog-yankee",
      nombre: "Yankee",
      descripcion:
        "Pulled pork, Camembert fundido, pollo a la brasa, huevos de codorniz y salsa Thai.",
      precioCentimos: 900,
      alergenos: ["gluten", "leche", "huevo", "soja", "sesamo"]
    }
  ]
}
] as const satisfies readonly SeccionCarta[];