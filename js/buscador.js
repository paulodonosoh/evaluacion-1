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
    const item = document.createElement("li");
    item.innerHTML = `
      <img src="${perro.imagen}" alt="${perro.nombre}">
      <div class="atributos">
        <strong>${perro.nombre}</strong> - Raza: ${perro.raza} - Edad: ${perro.edad} años
      </div>
      <p class="descripcion">${perro.descripcion}</p>
    `;
    listaPerros.appendChild(item);
  });
}
