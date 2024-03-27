
function crearServicio (producto, areaServicio, clienteTipo, precio, pack) {
   this.producto = producto;
   this.areaServicio = areaServicio;
   this.clienteTipo = clienteTipo;
   this.precio = precio;
   this.pack = pack;
}

//Para crear un Combo de Servicios personalizado para determinado cliente
const prodPersonalizado1 = new crearServicio ("Admin. de Redes Soc. Anual", "Marketing digital", "C", 750000, "Premium");
console.log(prodPersonalizado1) ;

//Array de Objetos
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
        precio: 114000, 
        pack: "Advance", 
     },
     { 
        producto: "Manual de Usos de Marca", 
        areaServicio: "Diseño Gráfico", 
        clienteTipo: "B", 
        precio: 119000, 
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
		precio: 77000,
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
        precio: 93000, 
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
        precio: 112000, 
        pack: "Basic", 
     },
     { 
        producto: "Contenido Redes B", 
        areaServicio: "Marketing Digital", 
        clienteTipo: "B", 
        precio: 114000, 
        pack: "Advance", 
     },
     { 
        producto: "Contenido Redes C", 
        areaServicio: "Marketing Digital", 
        clienteTipo: "C", 
        precio: 116000, 
        pack: "Premium", 
     }
];


//La idea es mostrar aca los "productos" u Objetos para despues por medio del prompt, el usuario pueda elegir un producto
   servicios.forEach((prodJtDg) => {
       console.log(prodJtDg.producto);
       console.log(prodJtDg.precio);
       console.log(prodJtDg.areaServicio);
   });

let servSeleccionado = prompt ("Ingrese Producto/Servicio a contratar");
console.log(servicios.find((servicio) => servicio.producto === servSeleccionado));


