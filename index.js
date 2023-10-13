window.onload = function() {
    const sujeto = ["Mi perro", "Mi gato", "Mi abuela", "Mi vecino"];
    const accion = ["comió", "perdió", "rompió", "quemó"];
    const que = ["mi tarea", "el coche", "mi teléfono", "las llaves"];
    const cuando = ["en casa", "en el parque", "en la nevera", "en la calle"];
  
    function obtenerPalabraAleatoria(lista) {
      const palabraRandom = lista[Math.floor(Math.random() * lista.length)];
  
      return palabraRandom;
    }
  
    function generarExcusa() {
      const palabra1 = obtenerPalabraAleatoria(sujeto);
      const palabra2 = obtenerPalabraAleatoria(accion);
      const palabra3 = obtenerPalabraAleatoria(que);
      const palabra4 = obtenerPalabraAleatoria(cuando);
  
      const excusaGenerada = `${palabra1} ${palabra2} ${palabra3} ${palabra4}`;
  
      document.getElementById("excuse").innerHTML = excusaGenerada;
    }
  
    const botonGenerador = document.getElementById("generateExcuse");
    botonGenerador.addEventListener("click", generarExcusa);
  };
  