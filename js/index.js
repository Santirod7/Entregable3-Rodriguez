class Pedidos {
    constructor(id, nombreAgrupacion, fecha, elemento, cantidad, descripcionPedido) {
        this.id = id;
        this.nombreAgrupacion = nombreAgrupacion;
        this.fecha = fecha;
        this.elemento = elemento;
        this.cantidad = cantidad;
        this.descripcionPedido = descripcionPedido;
    }
    }

class Elemento {
        constructor(elementoId, nombreElemento, cantidad) {
        this.elementoId = elementoId;
        this.nombreElemento = nombreElemento;
        this.cantidad = cantidad;
    }
    toJSON(){return{
            id: this.elementoId,
            nombreElemento: this.nombreElemento,
            cantidad: this.cantidad,
    }
           
    }
    }


const listadoElementos= [
tenedor = new Elemento(1,"Tenedor",4),
ollas = new Elemento(2,"Ollas",5),
vasos = new Elemento(3,"Vasos",2),
pelotas = new Elemento(4,"Pelotas",3), 
escoba = new Elemento(5,"escoba",6),
detergente = new Elemento(6,"detergente",3), 
tijera = new Elemento(7,"tijera",4), 
pala = new Elemento(8,"pala",1,) ];

console.log(listadoElementos[0].elementoId)
const elementos = cargarElementos();

function guardarElemento(elementos) {
    localStorage.setItem('Elementos', JSON.stringify(elementos.forEach(elemento => elemento.toJSON())));
}

function cargarElementos() {
    const elementosJSON = localStorage.getItem('Elementos');
    if (elementosJSON) {
        const listadoElementos = JSON.parse(elementosJSON);
        return listadoElementos.map(recurso => new Elemento(
            recurso.id,
            recurso.nombreElemento,
            recurso.cantidad,
        ));
    }
    return [];
}
    agregaElementoForm.onsubmit = function (event) {
        event.preventDefault();
        console.log(elementoId.value)
                const nuevoElemento = new Elemento(
            parseInt(elementoId.value),
            nombreElemento.value,
            parseInt(elementoId.value),
            )
    listadoElementos.push(nuevoElemento)
console.log(listadoElementos)
guardarElemento(listadoElementos)
cargarElementos()
renderizarTabla()
}
listadoElementos.forEach(function(numero) {
        console.log(numero)})
  

    function renderizarTabla() {
      let  listadoElementos = JSON.parse(localStorage.getItem('Elementos'))
      console.log(listadoElementos)
    const tbody = document.getElementById('tablaElementos');
    tbody.innerHTML = '';
    listadoElementos.forEach(function(Elemento) {
        console.log(Elemento)
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${Elemento.nombreElemento}</td>
            <td>${Elemento.cantidad}</td>   
        `;
         tbody.appendChild(fila)
    }); }
renderizarTabla()


