
//take the elements to work
const botonAdd = document.getElementById('botonAgregar')
const listaElementos = document.getElementById('listaElementos');


botonAdd.addEventListener('click', function () {
    // take element input
    const entrada = document.getElementById('entradaDatos').value;
    //conditional to evaluate input empty
    if (entrada !== '') {
        //create elementi type li
        const listAdd = document.createElement('li')
        //create element type button
        const buttonEliminar = document.createElement('button')
        //adding class
        listAdd.classList.add('listaelement')
        //make appendchil to listaElementos id
        listaElementos.appendChild(listAdd);
        //same to button
        listaElementos.appendChild(buttonEliminar)
        //put text to button delete
        buttonEliminar.innerText = '-'
        //adding a class 
        buttonEliminar.classList.add('deletebutton')
        buttonEliminar.addEventListener('click', function () {
            //on delete adding a class with a seTimeout of 1.5sec to apply animation and after delete
            listAdd.classList.add('cerrar')
            buttonEliminar.classList.add('desaparecer')
            setTimeout(function () {
                listAdd.remove();
                buttonEliminar.remove()
                console.log('borar')
            }, 1500)
        })

        listAdd.innerText = entrada;

        document.getElementById('entradaDatos').value = '';
    } else {
        //later adding a modal alert by now the field required in html restrict from loading empty
    }

})