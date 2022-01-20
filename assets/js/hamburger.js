export function hamburger() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = [];
  var inicio = document.getElementById('inicio');
  var nosotros = document.getElementById('nosotros');
  var productos = document.getElementById('productos');
  var servicios = document.getElementById('servicios');
  var blog = document.getElementById('blog');

  navMenu.push(inicio);
  navMenu.push(nosotros);
  navMenu.push(productos);
  navMenu.push(servicios);
  navMenu.push(contacto);
  navMenu.push(blog);

  hamburger.addEventListener('click', () => {
    navMenu.forEach(navElement => {
      navElement.classList.toggle('show-nav');
    });
  })

  console.log("Mobile menu loaded...")
}
