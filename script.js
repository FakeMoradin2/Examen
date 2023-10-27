var data;

async function conex() {
    var url = "http://localhost:3000/";
    await fetch(url, { headers: { "authorization": "123456" } })
        .then(response => response.json())
        .then(responseData => {
            data = responseData;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function show() {
    var clases = document.getElementById("clases").value;
    var div = document.getElementById("main");

    var h2 = document.createElement("h2");
    h2.textContent = data[clases].clase;
    div.appendChild(h2);

    var fuerza = document.createElement("p");
    fuerza.innerHTML = "Fuerza: " + data[clases].atributos.fuerza;
    div.appendChild(fuerza);

    var destreza = document.createElement("p");
    destreza.innerHTML = "Destreza: " + data[clases].atributos.destreza;
    div.appendChild(destreza);

    var inteligencia = document.createElement("p");
    inteligencia.innerHTML = "Inteligencia: " + data[clases].atributos.inteligenia;
    div.appendChild(inteligencia);

    var carisma = document.createElement("p");
    carisma.innerHTML = "Carisma: " + data[clases].atributos.carisma;
    div.appendChild(carisma);

    var suerte = document.createElement("p");
    suerte.innerHTML = "Suerte: " + data[clases].atributos.suerte;
    div.appendChild(suerte);

    //Seleccion de armas
    var armas = document.createElement("select");

    var opciones = data[clases].Armas;

    for (var i = 0; i < opciones.length; i++) {
    var nuevaOpcion = document.createElement("option");
    nuevaOpcion.setAttribute("value", opciones[i]);
    var opcionText = document.createTextNode(opciones[i]);
    nuevaOpcion.appendChild(opcionText);
    armas.appendChild(nuevaOpcion);
    }

    div.appendChild(armas);


/*   svar armas = document.createElement("p");
    armas.innerHTML = "Armas: " + data[clases].Armas;
    div.appendChild(armas);
*/

}

function limpiar(){
    var div = document.getElementById("main");
    div.innerHTML = " ";
}