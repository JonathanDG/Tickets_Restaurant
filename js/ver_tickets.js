const contenedor = document.getElementById("contenedorTickets");
const filtro = document.getElementById("filtroEstado");
const btnCargar = document.getElementById("btnCargar");

btnCargar.addEventListener("click", cargarTickets);

function cargarTickets() {
  const estado = filtro.value;

  // Aquí debes reemplazar la URL por tu endpoint real:
  // Ejemplo: https://tu-backend.com/api/tickets?estado=abierto
  const url = `https://tu-backend.com/api/tickets?estado=${estado}`;

  // Simulación de datos mientras no se conecta el backend:
  const datosSimulados = [
    {
      id: 101,
      nombre_cliente: "Carlos Pérez",
      fecha: "2025-07-30 14:22",
      estado: estado,
      productos: [
        { nombre: "Hamburguesa", cantidad: 2, precio: 80 },
        { nombre: "Refresco", cantidad: 1, precio: 25 }
      ]
    },
    {
      id: 102,
      nombre_cliente: "Laura Gómez",
      fecha: "2025-07-30 13:15",
      estado: estado,
      productos: [
        { nombre: "Pizza", cantidad: 1, precio: 120 }
      ]
    }
  ];

  mostrarTickets(datosSimulados);

  /*
  fetch(url)
    .then(res => res.json())
    .then(data => {
      mostrarTickets(data);
    })
    .catch(err => {
      console.error(\"Error al cargar los tickets:\", err);
    });
  */
}

function mostrarTickets(tickets) {
  contenedor.innerHTML = "";

  if (tickets.length === 0) {
    contenedor.innerHTML = "<p class='text-muted'>No hay tickets para mostrar.</p>";
    return;
  }

  tickets.forEach(ticket => {
    const card = document.createElement("div");
    card.className = "col-12 col-md-6 col-lg-4";

    const total = ticket.productos.reduce((sum, p) => sum + p.precio * p.cantidad, 0);

    card.innerHTML = `
      <div class="card shadow-sm h-100">
        <div class="card-body">
          <h5 class="card-title">Ticket #${ticket.id}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${ticket.nombre_cliente}</h6>
          <p class="card-text"><strong>Fecha:</strong> ${ticket.fecha}</p>
          <ul class="list-group mb-3">
            ${ticket.productos.map(p => `<li class="list-group-item">${p.nombre} x ${p.cantidad} <span class="float-end">$${p.precio * p.cantidad}</span></li>`).join("")}
          </ul>
          <p><strong>Total: </strong>$${total}</p>
        </div>
      </div>
    `;

    contenedor.appendChild(card);
  });
}
