class Pedidos {
    constructor(id, nombreAgrupacion, fecha, horainicio,horafin, elemento , cantidad, descripcionPedido) {
        this.id = id;
        this.nombreAgrupacion = nombreAgrupacion;
        this.horainicio = horainicio;
        this.horafin = horafin;
        this.fecha = fecha;
        this.descripcionPedido = descripcionPedido;
        this.elemento = elemento;
        this.cantidad = cantidad;
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

const pedidoHecho = []
guardarElemento(listadoElementos)

function guardarElemento(elementos) {
    localStorage.setItem('Elementos', JSON.stringify(elementos.map(elemento => elemento.toJSON())));
}
function getElementoPedidos() {
   let  listadoElementos = JSON.parse(localStorage.getItem('Elementos'))
    return listadoElementos.map(recurso=> recurso.id)
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

const elementos = cargarElementos();
    agregaElementoForm.onsubmit = function (event) {
        event.preventDefault();
       const elementoId = document.getElementById('elementoId')
                const nuevoElemento = new Elemento(
            parseInt(elementoId.value),
            nombreElemento.value,
            parseInt(cantidad.value),
            )
 listadoElementos.push(nuevoElemento)
 guardarElemento(listadoElementos)
cargarElementos()
renderizarTabla()
renderizarElementos()
this.reset()
}
  
    function renderizarTabla() {
      let  listadoElementos = JSON.parse(localStorage.getItem('Elementos'))
    const tbody = document.getElementById('tablaElementos');
    tbody.innerHTML = '';
    listadoElementos.forEach(function(Elemento) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${Elemento.nombreElemento}</td>
            <td>${Elemento.cantidad}</td>   
        `;
         tbody.appendChild(fila)
    }); }

    function renderizarElementos(Elementos) {
    const busquedaElemento = document.getElementById('selecElementos');
    busquedaElemento.innerHTML = '';
    Elementos.forEach(function(Elemento) {
        const panel = document.createElement('div');
        panel.className = 'col-lg-3 col-5 mx-1 card border-success mb-3'
        panel.innerHTML = `
          <div class=" card-header text-center px-0 bg-transparent border-success"><h5>${Elemento.nombreElemento}</h5></div>
  <div class="card-body p-0 text-success">
    <p class="card-text my-0 text-center">Cantidad</p>
    <p class="card-text my-0 text-center" id='cant'>${Elemento.cantidad}</p>
  </div>
  <div class="card-footer d-flex justify-content-center bg-transparent border-success">
  <button class="btn btn-success" id="${Elemento.elementoId}" >Cargar</button>
  </div>
        `;
         busquedaElemento.appendChild(panel)
    }); }
renderizarElementos(listadoElementos)

renderizarTabla()


const elementoBusqueda = document.getElementById("busquedaElemento")

function handleSearch() {
    const query = document.getElementById("busquedaElemento").value.toLowerCase();
    const filtroElementos = listadoElementos.filter(listadoElementos => listadoElementos.nombreElemento.toLowerCase().startsWith(query));
    renderizarElementos(filtroElementos)
}

function resultados(listadoElementos) {
   listadoElementos.forEach(function(Elemento) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${Elemento.nombreElemento}</td>
            <td>${Elemento.cantidad}</td>   
        `;
         tbody.appendChild(fila)
    })
}
elementoBusqueda.addEventListener("input", handleSearch);

const listaPedidos = document.querySelector("#modalBusqueda")
const contenidoPedidos = document.querySelector("#contenidoPedidos")
let objetosPedidos = [];

document.addEventListener('DOMContentLoaded', function(){
eventListener()
})

function eventListener(){
listaPedidos.addEventListener('click', getElementosPedidos)
}

function getElementosPedidos(e){
    if(e.target.classList.contains('btn-success')){
     const pedidoHtml = e.target.parentElement.parentElement
     cargarPedido(pedidoHtml)
    }
}

function cargarPedido(elemento){
const datosElemento = {
    objeto: elemento.querySelector('h5').textContent,
    cantidad: parseInt(elemento.querySelector('#cant').textContent)
}
 objetosPedidos = [...objetosPedidos,datosElemento]
renderizarElementosPedidos()
}

function renderizarElementosPedidos(){
limpiarPedidos()
    objetosPedidos.forEach(function(pedido) {
        const panel = document.createElement('div');
        panel.className = 'col-lg-3 col-5 mx-1 card border-success mb-3'
        panel.innerHTML = `
          <div class=" card-header text-center px-0 bg-transparent border-success"><h5>${pedido.objeto}</h5></div>
  <div class="card-body p-0 text-success">
    <p class="card-text my-0 text-center">Cantidad</p>
    <p class="card-text my-0 text-center" id='cant'>${pedido.cantidad}</p>
    <input type="number"
          class="form-control mb-2"
          placeholder="¿Cuantos necesita?"
        />
  </div>
        `;
         contenidoPedidos.appendChild(panel)
    })
}

function limpiarPedidos(){
contenidoPedidos.innerHTML = ''
}


    enviarPedidoForm.onsubmit = function (event) {
        event.preventDefault();
       
}
