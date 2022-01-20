export function updater() {

  const proyectos = document.querySelector('.tabla-proyectos tbody')

  fetch("./proyectos.json", {})
    .then(response => response.json())
    .then(data => {
      data.forEach(element => {
          var tr_element = document.createElement('tr');
          tr_element.innerHTML = `

            <td><img src="./assets/images/proyectos/${element.nombre_proyecto}.png" alt="" style="width: auto; height: 100px; text-align: center;"></td>
            <td>${element.numero_proyecto}</td>
            <td>${element.cliente}</td>
            <td>${element.nombre_proyecto}</td>
            <td>${element.responsable}</td>
            <td>${element.revision}</td>
            <td>${element.linea}</td>
            <td>${element.estatus}</td>
            <td><a href="${element.autodesk_link}" class="boton-modelo"><button class="btn btn--block card__btn">Modelo 3D</a></button></td>
            <td>${element.ruta_carpeta}</td>
            <td>${element.confirmacion_dynamics}</td>
            <td>${element.semana_inicio}</td>
            <td>${element.semana_final}</td>
            `;

          proyectos.appendChild(tr_element);
      });
    });

  console.log('Updater feature loaded...');
};
