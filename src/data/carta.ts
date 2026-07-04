import type { Alergeno, SeccionCarta } from "../types/carta";

/*
 * Fuente: carta actual + documento "Actualizacion carta echegoyen".
 *
 * IMPORTANTE:
 * - `alergenos` indica ingredientes/alérgenos confirmados por las fichas recibidas.
 * - `puedeContener` recoge trazas declaradas por el proveedor.
 * - `alergenosPendientesDeConfirmar` obliga a revisar la ficha técnica antes de
 *   mostrar la declaración como definitiva en la web.
 */

const TRAZAS_PAN_VIENA = [
  "cacahuetes",
  "mostaza",
  "apio",
  "huevo",
  "crustaceos",
  "pescado",
  "soja",
  "frutos_cascara",
  "sesamo",
  "sulfitos",
  "altramuces",
  "moluscos"
] as const satisfies readonly Alergeno[];

const TRAZAS_REBOZADOS = ["crustaceos", "soja", "mostaza"] as const satisfies readonly Alergeno[];

export const leyendaPicante = [
  { nivel: 1, etiqueta: "Picante", guindillas: 1 },
  { nivel: 2, etiqueta: "Muy picante", guindillas: 2 },
  {
    nivel: 3,
    etiqueta: "Carolina Reaper",
    guindillas: 3,
    aviso: "Prohibido a menores de 18 años."
  }
] as const;

