import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

// @Injectable({
//   providedIn: 'root'
// })
// export class InfoPaginaService {

//   info: InfoPagina={};
//   cargada = false;

//   equipo: any [] = [];

//   constructor( private http: HttpClient) { 

//     this.cargarInfo();
//     this.cargarEquipo();
//   }

//   private cargarInfo(){

//     // console.log('Servicio de infoPagina listo');

//     //leer el archivo JSON
//     this.http.get( 'assets/data/data-pagina.json ')
//     .subscribe ((resp: InfoPagina) => {

//       this.cargada = true;
//       this.info = resp;
//     });
//   }

//   private cargarEquipo(){

//     // console.log('Servicio de infoPagina listo');

//     //leer el archivo JSON
//     this.http.get( 'https://angular-html-75495-default-rtdb.firebaseio.com/equipo.json ')
//     .subscribe ((resp: any) => {

//       this.equipo = resp;
//     })
//   }
// }


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;


  equipo: any[] = [];

  constructor(private http: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      });
  }


  private cargarEquipo() {

    // Leer el archivo JSON
    this.http.get('https://angular-html-25cf9.firebaseio.com/equipo.json')
      .subscribe((resp: any) => {
      // .subscribe( (resp: any[]) => {

        this.equipo = resp;
        // console.log(resp);
      });


    // this.equipo = resp
  }

}