export function parsing() {

    // fetch("../../proyectos.json")
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(jsondata => console.table(jsondata))

    const proyectos = document.querySelector('.proyectos')

    fetch("./proyectos.json", {})
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                if (element.autodesk_link != "" && element.estatus == 'activo') {
                    var div_element = document.createElement('div');
                    div_element.innerHTML = `

          <div class="card">
            <div class="thumbnail">
              <img src="./assets/images/proyectos/${element.nombre_proyecto}.png" alt="${element.nombre_proyecto}">
            </div>
              <div class="card__content">
                <div class="card__title">${element.numero_proyecto}</div>
                <p class="card__text"><strong>Cliente:</strong><br> ${element.cliente}</p>
                <p class="card__text"><strong>Proyecto:</strong><br> ${element.nombre_proyecto}</p>
                <p class="card__text"><strong>Responsable:</strong><br> ${element.responsable}</p>
                <p class="card__text"><strong>Linea:</strong> ${element.linea}</p>
                <a href="${element.autodesk_link}" class="boton-modelo" target="_blank"><button class="btn btn--block card__btn" >Modelo 3D</a></button>
              </div>
            </div>
          `;

                    proyectos.appendChild(div_element);
                }
            });
        });

    console.log('Parsing feature loaded...');
};