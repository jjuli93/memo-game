const cartas = document.querySelectorAll(".carta");

const seleccionados = [];

const handleClick = (carta) => {
  seleccionados.push(carta);
  const nombre = carta.dataset.nombre;
  carta.classList.add("visible");
  const longitudArray = seleccionados.length; 

  if (longitudArray % 2 === 0 ) {
    setTimeout(() => {
      const ultimoSeleccionado = seleccionados[longitudArray - 2];
      if(ultimoSeleccionado.dataset.nombre !== nombre) {
        carta.classList.remove("visible")
        ultimoSeleccionado.classList.remove("visible");
      }
    }, 1000)
  }
}

cartas.forEach(carta => {
  carta.addEventListener("click", () => handleClick(carta));
})

