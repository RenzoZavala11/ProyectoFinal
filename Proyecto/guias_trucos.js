document.getElementById('buscador').addEventListener('input', function (e) {
  const texto = e.target.value.toLowerCase();

  // Solo filtra dentro de la pestaña guía
  if (document.getElementById('guia').classList.contains('active')) {
    document.querySelectorAll('#guia .guia__card').forEach(card => {
      const contenido = card.textContent.toLowerCase();
      card.style.display = contenido.includes(texto) ? 'block' : 'none';
    });
  }
});

// Función para cambiar de pestaña
function cambiarTab(event, id) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  event.target.classList.add('active');

  // Reinicia el filtro cuando cambias de pestaña
  if (id !== 'guia') {
    document.querySelectorAll('.guia__card').forEach(card => {
      card.style.display = 'block';
    });
  }
}

// Modo claro / oscuro
function toggleModo() {
  document.body.classList.toggle("modo-claro");
}

// Comentarios - Guardar
document.getElementById('formComentario').addEventListener('submit', function (e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const comentario = document.getElementById('comentario').value.trim();
  const fecha = new Date().toLocaleString();

  if (nombre.length < 3 || comentario.length < 5) {
    alert("Por favor, escribe un nombre y comentario más largos.");
    return;
  }

  const div = document.createElement('p');
  div.textContent = `${nombre} (${fecha}): ${comentario}`;
  document.getElementById('comentarios').appendChild(div);
  document.getElementById('formComentario').reset();
});