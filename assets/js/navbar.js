export function navbar() {
  //set the li
  var listItems = document.getElementById('navbar-animmenu').querySelectorAll('li');
  //get the tabs
  var tabItems = document.querySelectorAll('div.tabContent');
  hideElements();
  showHome();

  function unactiveItem() {
    listItems.forEach(item => item.classList.remove('active-li'));
  }

  function hideElements() {
    tabItems.forEach(tab => tab.setAttribute('style', 'display: none;'));
  }

  function showHome() {
    document.getElementById('busqueda').setAttribute('style', 'display: block;');
  }

  // function showTab(tabId) {
  //   hideElements();
  //   switch (tabId) {
  //     case 'inicio':
  //       document.getElementById('inicio-tab').setAttribute('style', 'display: block;');
  //       break;
  //     case 'nosotros':
  //       document.getElementById('nosotros-tab').setAttribute('style', 'display: block;');
  //       break;
  //     case 'productos':
  //       document.getElementById('productos-tab').setAttribute('style', 'display: block;');
  //       break;
  //     case 'servicios':
  //       document.getElementById('servicios-tab').setAttribute('style', 'display: block;');
  //       break;
  //     case 'contacto':
  //       document.getElementById('contacto-tab').setAttribute('style', 'display: block;');
  //       break;
  //     case 'blog':
  //       document.getElementById('blog-tab').setAttribute('style', 'display: block;');
  //       break;
  //     default:
  //       document.getElementById('inicio-tab').setAttribute('style', 'display: block;');
  //       break;
  //   }
  //   unactiveItem();
  // }

  listItems.forEach(item => item.onclick = function clicked(){
    var activeWidthListItem = this.offsetWidth;
    var activePosListItem = this.offsetLeft;
    document.getElementsByClassName('hori-selector')[0].setAttribute('style', `left: ${activePosListItem}px; width: ${activeWidthListItem}px;`);
    var tabId = this.id;
    showTab(tabId);
    this.classList.add('active-li');
  });

  console.log("Navbar loaded...")

}
