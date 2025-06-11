let herramientas = [];

function agregarHerramienta(nombre, categoria) {
  const herramienta = { nombre, categoria };
  herramientas.push(herramienta);
  return herramienta;
}

function listarHerramientas() {
  return herramientas;
}

// Conexión con HTML
document.getElementById('formHerramienta').addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const categoria = document.getElementById('categoria').value;
  
  const herramienta = agregarHerramienta(nombre, categoria);
  actualizarLista();
});

function actualizarLista() {
  const lista = document.getElementById('listaHerramientas');
  lista.innerHTML = '';
  listarHerramientas().forEach(herramienta => {
    const li = document.createElement('li');
    li.textContent = `${herramienta.nombre} (${herramienta.categoria})`;
    lista.appendChild(li);
  });
}