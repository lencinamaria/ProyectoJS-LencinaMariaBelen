function saludar_usuario (){
    let nombre = prompt ("Ingrese su nombre");
    console.log( "bienvenido/a a Nuestra tienda online:" , nombre);

}



saludar_usuario();

class Producto{

    constructor(nombre , precio , stock){

        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
      
    }

    get_datos(){
        console.log("------------INGRESO PRODUCTO----------");
        console.log("Nombre: ", this.nombre);
        console.log("Precio: ", this.precio); 
        console.log("Stock: ", this.stock);     
        console.log("");

    }


    get_stock(){
        if(this.stock <= 0){
            return false
        }
        else{
            return true
        }
    }


    update_stock( cantidad ){


        if( this.stock >= cantidad){

            this.stock = this.stock - cantidad;
        }
        else{
            console.log("STOCK AGOTADO");
        }
    }

}


let lista_productos = [];


for(let i = 0 ; i < 3 ; i = i + 1){

    let nombre = prompt("PRODUCTO");
    let precio = prompt("PRECIO");
    let stock = prompt("STOCK");

    let producto = new Producto( nombre , precio , stock);

    lista_productos.push(producto);

}


for( let producto of lista_productos){

    producto.get_datos();


}


function buscar_producto( producto ){

    return producto.nombre == compra_usuario
}

let compra_usuario = prompt("Ingrese el nombre del producto que desea comprar");

let resultado_find = lista_productos.find(buscar_producto);


if( resultado_find != undefined ){

    if( resultado_find.get_stock() ){

        let unidades = prompt("Indique la cantidad de unidades");
        resultado_find.update_stock(unidades);
        console.log("RESUMEN PEDIDO");
        
    }
    else{
        console.log("Sin Stock");
    }
}
else{
    console.log("La busqueda no coincide con ningun producto")
}

resultado_find.get_datos();



let productos= prompt( "Metodo de pago sellecione EFECTIVO o TARJETA");

let TARJETA= 0.35;
let EFECTIVO= 0.10;

function calcula_metodopago ( TARJETA , EFECTIVO ){
    if( TARJETA== TARJETA){
        let calcula_metodopago = precio * 0.35;
        return precio
    }
    else if( EFECTIVO== EFECTIVO){
        let calcula_metodopago = precio * 0.10;
        return precio
    }
    
    
}

calcula_metodopago()

console.log("EL TOTAL A ABONAR ES :", precio + calcula_metodopago(TARJETA, EFECTIVO));



