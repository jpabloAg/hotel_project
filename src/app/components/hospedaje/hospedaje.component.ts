import { Component, OnInit } from '@angular/core';
import { TipoHabitacion } from 'src/app/modelos/tipoHabitacion';
import { HospedajeService } from '../../servicios/hospedaje.service';


@Component({
  selector: 'app-hospedaje',
  templateUrl: './hospedaje.component.html',
  styleUrls: ['./hospedaje.component.css']
})
export class HospedajeComponent implements OnInit {

  public tipoHabitaciones: TipoHabitacion[];
  public tipoHabitaciones2: TipoHabitacion[] = [];
  constructor(private _hospedajeService: HospedajeService) {
    this.tipoHabitaciones2.push({
      codigoTipo: '1',
      descripcion: 'Familiar',
      numeroBanos: 2,
      numeroPersonas: 4,
      numeroCamas: 3,
      precio: 500000,
      servicios: [
        { codigoServicio: '04', servicio: 'spa' },
        { codigoServicio: '05', servicio: 'television' }
      ]
    });
    this.tipoHabitaciones2.push({
      codigoTipo: '2',
      descripcion: 'Pareja',
      numeroBanos: 1,
      numeroPersonas: 2,
      numeroCamas: 1,
      precio: 250000,
      servicios: [
        { codigoServicio: '04', servicio: 'spa' },
        { codigoServicio: '05', servicio: 'television' }
      ]
    });
    this.tipoHabitaciones2.push({
      codigoTipo: '2',
      descripcion: 'Pareja',
      numeroBanos: 1,
      numeroPersonas: 2,
      numeroCamas: 1,
      precio: 250000,
      servicios: [
        { codigoServicio: '04', servicio: 'spa' },
        { codigoServicio: '05', servicio: 'television' }
      ]
    });
    this.tipoHabitaciones2.push({
      codigoTipo: '2',
      descripcion: 'Pareja',
      numeroBanos: 1,
      numeroPersonas: 2,
      numeroCamas: 1,
      precio: 250000,
      servicios: [
        { codigoServicio: '04', servicio: 'spa' },
        { codigoServicio: '05', servicio: 'television' }
      ]
    });
    this.tipoHabitaciones2.push({
      codigoTipo: '2',
      descripcion: 'Pareja',
      numeroBanos: 1,
      numeroPersonas: 2,
      numeroCamas: 1,
      precio: 250000,
      servicios: [
        { codigoServicio: '04', servicio: 'spa' },
        { codigoServicio: '05', servicio: 'television' }
      ]
    });
    this.tipoHabitaciones2.push({
      codigoTipo: '2',
      descripcion: 'Pareja',
      numeroBanos: 1,
      numeroPersonas: 2,
      numeroCamas: 1,
      precio: 250000,
      servicios: [
        { codigoServicio: '04', servicio: 'spa' },
        { codigoServicio: '05', servicio: 'television' }
      ]
    });
    this.tipoHabitaciones2.push({
      codigoTipo: '2',
      descripcion: 'Pareja',
      numeroBanos: 1,
      numeroPersonas: 2,
      numeroCamas: 1,
      precio: 250000,
      servicios: [
        { codigoServicio: '04', servicio: 'spa' },
        { codigoServicio: '05', servicio: 'television' }
      ]
    });
  }

  ngOnInit(): void {
    /*this._hospedajeService.getHospedajes().subscribe(
      response => {
        this.tipoHabitaciones = response;
        console.log(this.tipoHabitaciones);
      }
    )*/
  }

}
