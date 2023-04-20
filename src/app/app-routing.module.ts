import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstacionComponent } from './estacion/estacion.component';


const routes: Routes = [
  {path: "estacion", component: EstacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
