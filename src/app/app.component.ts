import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from './table.service';
import { Router } from '@angular/router';



export interface UserData {

  altitude: number;
  concello: string;
  estacion: string;
  IdEstacion: number;
  lat: number;
  lon: number;
  provincia: string;
  utmx: number;
  utmy: number;



}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TablaEjer';
  displayedColumns: string[] = ['estacion', 'provincia' ,'concello', 'altitude',  'lat', 'lon']
  dataSource!: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  posts:any;

  constructor(private service: TableService, private router: Router){

    this.service.getData().subscribe(data => {

      // console.log(data);

      const arrayguapo = JSON.parse(JSON.stringify(data));
      const listaEstacionsMeteoarray = arrayguapo.listaEstacionsMeteo;

      console.log(listaEstacionsMeteoarray);
      
      this.posts = listaEstacionsMeteoarray;

      this.dataSource = new MatTableDataSource(this.posts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });

  } 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  redirectToEstacion(idEstacion: string) {
    
    this.router.navigate(['/estacion', {id: idEstacion}]);
  }
}