export const cartaPrincipal = [
  {
    id: "nuestras-patatas",
    titulo: "Nuestras patatas",
    productos: [
      {
        id: "patatas-echegoyen",
        nombre: "Echegoyen",
        descripcion:
          "Patatas gajo, Gouda fundido, salsa Cheddar, salsa especial y virutas de bacon crispy.",
        precioCentimos: 700,
        alergenos: ["gluten", "leche", "huevo", "mostaza"],
        puedeContener: ["soja"],
        alergenosPendientesDeConfirmar: true,
        nota: "Pendiente de confirmar la ficha de la salsa especial de la casa."
      },
      {
        id: "patatas-cheeseburger",
        nombre: "Cheeseburger",
        descripcion:
          "Patatas gajo, carne especiada, salsa Burger, Cheddar ahumado fundido, mahonesa ahumada, dados de tomate y virutas de bacon crispy.",
        precioCentimos: 850,
        alergenos: ["gluten", "leche", "huevo", "mostaza", "soja", "apio", "sulfitos"]
      },
      {
        id: "patatas-steak-house",
        nombre: "Steak House",
        descripcion:
          "Patatas gajo, pulled pork, Gouda fundido, mahonesa ahumada, BBQ Jack Daniel’s Tennessee, salsa Bourbon y jalapeños.",
        precioCentimos: 900,
        picante: 1,
        alergenos: ["gluten", "leche", "huevo", "mostaza", "soja", "pescado", "apio", "sulfitos"],
        alergenosPendientesDeConfirmar: true,
        nota: "Pendiente de confirmar la ficha de la salsa BBQ."
      },
      {
        id: "patatas-bravas",
        nombre: "Bravas",
        descripcion: "Patatas gajo con nuestra salsa picante y alioli de ajo negro.",
        precioCentimos: 750,
        picante: 1,
        alergenos: ["gluten", "huevo"]
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
        descripcion: "Pollo crujiente con cereales, acompañado de salsa de miel y mostaza.",
        nota: "8 unidades.",
        precioCentimos: 850,
        alergenos: ["gluten", "huevo", "mostaza"]
      }
    ]
  },
  {
    id: "tortillas",
    titulo: "Tortillas",
    subtitulo: "Solo por encargo con al menos 1 día de antelación · Desde 12 €.",
    productos: [
      {
        id: "tortilla-monterey-trufa",
        nombre: "Monterey Jack y trufa",
        descripcion: "Queso Monterey Jack, salsa de trufa y trufa laminada.",
        precioCentimos: 1200,
        precioDesde: true,
        alergenos: ["huevo", "leche"]
      },
      {
        id: "tortilla-oreja",
        nombre: "Oreja",
        descripcion: "Oreja en salsa picante o sin salsa.",
        precioCentimos: 1200,
        precioDesde: true,
        alergenos: ["huevo"],
        alergenosPendientesDeConfirmar: true,
        nota: "Pendiente de confirmar la ficha de la salsa picante."
      },
      {
        id: "tortilla-pollo-yogur-piperrada",
        nombre: "Pollo especiado, yogur y piperrada",
        descripcion: "Pollo especiado con salsa de yogur y piperrada.",
        precioCentimos: 1200,
        precioDesde: true,
        alergenos: ["huevo"]
      },
      {
        id: "tortilla-cheddar-bacon",
        nombre: "Cheddar y bacon",
        descripcion: "Queso Cheddar, bacon y salsa Cheddar.",
        precioCentimos: 1200,
        precioDesde: true,
        alergenos: ["huevo", "leche"]
      },
      {
        id: "tortilla-carrilleras",
        nombre: "Carrilleras",
        descripcion: "Carrilleras en salsa.",
        precioCentimos: 1200,
        precioDesde: true,
        alergenos: ["huevo"],
        alergenosPendientesDeConfirmar: true,
        nota: "Pendiente de confirmar la ficha de la salsa."
      },
      {
        id: "tortilla-langostinos-ajillo",
        nombre: "Langostinos al ajillo",
        descripcion: "Langostinos al ajillo.",
        precioCentimos: 1200,
        precioDesde: true,
        alergenos: ["huevo", "crustaceos"]
      },
      {
        id: "tortilla-pollo-carbonara",
        nombre: "Pollo a la carbonara",
        descripcion: "Pollo a la carbonara.",
        precioCentimos: 1200,
        precioDesde: true,
        alergenos: ["huevo"],
        alergenosPendientesDeConfirmar: true,
        nota: "Pendiente de confirmar la ficha de la salsa carbonara."
      },
      {
        id: "tortilla-cheeseburger",
        nombre: "Cheeseburger",
        descripcion: "Salsa especial de la casa, carne picada, queso Cheddar, tomate y bacon.",
        precioCentimos: 1200,
        precioDesde: true,
        alergenos: ["gluten", "leche", "huevo", "mostaza", "soja", "apio", "sulfitos"],
        alergenosPendientesDeConfirmar: true,
        nota: "Pendiente de confirmar la ficha de la salsa especial de la casa."
      },
      {
        id: "tortilla-merluza-verde",
        nombre: "Merluza en salsa verde",
        descripcion: "Merluza en salsa verde.",
        precioCentimos: 1200,
        precioDesde: true,
        alergenos: ["huevo", "pescado"],
        alergenosPendientesDeConfirmar: true,
        nota: "Pendiente de confirmar la ficha de la salsa verde."
      },
      {
        id: "tortilla-chipirones",
        nombre: "Chipirones en salsa",
        descripcion: "Chipirones en salsa.",
        precioCentimos: 1200,
        precioDesde: true,
        alergenos: ["huevo", "moluscos"],
        alergenosPendientesDeConfirmar: true,
        nota: "Pendiente de confirmar la ficha de la salsa."
      },
      {
        id: "tortilla-vaca-chimichurri",
        nombre: "Vaca rubia gallega y chimichurri",
        descripcion: "Carne de vaca rubia gallega y chimichurri casero.",
        precioCentimos: 1200,
        precioDesde: true,
        alergenos: ["huevo"],
        alergenosPendientesDeConfirmar: true,
        nota: "Pendiente de confirmar la ficha del chimichurri."
      },
      {
        id: "tortilla-cebolla",
        nombre: "Con cebolla",
        descripcion: "Tortilla de patata con cebolla.",
        precioCentimos: 1200,
        precioDesde: true,
        alergenos: ["huevo"]
      },
      {
        id: "tortilla-cabra-cebolla",
        nombre: "Queso de cabra y cebolla caramelizada",
        descripcion: "Queso de cabra y cebolla caramelizada.",
        precioCentimos: 1200,
        precioDesde: true,
        alergenos: ["huevo", "leche"]
      },
      {
        id: "tortilla-morcilla-pimientos",
        nombre: "Morcilla y pimientos rojos caramelizados",
        descripcion: "Morcilla y pimientos rojos caramelizados.",
        precioCentimos: 1200,
        precioDesde: true,
        alergenos: ["huevo"],
        alergenosPendientesDeConfirmar: true,
        nota: "Pendiente de confirmar la ficha de la morcilla."
      },
      {
        id: "tortilla-torreznos-cameros",
        nombre: "Torreznos y queso Cameros",
        descripcion: "Torreznos, salsa de pimiento caramelizado y queso Cameros.",
        precioCentimos: 1200,
        precioDesde: true,
        alergenos: ["huevo", "leche"]
      },
      {
        id: "tortilla-embuchado-piparra",
        nombre: "Embuchado y piparra",
        descripcion: "Embuchado, mahonesa de ajo confitado y piparra.",
        precioCentimos: 1200,
        precioDesde: true,
        alergenos: ["huevo"]
      },
      {
        id: "tortilla-bacon-queso",
        nombre: "Bacon y queso",
        descripcion: "Bacon y queso.",
        precioCentimos: 1200,
        precioDesde: true,
        alergenos: ["huevo", "leche"]
      },
      {
        id: "tortilla-cecina-cameros",
        nombre: "Cecina y queso Cameros",
        descripcion: "Cecina y queso Cameros.",
        precioCentimos: 1200,
        precioDesde: true,
        alergenos: ["huevo", "leche"]
      },
      {
        id: "tortilla-lomo-bacon-queso",
        nombre: "Lomo, bacon y queso",
        descripcion: "Lomo, bacon y queso.",
        precioCentimos: 1200,
        precioDesde: true,
        alergenos: ["huevo", "leche"]
      },
      {
        id: "tortilla-jamon-queso-pimiento",
        nombre: "Jamón serrano, queso y pimiento verde",
        descripcion: "Jamón serrano, queso y pimiento verde asado.",
        precioCentimos: 1200,
        precioDesde: true,
        alergenos: ["huevo", "leche"]
      },
      {
        id: "tortilla-pollo-teriyaki",
        nombre: "Pollo teriyaki y mayo japonesa",
        descripcion: "Pollo teriyaki con mayo japonesa.",
        precioCentimos: 1200,
        precioDesde: true,
        alergenos: ["huevo"],
        alergenosPendientesDeConfirmar: true,
        nota: "Pendiente de confirmar la ficha de la salsa teriyaki."
      },
      {
        id: "tortilla-cuatro-quesos",
        nombre: "Cuatro quesos",
        descripcion: "Selección de cuatro quesos.",
        precioCentimos: 1200,
        precioDesde: true,
        alergenos: ["huevo", "leche"]
      },
      {
        id: "tortilla-trufada-camembert",
        nombre: "Trufada con Camembert",
        descripcion: "Queso Camembert y aceite de trufa.",
        precioCentimos: 1200,
        precioDesde: true,
        alergenos: ["huevo", "leche"]
      }
    ]
  },
  {
    id: "hamburguesas",
    titulo: "Hamburguesas",
    subtitulo: "Hamburguesas de 220 g de carne gallega.",
    aviso: "Confirmar con el local la denominación comercial y el origen antes de publicar.",
    productos: [
      {
        id: "hamburguesa-suculenta",
        nombre: "Suculenta",
        descripcion:
          "Pan Viena, carne de vaca rubia gallega, lechuga, tomate, Gouda, cebolla, pepinillo, bacon y huevo frito.",
        precioCentimos: 1200,
        alergenos: ["gluten", "leche", "huevo"],
        puedeContener: TRAZAS_PAN_VIENA
      },
      {
        id: "hamburguesa-crispy",
        nombre: "Crispy",
        descripcion:
          "Brioche potato roll, pollo rebozado en Corn Flakes, salsa Thai, lechuga, tomate, pepinillo y cebolla caramelizada. Coronado con una bola de queso asturiano René Picot.",
        precioCentimos: 1200,
        alergenos: ["gluten", "leche", "huevo"]
      },
      {
        id: "hamburguesa-cojonuda",
        nombre: "Cojonuda",
        descripcion:
          "Brioche potato roll, carne de vaca rubia gallega ahumada, salsa Print, lechuga, cebolla, pepinillo y doble Cheddar ahumado.",
        precioCentimos: 1200,
        alergenos: ["gluten", "leche", "huevo"]
      },
      {
        id: "hamburguesa-cabrisima",
        nombre: "Cabrísima",
        descripcion:
          "Brioche negro, carne de vaca rubia gallega, lechuga, queso de cabra puro, salsa de cerveza negra y cebolla roja encurtida en habaneros.",
        precioCentimos: 1200,
        picante: 1,
        alergenos: ["gluten", "crustaceos", "leche", "mostaza"]
      },
      {
        id: "hamburguesa-locura",
        nombre: "Locura",
        descripcion:
          "Brioche negro, carne de vaca rubia gallega ahumada, crema Lotus, bacon, tomate, salsa ranchera y doble Gouda.",
        precioCentimos: 1200,
        alergenos: ["gluten", "crustaceos", "leche", "huevo", "mostaza", "soja", "sulfitos"]
      },
      {
        id: "hamburguesa-xtreme-cheddar",
        nombre: "Xtreme Cheddar",
        descripcion:
          "Brioche potato roll, carne de vaca rubia gallega ahumada, bacon, aros de Cheddar, cebolla caramelizada, mahonesa ahumada y muuucho Cheddar ahumado.",
        precioCentimos: 1350,
        alergenos: ["gluten", "leche", "huevo"],
        puedeContener: TRAZAS_REBOZADOS
      },
      {
        id: "hamburguesa-xtreme-bacon",
        nombre: "Xtreme Bacon",
        descripcion:
          "Brioche potato roll, carne de vaca rubia gallega ahumada, salsa Smokey Baconnaise, mermelada de bacon casera, doble Gouda, cebolla picada y muuucho bacon.",
        precioCentimos: 1350,
        alergenos: ["gluten", "leche", "huevo", "mostaza"],
        alergenosPendientesDeConfirmar: true,
        nota: "Pendiente de confirmar la ficha de la mermelada de bacon."
      },
      {
        id: "hamburguesa-carnivora",
        nombre: "Carnívora",
        descripcion:
          "Brioche potato roll, carne de vaca rubia gallega, pulled pork, mahonesa ahumada, Gouda, bacon, tomate, aros de cebolla rebozados y BBQ Jack Daniel’s Tennessee.",
        precioCentimos: 1500,
        alergenos: ["gluten", "leche", "huevo", "soja", "mostaza"],
        puedeContener: ["crustaceos"],
        alergenosPendientesDeConfirmar: true,
        nota: "Pendiente de confirmar la ficha de la salsa BBQ."
      },
      {
        id: "hamburguesa-trufavorita",
        nombre: "Trufavorita",
        descripcion:
          "Brioche potato roll, carne de vaca rubia gallega, setas Portobello, aceite crudo de trufa, queso Monterey Jack fundido, salsa de trufa y trufa laminada.",
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
          "Brioche negro, pulled pork con salsa Búffalo, lechuga, tomate, cebolla y queso Monterey Jack.",
        precioCentimos: 1050,
        picante: 1,
        alergenos: ["gluten", "crustaceos", "leche", "soja", "mostaza"],
        alergenosPendientesDeConfirmar: true,
        nota: "Pendiente de confirmar la ficha de la salsa Búffalo."
      },
      {
        id: "pulled-pork-black-jack",
        nombre: "Black Jack",
        descripcion:
          "Brioche negro, pulled pork en salsa, lechuga, tomate, cebolla y queso Monterey Jack.",
        precioCentimos: 1050,
        alergenos: ["gluten", "crustaceos", "leche", "soja", "mostaza"],
        alergenosPendientesDeConfirmar: true,
        nota: "Pendiente de confirmar la ficha de la salsa del pulled pork."
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
        alergenos: ["gluten", "leche", "huevo"],
        puedeContener: TRAZAS_PAN_VIENA
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
          "Pan Viena, carne de cerdo desmechada y macerada en achiote, lechuga, tomate, jalapeños, queso Monterey Jack y cebolla roja encurtida con chiles habaneros.",
        precioCentimos: 1150,
        picante: 1,
        alergenos: ["gluten", "leche"],
        puedeContener: TRAZAS_PAN_VIENA,
        alergenosPendientesDeConfirmar: true,
        nota: "Pendiente de confirmar la ficha de la cochinita pibil y de los encurtidos."
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
          "Salchicha, ketchup, mostaza, cebolla picada, pepinillo y cebolla crujiente.",
        precioCentimos: 600,
        alergenos: ["gluten", "leche", "soja", "mostaza"]
      },
      {
        id: "hot-dog-bacon-cheese",
        nombre: "Bacon & Cheese",
        descripcion:
          "Salchicha, mahonesa, Gouda, bacon, salsa Cheddar y virutas de bacon crispy.",
        precioCentimos: 690,
        alergenos: ["gluten", "leche", "huevo", "soja"],
        puedeContener: ["soja"]
      },
      {
        id: "hot-dog-weno-weno",
        nombre: "Weno, Weno",
        descripcion:
          "Salchicha, salsa Bourbon, Gouda, carne especiada, salsa Cheddar y patatas paja.",
        precioCentimos: 790,
        alergenos: ["gluten", "leche", "soja", "pescado", "apio", "sulfitos"]
      },
      {
        id: "hot-dog-tex-mex",
        nombre: "Tex-Mex",
        descripcion:
          "Salchicha, cochinita pibil, bacon, Gouda, maíz, dados de tomate, mahonesa Sriracha y alioli de ajo negro.",
        precioCentimos: 900,
        picante: 1,
        alergenos: ["gluten", "leche", "huevo", "soja"],
        alergenosPendientesDeConfirmar: true,
        nota: "Pendiente de confirmar la ficha de la cochinita pibil y de la mahonesa Sriracha."
      },
      {
        id: "hot-dog-yankee",
        nombre: "Yankee",
        descripcion:
          "Salchicha, pulled pork, queso Monterey Jack fundido, pollo a la brasa, huevos de codorniz y mahonesa.",
        precioCentimos: 900,
        alergenos: ["gluten", "leche", "huevo", "soja", "mostaza"],
        alergenosPendientesDeConfirmar: true,
        nota: "Pendiente de confirmar la ficha del pollo a la brasa."
      }
    ]
  }
] as const satisfies readonly SeccionCarta[];

/*
 * TODO: Cuando el local facilite el producto Carolina Reaper, añádelo como el
 * único elemento con `picante: 3` y el aviso de prohibido a menores de 18 años.
 *
 * TODO: El documento contiene una línea incompleta: "Cecina, pimiento verde
 * asado y". No se ha incluido como tortilla hasta recibir su nombre completo.
 */
