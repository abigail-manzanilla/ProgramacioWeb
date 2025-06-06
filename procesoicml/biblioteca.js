function cargarDatos() {
  const promise = fetch("http://localhost/programacioweb/procesoicml/datos.xml");

  promise.then(function (response) {
    const divContent = document.getElementById("contenedor");

    if (divContent) {
      divContent.innerHTML = response;
    }
  });
}
