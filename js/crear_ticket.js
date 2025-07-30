const productos = [
  { id: 1, nombre: "Taco de carne", precio: 12 },
  { id: 2, nombre: "Taco de Chicharrón", precio: 12 },
  { id: 3, nombre: "Taco de papa", precio: 5 },
  { id: 3, nombre: "Taco de frijol", precio: 5 },
  { id: 3, nombre: "Taco de requesón", precio: 5 },
  { id: 3, nombre: "Gorditas", precio: 5 },
  { id: 3, nombre: "Quesadilla sencilla", precio: 20 },
  { id: 3, nombre: "Quesadilla con rajas", precio: 20 },
  { id: 3, nombre: "Quesadilla con carne", precio: 25 },
  { id: 3, nombre: "Quesadilla con chicharrón", precio: 25 },
  { id: 3, nombre: "Sope de papa", precio: 20 },
  { id: 3, nombre: "Sope de rajas", precio: 20 },
  { id: 3, nombre: "Sope de requesón", precio: 20 },
  { id: 3, nombre: "Sope de frijol", precio: 20 },
  { id: 3, nombre: "Sope de carne", precio: 25 },
  { id: 3, nombre: "Sope de chicharrón", precio: 25 },
  { id: 3, nombre: "Flauta", precio: 24 },
  { id: 3, nombre: "Salchitaco", precio: 12 },
];

let ticket = [];

const productosSelect = document.getElementById("productos");
const ticketForm = document.getElementById("ticketForm");
const resumenPedido = document.getElementById("resumenPedido");
const enviarBtn = document.getElementById("enviarTicket");

// Cargar productos en el select
productos.forEach(p => {
  const option = document.createElement("option");
  option.value = p.id;
  option.textContent = `${p.nombre} - $${p.precio}`;
  productosSelect.appendChild(option);
});

// Agregar producto al ticket
ticketForm.addEventListener("submit", e => {
  e.preventDefault();

  const id = parseInt(productosSelect.value);
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const producto = productos.find(p => p.id === id);

  ticket.push({ ...producto, cantidad });

  mostrarResumen();
});

// Mostrar resumen del ticket
function mostrarResumen() {
  resumenPedido.innerHTML = "";
  ticket.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = `${item.nombre} x ${item.cantidad}`;
    const total = document.createElement("span");
    total.className = "badge bg-primary rounded-pill";
    total.textContent = `$${item.precio * item.cantidad}`;
    li.appendChild(total);
    resumenPedido.appendChild(li);
  });
}

// Enviar ticket al backend
enviarBtn.addEventListener("click", () => {
  const nombre = document.getElementById("nombreCliente").value;

  if (!nombre || ticket.length === 0) {
    alert("Debes ingresar el nombre y al menos un producto.");
    return;
  }

  const payload = {
    nombre_cliente: nombre,
    productos: ticket
  };

  // Simulación: imprimir en consola
  console.log("Ticket a enviar:", payload);

  // Aquí iría la llamada real:
  /*
  fetch('https://tu-backend.com/api/tickets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(res => res.json())
    .then(data => {
      alert(\"Ticket enviado con éxito!\");
      location.reload();
    });
  */

  alert("Ticket simulado enviado. Ver consola.");
  location.reload();
});
