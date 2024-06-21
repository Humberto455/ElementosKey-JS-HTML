const Peliculas = [
  { id: 1, titulo: "Inception", descripcion: "Un ladrón que roba secretos corporativos a través del uso de tecnología de sueño compartido recibe la tarea inversa de plantar una idea en la mente de un CEO.", imagen: "./imagenes/img1.jpg", categoria: "Ciencia" },
  { id: 2, titulo: "The Dark Knight", descripcion: "Cuando el Joker emerge como un nuevo villano, Batman debe aceptar uno de los mayores desafíos psicológicos y físicos para salvar Gotham City.", imagen: "./imagenes/img2.jpg", categoria: "Accion" },
  { id: 3, titulo: "Interstellar", descripcion: "Un grupo de astronautas viaja a través de un agujero de gusano en un intento de asegurar la supervivencia de la humanidad.", imagen: "./imagenes/img3.jpg", categoria: "Ciencia" },
  { id: 4, titulo: "The Conjuring", descripcion: "Los investigadores paranormales Ed y Lorraine Warren trabajan para ayudar a una familia aterrorizada por una presencia oscura en su casa.", imagen: "./imagenes/img4.jpg", categoria: "Terror" },
  { id: 5, titulo: "Avengers: Endgame", descripcion: "Después de los eventos devastadores de 'Infinity War', los Vengadores deben unirse una vez más para deshacer las acciones de Thanos y restaurar el orden en el universo.", imagen: "./imagenes/img5.jpg", categoria: "Accion" },
  { id: 6, titulo: "Titanic", descripcion: "Una historia de amor y tragedia a bordo del famoso trasatlántico que se hundió en su viaje inaugural.", imagen: "./imagenes/img6.jpg", categoria: "Otro" },
  { id: 7, titulo: "Parasite", descripcion: "Una familia pobre se infiltra en la vida de una familia rica, pero sus planes se complican de maneras inesperadas.", imagen: "./imagenes/img7.jpg", categoria: "Otro" },
  { id: 8, titulo: "Get Out", descripcion: "Un joven afroamericano visita a los padres de su novia blanca durante un fin de semana, donde descubre un secreto perturbador.", imagen: "./imagenes/img8.jpg", categoria: "Terror" },
  { id: 9, titulo: "The Matrix", descripcion: "Un hacker descubre la verdad sobre su realidad y su papel en la guerra contra sus controladores.", imagen: "./imagenes/img9.jpg", categoria: "Ciencia" },
  { id: 10, titulo: "The Godfather", descripcion: "La historia épica de una familia de la mafia italoamericana y su ascenso y caída en el mundo del crimen organizado.", imagen: "./imagenes/img10.jpg", categoria: "Otro" },
  { id: 11, titulo: "Pulp Fiction", descripcion: "La vida de dos matones, un boxeador, una esposa de un gánster y dos bandidos se entrelazan en una serie de eventos cómicos y violentos.", imagen: "./imagenes/img11.jpg", categoria: "Otro" },
  { id: 12, titulo: "The Shawshank Redemption", descripcion: "Dos hombres encarcelados forman un vínculo durante varios años, encontrando consuelo y eventual redención a través de actos de decencia común.", imagen: "./imagenes/img12.jpg", categoria: "Otro" },
  { id: 13, titulo: "Jurassic Park", descripcion: "Un parque temático con dinosaurios clonados se convierte en un lugar mortal cuando los animales se escapan de sus recintos.", imagen: "./imagenes/img13.jpg", categoria: "Ciencia" },
  { id: 14, titulo: "The Exorcist", descripcion: "Una madre busca la ayuda de dos sacerdotes para salvar a su hija poseída por una entidad misteriosa.", imagen: "./imagenes/img14.jpg", categoria: "Terror" },
  { id: 15, titulo: "Mad Max: Fury Road", descripcion: "En un futuro post-apocalíptico, un hombre solitario se une a una mujer en su huida de un tirano que controla un vasto desierto.", imagen: "./imagenes/img15.jpg", categoria: "Accion" }
];

   let lastScrollTop = 0;
    //Evento scroll para cambiar de color si sube o baja
    window.addEventListener('scroll', function() {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scroll down
        document.body.style.backgroundColor = "#b92b27"; 
      } else {
        // Scroll up
        document.body.style.backgroundColor = "#59c173";
      }
      if (scrollTop <= 0) {
        lastScrollTop = 0;
      } else {
        lastScrollTop = scrollTop;
      }
    }, false);



    // Generar tarjetas de peliculas

  const container = document.getElementById('tarjetas-container');
  const buttons = document.querySelectorAll('.category-button');

  const colores = ['green', 'yellow', 'purple', 'pink', 'black'];

  function generarTarjetas(peliculas) {
      container.innerHTML = ''; // Limpiar el contenido anterior
      peliculas.forEach(pelicula => {
          const col = document.createElement('div');
          col.classList.add('col-md-4', 'mb-4');

          const card = document.createElement('div');
          card.classList.add('card');

          const img = document.createElement('img');
          img.classList.add('card-img-top');
          img.src = pelicula.imagen;
          img.alt = pelicula.titulo;

          const cardBody = document.createElement('div');
          cardBody.classList.add('card-body');

          const cardTitle = document.createElement('h5');
          cardTitle.classList.add('card-title');
          cardTitle.textContent = pelicula.titulo;
          cardTitle.addEventListener('click', () => cambiarColor(cardTitle));

          const cardText = document.createElement('p');
          cardText.classList.add('card-text');
          cardText.textContent = pelicula.descripcion;

          cardBody.appendChild(cardTitle);
          cardBody.appendChild(cardText);
          card.appendChild(img);
          card.appendChild(cardBody);
          col.appendChild(card);
          container.appendChild(col);
      });
  }

  function cambiarColor(element) {
    const currentColor = element.style.color;
    let newColor = colores[(colores.indexOf(currentColor) + 1) % colores.length];
    element.style.color = newColor;
}

  function filtrarPeliculas(categoriaInicial) {
      const peliculasFiltradas = Peliculas.filter(pelicula => pelicula.categoria.startsWith(categoriaInicial));
      generarTarjetas(peliculasFiltradas);
      resaltarBoton(categoriaInicial);
  }

  function resaltarBoton(categoria) {
      buttons.forEach(button => {
          if (button.id === categoria) {
              button.classList.add('highlight');
          } else {
              button.classList.remove('highlight');
          }
      });
  }

  document.addEventListener('keypress', (event) => {
      const key = event.key.toUpperCase();
      const categorias = {
          'A': 'Accion',
          'T': 'Terror',
          'C': 'Ciencia',
          'O': 'Otro'
      };
      if (categorias[key]) {
          filtrarPeliculas(categorias[key]);
      }
  });

  // Generar todas las tarjetas al cargar la página
  generarTarjetas(Peliculas);