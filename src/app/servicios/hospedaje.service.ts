import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoHabitacion } from '../modelos/tipoHabitacion';

@Injectable({
  providedIn: 'root'
})
export class HospedajeService {
  url:string = 'http://localhost:8080/reservas';
  constructor(private _http:HttpClient) { }

  public getHospedajes(){
    return this._http.get<TipoHabitacion[]>(`${this.url}/tiposHabitaciones`);
  }
}
