fetch("data/data.json")
  .then((response) => response.json())
  .then((data) => {
    // Accede al elemento en el HTML donde deseas mostrar los resultados
    const contenedor = document.getElementById("resultado");

    data.forEach((usuario) => {
      // Crea un div como contenedor para cada libro
      const libroDiv = document.createElement("div");
      libroDiv.className = "libro"; // Clase para aplicar estilos CSS

      const imagen = document.createElement("img");
      const titulo = document.createElement("h1");
      const genero = document.createElement("h2");
      const fecha = document.createElement("h3");

      imagen.src = usuario.foto_de_portada;
      titulo.textContent = `Título: ${usuario.titulo}`;
      genero.textContent = `Género: ${usuario.genero}`;
      fecha.textContent = `Fecha: ${usuario.año}`;

      // Agrega los elementos al div contenedor del libro
      libroDiv.appendChild(imagen);
      libroDiv.appendChild(titulo);
      libroDiv.appendChild(genero);
      libroDiv.appendChild(fecha);

      // Agrega el div contenedor del libro al contenedor principal
      contenedor.appendChild(libroDiv);
    });
  })
  .catch((error) => {
    console.error("Error al cargar los datos:", error);
  });
