import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HospedajeComponent } from './components/hospedaje/hospedaje.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hospedajes', component: HospedajeComponent },
  { path: '**', component: HomeComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
