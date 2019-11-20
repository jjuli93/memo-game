const cartas = document.querySelectorAll(".carta");

let ultimoSeleccionado = null;

const handleClick = (carta) => {
  const nombre = carta.dataset.nombre;
  carta.classList.add("visible")
  if (ultimoSeleccionado ) {
    setTimeout(() => {
      if(ultimoSeleccionado.dataset.nombre !== nombre) {
        carta.classList.remove("visible")
        ultimoSeleccionado.classList.remove("visible");
      }
      ultimoSeleccionado = null;
    }, 1000)
  }
  else
    ultimoSeleccionado = carta;
}

cartas.forEach(carta => {
  carta.addEventListener("click", () => handleClick(carta));
})

