var lista = [];


function agregarItemLista() {
    event.preventDefault();


    let itemAgregar = document.getElementById('item').value;
    lista.push(itemAgregar);


    let text = '';


    for (var i = 0; i < lista.length; i++) {


        text += '<input type="checkbox" id="checkbox' + i + '" /> <label for="checkbox' + i + '">' + lista[i] + '</label><br>';


    }


    document.getElementById("ulListado").innerHTML = text;
}


function eliminarItemsLista() {
    lista = [];
    document.getElementById("ulListado").innerHTML = '';
}
