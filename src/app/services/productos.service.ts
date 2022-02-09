// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Producto } from '../interfaces/producto.interface';


// @Injectable({
//   providedIn: 'root'

// })

// export class ProductosService {
  
//   cargando = true;
//   productos: Producto[] = [];
//   productosFiltrado: Producto[] = [];


//   constructor(private http: HttpClient) {

//     this.cargarProductos();
//   }

//   getProducto(id: string) {

//     return this.http.get(`https://angular-html-75495-default-rtdb.firebaseio.com/productos/${id}.json`);
//   }

//   buscarProducto(termino: string) {

//     if( this.productos.length === 0 ){
//       //cargar productos
//       this.cargarProductos().then( () => {
//         //ejecutar despues de tener los productos
//         //aplicar filtro
//         this.filtrarProductos( termino );
//         //esto se hace porque la carga de productos tarda mas que buscarlos en la lupa entonces ponemos un filtro
//         //de que si todavia no estan cargados no haga la busqueda
//       });
//     }else{
//       //aplicar el filtro
//       this.filtrarProductos( termino );
//     }

//     this.productosFiltrado = this.productos.filter(producto => {

//       return true;
//     })
//   }


//   private cargarProductos(){

//     return new Promise<void>(( resolve, reject ) => {

//       this.http.get<Observable<Producto[]>>('https://angular-html-75495-default-rtdb.firebaseio.com/productos_idx.json')
//         .subscribe((resp: any) => {
//           // resp: Producto[]
//           console.log(resp);
//           this.productos = resp,
//             this.cargando = false;
//             resolve();

//         });

//     })

// }

// // private filtrarProductos( termino:string ){

// //   console.log(this.productos);

// //   this.productos.forEach( prod => {

// //     if( prod.categoria.indexOf( termino) >=0 )  {    //( prod.categoria?.indexOf( termino) >=0 )

// //       this.productosFiltrado.push ( prod);

// //     }
// //   });

// private filtrarProductos( termino: string ) {

//   // console.log(this.productos);
//   this.productosFiltrado = [];

//   termino = termino.toLocaleLowerCase();

//   this.productos.forEach( prod => {

//     const tituloLower = prod.titulo.toLocaleLowerCase();

//     if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0  ) {
//       this.productosFiltrado.push( prod );
//     }

//   });


// }


// }
// }




import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];


  constructor( private http: HttpClient ) {

    this.cargarProductos();

  }


  private cargarProductos() {

    return new Promise<void>(  ( resolve, reject ) => {

      this.http.get('https://angular-html-25cf9.firebaseio.com/productos_idx.json')
          .subscribe( (resp: any) => {
            this.productos = resp;
            this.cargando = false;
            resolve();
          });

    });

  }

  getProducto( id: string ) {

    return this.http.get(`https://angular-html-25cf9.firebaseio.com/productos/${ id }.json`);

  }

  buscarProducto( termino: string ) {


    if ( this.productos.length === 0 ) {
      // cargar productos
      this.cargarProductos().then( () => {
        // ejecutar después de tener los productos
        // Aplicar filtro
        this.filtrarProductos( termino );
      });

    } else {
      // aplicar el filtro
      this.filtrarProductos( termino );
    }


  }

  private filtrarProductos( termino: string ) {

    // console.log(this.productos);
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0  ) {
        this.productosFiltrado.push( prod );
      }

    });


  }

}
