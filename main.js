class Juego {
    constructor(nombre, genero) {
      this.nombre = nombre;
      this.genero = genero;
    }
  }
  
  const juegosDisponibles = [
    new Juego("Mu", "RPG"),
    new Juego("Zelda", "RPG"),
    new Juego("Wow", "RPG"),
    new Juego("Minecraft", "Survival"),
    new Juego("Rust", "Survival"),
    new Juego("Ark", "Survival"),
    new Juego("CS", "FPS"),
    new Juego("Call of Duty", "FPS"),
    new Juego("Battlefield 20", "FPS"),
    new Juego("Isaac", "Roguelike"),
    new Juego("Hades", "Roguelike"),
    new Juego("Rogue Legacy", "Roguelike"),
  ];
  
  function mostrarJuegosPorGenero(generoSeleccionado) {
    const juegosFiltrados = juegosDisponibles.filter(juego => juego.genero.toUpperCase() === generoSeleccionado.toUpperCase());
    if (juegosFiltrados.length > 0) {
      alert(`Te recomendamos estos juegos de ${generoSeleccionado}: ${juegosFiltrados.map(juego => juego.nombre).join(', ')}`);
    } else {
      alert(`Lo siento, no hay juegos disponibles en la tienda para el género ${generoSeleccionado}.`);
    }
  }
  
  function buscarJuegoPorNombre(nombre) {
    const juegoEncontrado = juegosDisponibles.find(juego => juego.nombre.toUpperCase() === nombre.toUpperCase());
    if (juegoEncontrado) {
      alert(`Encontramos el juego ${juegoEncontrado.nombre} en la tienda. Género: ${juegoEncontrado.genero}`);
    } else {
      alert(`Lo siento, no encontramos ningún juego con el nombre ${nombre} en la tienda.`);
    }
  }
  
  function mostrarTodosLosJuegos() {
    const nombresJuegos = juegosDisponibles.map(juego => juego.nombre).join(', ');
    alert(`Todos los juegos disponibles en la tienda: ${nombresJuegos}`);
  }
  
  let respuesta = prompt("¿Quieres saber qué juegos hay en la tienda?: Si, No").toUpperCase();
  
  while (respuesta === "SI") {
    let opcion = prompt("Elige una opción:\n1- Buscar por género\n2- Buscar por nombre\n3- Mostrar todos los juegos");
  
    switch (opcion) {
      case "1":
        let genero = prompt("Elige un género que te guste:\n1-RPG\n2-Survival\n3-FPS\n4-Roguelike");
        switch (genero) {
          case "1":
            mostrarJuegosPorGenero("RPG");
            break;
          case "2":
            mostrarJuegosPorGenero("Survival");
            break;
          case "3":
            mostrarJuegosPorGenero("FPS");
            break;
          case "4":
            mostrarJuegosPorGenero("Roguelike");
            break;
          default:
            alert('Elegiste un valor no asignado. Por favor, elige un número válido.');
        }
        break;
      case "2":
        let nombreJuego = prompt("Ingresa el nombre del juego que quieres buscar:");
        buscarJuegoPorNombre(nombreJuego);
        break;
      case "3":
        mostrarTodosLosJuegos();
        break;
      default:
        alert('Elegiste una opción no válida. Por favor, elige una opción del 1 al 3.');
    }
  
    respuesta = prompt("¿Quieres realizar otra operación en la tienda?: Si, No").toUpperCase();
  }
  
  alert("¡Hasta la próxima!");