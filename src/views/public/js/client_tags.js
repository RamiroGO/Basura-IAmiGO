// Variables Globales
// Invocar al elemento de selección en el HTML
let $select_tag = document.getElementById('id_sel_tag');
let cant_tags = 0;
// Funciones Globales
function delParameter(sel_row_tag) {
  // El button tiene que subir dos niveles para que se pueda determinar cual fue el Row seleccionado
  document.getElementById("list_tags")
    .deleteRow(sel_row_tag.parentNode.parentNode.rowIndex - 1);
}


// Funciones de Eventos:
/**
 * EVENTO: Después de cargar la página.
 * Poblar los tags en el select-option, a partir de las opciones que ofrece la base de datos
 */
document.addEventListener("DOMContentLoaded", () => {
  // URL de la página actual, elimina el infinitivo 'signup' y lo reemplaza por 'usuarios/all'

  // Poblar las opciones del select 'id_sel_tag'  
  // Peticiones al Servidor: Hace una petición al servidor, pidiendo por las opciones en el select.
  // Descargar datos de la base de datos con una petición del servidor
  fetch(document.URL.substring(0, document.URL.length - 6).concat('tags/list_names'))
    // Llevar los datos recibidos al elemento de selección en el HTML
    // Convertir la respuesta en un Objeto JSON
    .then(list_areas => list_areas.json())
    .then(list_areas => {
      // Invocar al elemento de selección en el HTML
      $select_tag = document.getElementById('id_sel_tag');

      // Borrar elementos pre-existentes en la lista
      // excepto el elemento por defecto "--Seleccionar--"
      $select_tag.options.length = 1;

      // Insertar elementos como opciones
      list_areas.forEach((get_tag) => {
        // Generar un nuevo elemento 'option' para el 'select'
        let $newOptionTag = document.createElement('option');

        // Darle un texto al elemento 'option' correspondiente con la información recibida de la petición.
        $newOptionTag.text = get_tag;

        // Añadir el nuevo elemento 'option' al elemento 'select'
        $select_tag.options.add($newOptionTag);
      });
    });
});

/**
 * EVENTO: Después de seleccionar una de las opciones en el select.
 * Carga los parámetros correspondientes al tipo de tag que se ha seleccionado, según lo establezca la definición del servidor para tal Tag
 */
$select_tag.addEventListener('change', (event_) => {
  if ($select_tag.value != "--Seleccionar--") {
    // URL de la página actual, elimina el infinitivo 'signup' y lo reemplaza por 'usuarios/all'
    const this_url = document.URL.substring(0, document.URL.length - 6).concat('tags/' + $select_tag.value);

    // Capturamos el elemento de listas de parámetros
    let
      $list_tags = document.getElementById("list_tags"),
      $new_row,
      $new_td,
      $new_btn,
      $label_param_newRow,
      $value_param_newRow;

    // Petición de datos hacia el servidor
    fetch(this_url)
      // Llevar los datos recibidos al elemento de selección en el HTML
      // Convertir la respuesta en un Objeto JSON
      .then(list_paramsTag => list_paramsTag.json())
      .then(list_paramsTag => {
        // Hacer visible el div de la tabla de parámetros
        document.getElementById('div_hidden_list_tags').hidden = false;
        // Obtener la lista de keys que contienen los nombres de los parámetros del Tag seleccionado.
        Object.keys(list_paramsTag).forEach(parameterTag => {
          if (parameterTag != "") {
            const sel_tag = cant_tags;

            // Visualizar datos en tabla
            $new_row = document.createElement("tr")

            // Nombre del Parámetro
            $label_param_newRow = document.createElement("label");
            $label_param_newRow.textContent = parameterTag;
            $new_td = document.createElement("td");
            $new_td.appendChild($label_param_newRow);
            $new_row.appendChild($new_td);

            // Valor del Parámetro
            $value_param_newRow = document.createElement("input");
            $value_param_newRow.placeholder = "Ingresar Valor";
            $new_td = document.createElement("td");
            $new_td.appendChild($value_param_newRow);
            $new_row.appendChild($new_td);

            // Comandos del Parámetro
            // - Configurar el button
            $new_btn = document.createElement("button");
            $new_btn.textContent = "Eliminar Campo";
            $new_btn.classList.add("smallBtn");
            $new_btn.onclick = function () { delParameter(this); };
            $new_td = document.createElement("td")
            $new_td.appendChild($new_btn);
            $new_row.appendChild($new_td);

            // Cargar Fow del Parámetro en la vista del HTML
            $list_tags.appendChild($new_row);
            cant_tags++;
          }
        });
      });
  }
});