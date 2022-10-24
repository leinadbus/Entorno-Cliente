class Productos {
    constructor(nombre, categoria, unidades, precio){
        this.nombre=nombre;
        this.categoria=categoria;
        this.unidades=unidades;
        this.precio=precio;
    }

    importe () {
        let importe= this.unidades*this.precio;
        return (importe);
    }

    getInfo () {
        return this.nombre + ' (' + this.categoria + '): Unidades ' + this.unidades
        + ' x ' + this.precio +'€ = ' + this.importe() + '€' ;
        
    }

}