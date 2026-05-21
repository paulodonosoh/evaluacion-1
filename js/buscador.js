// Arreglo de objetos con información de perros disponibles
const perros = [
  {
    nombre: "Max",
    raza: "Labrador Retriever",
    edad: 3,
    descripcion: "Max es un perro cariñoso y energético que adora jugar y pasar tiempo con su familia. Es muy leal y se lleva bien con niños y otros perros.",
    imagen: "img/max.jpg"
  },
  {
    nombre: "Luna",
    raza: "Golden Retriever",
    edad: 2,
    descripcion: "Luna es dulce, inteligente y muy afectuosa. Le encanta nadar y buscar pelotas. Es perfecta para familias activas que buscan un compañero leal.",
    imagen: "img/luna.jpg"
  },
  {
    nombre: "Rocky",
    raza: "Pastor Alemán",
    edad: 4,
    descripcion: "Rocky es protector, valiente y muy inteligente. Requiere entrenamiento y ejercicio regular, pero es un excelente perro guardián y compañero para personas con experiencia.",
    imagen: "img/rocky.jpg"
  },
  {
    nombre: "Bella",
    raza: "Beagle",
    edad: 1,
    descripcion: "Bella es juguetona, curiosa y llena de energía. A pesar de su tamaño pequeño, tiene una gran personalidad. Es ideal para familias que disfrutan de un perro activo y divertido.",
    imagen: "img/bella.jpg"
  },
  {
    nombre: "Charlie",
    raza: "Bulldog Francés",
    edad: 2,
    descripcion: "Charlie es un perro pequeño pero con un gran corazón. Es muy cariñoso, tranquilo y perfecto para apartamentos. Le encanta acurrucarse junto a su familia.",
    imagen: "img/charlie.jpg"
  },
  {
    nombre: "Daisy",
    raza: "Cocker Spaniel",
    edad: 5,
    descripcion: "Daisy es una perrita dulce y gentil que adora la compañía humana. Es excelente con niños y otros perros. Le encanta jugar en parques y playas.",
    imagen: "img/daisy.jpg"
  },
  {
    nombre: "Rex",
    raza: "Doberman Pinscher",
    edad: 3,
    descripcion: "Rex es elegante, leal y muy protector. Requiere un dueño con experiencia que pueda proporcionarle disciplina y ejercicio regular. Es un excelente perro de guarda.",
    imagen: "img/rex.jpg"
  },
  {
    nombre: "Sophie",
    raza: "Pug",
    edad: 2,
    descripcion: "Sophie es una perrita pequeña, cariñosa y juguetona. Le encanta la atención y es ideal para personas mayores o familias que buscan un compañero pequeño y afectuoso.",
    imagen: "img/sophie.jpg"
  },
  {
    nombre: "Bruno",
    raza: "Rottweiler",
    edad: 4,
    descripcion: "Bruno es un perro grande, fuerte y muy leal. A pesar de su apariencia intimidante, es gentil y cariñoso con su familia. Necesita un dueño firme y responsable.",
    imagen: "img/bruno.jpg"
  },
  {
    nombre: "Mila",
    raza: "Husky Siberiano",
    edad: 2,
    descripcion: "Mila es energética, inteligente y aventurera. Adora el frío y le encanta correr y jugar. Es perfecta para personas activas que disfruten de actividades al aire libre.",
    imagen: "img/mila.jpg"
  },
  {
    nombre: "Oscar",
    raza: "Pug",
    edad: 3,
    descripcion: "Oscar es un perro pequeño, adorable y muy divertido. Tiene una gran personalidad a pesar de su tamaño. Le encanta estar cerca de su familia y dormir cómodamente.",
    imagen: "img/oscar.jpg"
  }
];

// Función para buscar perros por nombre o raza
function buscarPerros(termino) {
  if (!termino || termino.trim() === "") {
    return perros;
  }
  
  const terminoBuscado = termino.toLowerCase();
  return perros.filter(perro => 
    perro.nombre.toLowerCase().includes(terminoBuscado) ||
    perro.raza.toLowerCase().includes(terminoBuscado)
  );
}

// Función para renderizar perros en el DOM
function renderizarPerros(perrosAMostrar = perros) {
  const seccionPerros = document.getElementById("perros");
  const listaPerros = seccionPerros.querySelector("ul");
  
  // Limpiar lista anterior
  listaPerros.innerHTML = "";
  
  if (perrosAMostrar.length === 0) {
    listaPerros.innerHTML = "<li><p>No se encontraron perros que coincidan con tu búsqueda.</p></li>";
    return;
  }
  
  perrosAMostrar.forEach(perro => {
    const favoritoActivo = typeof esFavorito === "function" && esFavorito(perro.nombre);
    const claseFavorito = favoritoActivo ? "btn-favorito activo" : "btn-favorito";
    const textoFavorito = favoritoActivo ? "★ Favorito" : "☆ Marcar favorito";

    const item = document.createElement("li");
    item.innerHTML = `
      <img src="${perro.imagen}" alt="${perro.nombre}">
      <div class="atributos">
        <strong>${perro.nombre}</strong> - Raza: ${perro.raza} - Edad: ${perro.edad} años
        <button type="button" class="${claseFavorito}" data-nombre="${perro.nombre}">${textoFavorito}</button>
      </div>
      <p class="descripcion">${perro.descripcion}</p>
    `;
    listaPerros.appendChild(item);
  });
}
