//Navbar color en scroll

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

//Despliegue de menú hamburguesa

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

//Menús desplegables categorías

document.addEventListener("DOMContentLoaded", function() {
  const featureColumns = document.querySelectorAll(".feature-column");

  featureColumns.forEach(column => {
    column.addEventListener("mouseenter", function() {
      const details = this.querySelector(".feature-details");
      details.classList.add("show-details");
    });

    column.addEventListener("mouseleave", function() {
      const details = this.querySelector(".feature-details");
      details.classList.remove("show-details");
    });
  });
});

// Agregar comentario al hacer clic en el botón
const addCommentButton = document.getElementById('add-comment-btn');
const nameInput = document.getElementById('name-input');
const commentInput = document.getElementById('comment-input');
const imageInput = document.getElementById('image-input'); 
const commentsContainer = document.querySelector('.comments');

addCommentButton.addEventListener('click', () => {
  const name = nameInput.value;
  const commentText = commentInput.value;
  const imageFile = imageInput.files[0];

  if (name.trim() !== '' && commentText.trim() !== '') {
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    const reader = new FileReader(); 

    reader.onload = function () {
      commentElement.innerHTML = `
        <img class="avatar" src="${reader.result}" alt="Avatar de Usuario">
        <div class="comment-content">
          <p class="name">${name}</p>
          <p class="comment-text">${commentText}</p>
          <div class="comment-options">
            <button class="edit-button">Editar</button>
            <button class="delete-button">Eliminar</button>
          </div>
        </div>
      `;

      commentsContainer.appendChild(commentElement);
      nameInput.value = '';
      commentInput.value = '';
      imageInput.value = '';
      const editButton = commentElement.querySelector('.edit-button');
      const deleteButton = commentElement.querySelector('.delete-button');

      editButton.addEventListener('click', () => {
        const editedComment = prompt('Editar comentario:', commentText);
        if (editedComment !== null) {
          commentElement.querySelector('.comment-text').textContent = editedComment;
        }
      });

      deleteButton.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres eliminar este comentario?')) {
          commentsContainer.removeChild(commentElement);
        }
      });
    };

    reader.readAsDataURL(imageFile);
  } else {
    alert('Por favor, completa todos los campos antes de agregar un comentario.');
  }
});
