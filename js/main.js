document.addEventListener("DOMContentLoaded", () => {
	console.log("Aplicación cargada correctamente.");
	
	// Renderizar perros al cargar la página
	renderizarPerros();
	
	// Agregar event listener al buscador
	const buscadorPerros = document.getElementById("buscador-perros");
	if (buscadorPerros) {
		buscadorPerros.addEventListener("input", (e) => {
			const termino = e.target.value;
			const perrosEncontrados = buscarPerros(termino);
			renderizarPerros(perrosEncontrados);
		});
	}
});
