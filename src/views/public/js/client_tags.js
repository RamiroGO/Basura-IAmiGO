// ts -estrict

// Variables Globales
// Invocar al elemento de selección en el HTML
const $select_tag = document.getElementById('id_sel_tag');
const $btn_set_tag = document.getElementById('btn_set_tag');
const $btn_get_tag = document.getElementById('btn_get_tag');
const $list_atrib = document.getElementById('list_atrib');
const $list_tags = document.getElementById('list_tags');

let cant_tags = 0;
// Funciones Globales
/**
 * Eliminar Row de la tabla de etiquetas dadas por el Usuario
 * @param {*} sel_row_tag 
 */
function delParameter(sel_row_tag) {
  if ($list_tags) {
    // El button tiene que subir dos niveles para que se pueda determinar cual fue el Row seleccionado
    // @ts-ignore
    $list_tags.deleteRow(sel_row_tag.parentNode.parentNode.rowIndex);

    // En caso de no tenerse etiquetas del usuario visibles => ocultar cuadro de lista de etiquetas del usuario
    if ($list_tags.childElementCount === 0) {
      // @ts-ignore
      document.getElementById("div_hidden_list_atrib").hidden = true;
      // @ts-ignore
      document.getElementById('btn_get_tag').hidden = true;
    }
  }
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
  fetch(document.URL.substring(0, document.URL.length - 6).concat('intenciones/nombres'))
    // Llevar los datos recibidos al elemento de selección en el HTML
    // Convertir la respuesta en un Objeto JSON
    .then(list_areas => list_areas.json())
    .then(list_areas => {
      // Invocar al elemento de selección en el HTML
      // $select_tag = <HTMLInputElement> document.getElementById('id_sel_tag');

      // Borrar elementos pre-existentes en la lista
      // excepto el elemento por defecto "--Seleccionar--"
      // @ts-ignore
      $select_tag.options.length = 1;

      // Insertar elementos como opciones
      // @ts-ignore
      list_areas.forEach((get_tag) => {
        // Generar un nuevo elemento 'option' para el 'select'
        let $newOptionTag = document.createElement('option');

        // Darle un texto al elemento 'option' correspondiente con la información recibida de la petición.
        $newOptionTag.text = get_tag;

        // Añadir el nuevo elemento 'option' al elemento 'select'
        // @ts-ignore
        $select_tag.options.add($newOptionTag);
      });
    });
});

/**
 * EVENTO: Una vez seleccionada la intención => Hacer visibles los botones para aceptarla
 */
// @ts-ignore
$select_tag.addEventListener('change', function () {
  // @ts-ignore
  document.getElementById('btn_set_tag').hidden = false;
});

/**
 * EVENTO: Una vez establecida la intención => Hacer visibles el botón para aceptar y realizar consulta con los tags establecidos
 */
// @ts-ignore
$btn_set_tag.addEventListener('click', function () {
  // @ts-ignore
  if ($select_tag.value != "--Seleccionar--") {
    let $new_td, $label_param_newRow;

    // Hacer Visible el Botón para hacer petición al servidor.
    // @ts-ignore
    document.getElementById('btn_get_tag').hidden = false;
    // Hacer visible el div de la tabla de atributos del usuario
    // @ts-ignore
    document.getElementById('div_hidden_list_atrib').hidden = false;

    // Cargar texto del elemento seleccionado por el usuario en un label.
    $label_param_newRow = document.createElement("label");
    // @ts-ignore
    $label_param_newRow.textContent = $select_tag.value;

    // Cargar label en un dato de columna
    $new_td = document.createElement('td');
    $new_td.appendChild($label_param_newRow);

    // Cargar dato en Row// Darle Estructura a los Elementos de la Lista de Etiquetas del Usuario
    const $_row = document.createElement('tr');
    $_row.appendChild($new_td);


    // Comandos del Parámetro
    // - Configurar el button
    const $_btnDel_Etiqueta = document.createElement('input');
    $_btnDel_Etiqueta.type = 'submit'
    $_btnDel_Etiqueta.classList.add("smallBtn");
    $_btnDel_Etiqueta.value = "x";
    $_btnDel_Etiqueta.onclick = function () { delParameter(this); };

    // Cargar Botón en una nueva celda
    $new_td = document.createElement("td");
    $new_td.appendChild($_btnDel_Etiqueta);

    // Cargar celda en el mismo Row
    $_row.appendChild($new_td);

    // Cargar Intencion-Row a la Tabla con la lista de Elementos del usuario en la vista del HTML
    // @ts-ignore
    $list_tags.appendChild($_row);
  }
});

/**
 * EVENTO: Después de seleccionar una de las opciones en el select.
 * Carga los parámetros correspondientes al tipo de tag que se ha seleccionado, según lo establezca la definición del servidor para tal Tag
 */
// @ts-ignore
$btn_get_tag.addEventListener('click', function () {
  // @ts-ignore
  if ($select_tag.value != "--Seleccionar--") {
    // Capturamos el elemento de listas de parámetros
    let
      $new_row, $new_td, $new_btn, $label_param_newRow, $value_param_newRow,
      $list_tags = document.getElementById("list_tags"),
      this_url = document.URL.substring(0, document.URL.length - 6).concat('intenciones');
    // @ts-ignore
    for (let indexRow = 0; indexRow < $list_tags.rows.length; indexRow++) {
      // @ts-ignore
      this_url = this_url.concat('/' + $list_tags.rows[indexRow].textContent);
    };
    console.log(this_url);
    // URL de la página actual, elimina el infinitivo 'signup' y lo reemplaza por 'usuarios/all'


    // Petición de datos hacia el servidor
    fetch(this_url)
      // Llevar los datos recibidos al elemento de selección en el HTML
      // Convertir la respuesta en un Objeto JSON
      .then(list_paramsTag => {
        // Convertir la información recibida en JSON
        list_paramsTag.json();

        // Hacer visible el div de la tabla de parámetros
        // @ts-ignore
        document.getElementById('div_hidden_list_param').hidden = false;
      })
      .then(list_paramsTag => {
        // Reiniciar la lista de parámetros en el tabla        
        // @ts-ignore
        const cant_child = $list_tags.children.length;
        for (let index_child = 0; index_child != cant_child; index_child++) {
          // @ts-ignore
          $list_tags.removeChild($list_tags.children[0]);
        };

        // Obtener la lista de los nombres de los parámetros para el Tag seleccionado.
        // @ts-ignore
        Object.values(list_paramsTag).forEach(parameterTag => {
          if (parameterTag != "") {
            // Visualizar datos en tabla
            $new_row = document.createElement('tr');

            // Nombre del Parámetro
            $label_param_newRow = document.createElement("label");
            console.log(parameterTag);
            $label_param_newRow.textContent = parameterTag.params;
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
            $new_td = document.createElement("td");
            $new_td.appendChild($new_btn);
            $new_row.appendChild($new_td);

            // Cargar Row del Parámetro en la vista del HTML
            // @ts-ignore
            $list_atrib.appendChild($new_row);
            cant_tags++;
          }
        });
      });
  }
});

