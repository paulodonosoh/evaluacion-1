document.addEventListener("DOMContentLoaded", () => {
	console.log("Aplicación cargada correctamente.");

	const buscadorPerros = document.getElementById("buscador-perros");
	const filtroSoloFavoritos = document.getElementById("filtro-solo-favoritos");
	const listaPerros = document.querySelector("#perros ul");

	function actualizarListado() {
		const termino = buscadorPerros ? buscadorPerros.value : "";
		let perrosEncontrados = buscarPerros(termino);

		if (filtroSoloFavoritos && filtroSoloFavoritos.checked && typeof filtrarSoloFavoritos === "function") {
			perrosEncontrados = filtrarSoloFavoritos(perrosEncontrados);
		}

		renderizarPerros(perrosEncontrados);
	}

	actualizarListado();

	if (buscadorPerros) {
		buscadorPerros.addEventListener("input", () => {
			actualizarListado();
		});
	}

	if (filtroSoloFavoritos) {
		filtroSoloFavoritos.addEventListener("change", () => {
			actualizarListado();
		});
	}

	if (listaPerros) {
		listaPerros.addEventListener("click", (event) => {
			const boton = event.target.closest(".btn-favorito");
			if (!boton || typeof toggleFavorito !== "function") {
				return;
			}

			const nombrePerro = boton.dataset.nombre;
			if (!nombrePerro) {
				return;
			}

			toggleFavorito(nombrePerro);
			actualizarListado();
		});
	}
});
