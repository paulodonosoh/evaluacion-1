const FAVORITOS_STORAGE_KEY = "perrosFavoritos";

function cargarFavoritos() {
  try {
    const raw = localStorage.getItem(FAVORITOS_STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function guardarFavoritos(favoritos) {
  localStorage.setItem(FAVORITOS_STORAGE_KEY, JSON.stringify(favoritos));
}

function obtenerFavoritos() {
  return cargarFavoritos();
}

function esFavorito(nombrePerro) {
  return obtenerFavoritos().includes(nombrePerro);
}

function toggleFavorito(nombrePerro) {
  const favoritos = obtenerFavoritos();
  const indice = favoritos.indexOf(nombrePerro);

  if (indice >= 0) {
    favoritos.splice(indice, 1);
  } else {
    favoritos.push(nombrePerro);
  }

  guardarFavoritos(favoritos);
  return favoritos;
}

function filtrarSoloFavoritos(listaPerros) {
  const favoritos = new Set(obtenerFavoritos());
  return listaPerros.filter((perro) => favoritos.has(perro.nombre));
}
