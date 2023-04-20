import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TableService {
  private baseURL = 'https://servizos.meteogalicia.gal/mgrss/observacion/listaEstacionsMeteo.action'
  // private baseURL = '  https://jsonplaceholder.typicode.com/posts ' 

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.baseURL);
}
}
