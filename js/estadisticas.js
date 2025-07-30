const masVendido = document.getElementById("productoMasVendido");
const menosVendido = document.getElementById("productoMenosVendido");
const totalVentas = document.getElementById("totalVentas");

// Aquí se simulan los datos, luego se reemplaza con API real
const datosSimulados = {
  producto_mas_vendido: "Pizza",
  producto_menos_vendido: "Refresco",
  total_ventas: 1825
};

mostrarEstadisticas(datosSimulados);

/*
fetch(\"https://tu-backend.com/api/estadisticas\")
  .then(res => res.json())
  .then(data => mostrarEstadisticas(data))
  .catch(err => console.error(\"Error al cargar estadísticas:\", err));
*/

function mostrarEstadisticas(data) {
  masVendido.textContent = data.producto_mas_vendido;
  menosVendido.textContent = data.producto_menos_vendido;
  totalVentas.textContent = `$${data.total_ventas}`;
}
