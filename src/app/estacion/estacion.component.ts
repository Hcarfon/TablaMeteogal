import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-estacion',
//   templateUrl: './estacion.component.html',
//   styleUrls: ['./estacion.component.css']
// })
// export class EstacionComponent implements OnInit {
//   idEstacion!: string;
//   estacionData: any;

//   constructor(
//     private route: ActivatedRoute,
//     private http: HttpClient
//   ) {}

  // ngOnInit() {
  //   this.idEstacion = this.route.snapshot.paramMap.get('idEstacion') ?? '';
  //   const url = `https://servizos.meteogalicia.gal/mgrss/observacion/datosDiariosEstacionsMeteo.action?idEstacion=${this.idEstacion}`;

  //   this.http.get(url).subscribe(data => {
  //     this.estacionData = data;
  //   });
  // }
// }

@Component({
  selector: 'app-estacion',
  templateUrl: './estacion.component.html',
  styleUrls: ['./estacion.component.css']
})
export class EstacionComponent implements OnInit {
  idEstacion!: string;
  estacionData: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.idEstacion = params.get('id') ?? '';
      // this.idEstacion = '10157';
      const url = `https://servizos.meteogalicia.gal/mgrss/observacion/datosDiariosEstacionsMeteo.action?idEst=${this.idEstacion}`;
      this.http.get(url).subscribe(data => {
        this.estacionData = data;
      });
    });








  }
}