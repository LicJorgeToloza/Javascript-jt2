
function crearServicio (producto, areaServicio, clienteTipo, precio, pack) {
   this.producto = producto;
   this.areaServicio = areaServicio;
   this.clienteTipo = clienteTipo;
   this.precio = precio;
   this.pack = pack;
}

const prodPersonalizado1 = new crearServicio ("Admin. de Redes Soc. Anual", "Marketing digital", "C", 750000, "Premium");

const servicios = [
	{
		producto: "Diseño de Marca",
		areaServicio: "Diseño Gráfico",
		clienteTipo: "A",
		precio: 90000,
		pack: "Basic",
	},
	{ 
        producto: "Diseño de Marca", 
        areaServicio: "Diseño Gráfico", 
        clienteTipo: "B", 
        precio: 115000, 
        pack: "Advance", 
     },
     { 
        producto: "Manual de Usos de Marca", 
        areaServicio: "Diseño Gráfico", 
        clienteTipo: "B", 
        precio: 115000, 
        pack: "Advance", 
     },
	{
		producto: "Diseño de Marca y Usos",
		areaServicio: "Diseño Gráfico",
		clienteTipo: "C",
		precio: 155000,
		pack: "Premium",
	},
    {
		producto: "Vectorizacion o Redibujo",
		areaServicio: "Diseño Gráfico",
		clienteTipo: "A",
		precio: 70000,
		pack: "Basic",
	},
	{ 
        producto: "Gigantografia Carteleria", 
        areaServicio: "Diseño Gráfico", 
        clienteTipo: "B", 
        precio: 115000, 
        pack: "Advance", 
     },
     { 
        producto: "MD Redes 2PxS", 
        areaServicio: "Marketing Digital", 
        clienteTipo: "A", 
        precio: 65000, 
        pack: "Basic", 
     },
     { 
        producto: "MD Redes 3PxS", 
        areaServicio: "Marketing Digital", 
        clienteTipo: "B", 
        precio: 70000, 
        pack: "Basic", 
     },
     { 
        producto: "MD Redes 5PxS", 
        areaServicio: "Marketing Digital", 
        clienteTipo: "B", 
        precio: 90000, 
        pack: "Advance", 
     },
     { 
        producto: "MD Redes 5PxS", 
        areaServicio: "Marketing Digital", 
        clienteTipo: "C", 
        precio: 110000, 
        pack: "Premium", 
     },
     { 
        producto: "MD Redes 2PxS", 
        areaServicio: "Marketing Digital", 
        clienteTipo: "C", 
        precio: 80000, 
        pack: "Premium", 
     },
     { 
        producto: "Contenido Redes A", 
        areaServicio: "Marketing Digital", 
        clienteTipo: "A", 
        precio: 110000, 
        pack: "Basic", 
     },
     { 
        producto: "Contenido Redes B", 
        areaServicio: "Marketing Digital", 
        clienteTipo: "B", 
        precio: 110000, 
        pack: "Advance", 
     },
     { 
        producto: "Contenido Redes C", 
        areaServicio: "Marketing Digital", 
        clienteTipo: "C", 
        precio: 110000, 
        pack: "Premium", 
     }
];

console.log(servicios)

//La idea es mostrar aca los "productos" u Objetos para despues por medio del prompt, el usuario pueda filtrar segun area
function mostrarProductos(servDisenioJt){
   servDisenioJt.forEach(prodJtDg => {
       console.log(prodJtDg.producto + ' - ' + prodJtDg.areaServicio + ' - ' + prodJtDg.clienteTipo + ' - $' + prodJtDg.precio + prodJtDg.pack);

let areaServicio = prompt("Ingrese Area");

function filtroArea(servicio){
      if(producto){
          return servicio.pack === pack
      }
      return servicio;
}

filtroArea()



function filtroServ(){
          const resultado = servicios.filter(filtroArea);
          if(resultado.length>0){
              mostrarProductos(resultado)
          }else {
              alert("El area ingresada no existe.")
          }
       }
filtroServ()       