import { Component, OnInit, Input } from '@angular/core';
import { TipoHabitacion } from '../../modelos/tipoHabitacion';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input() tipoHabitacion: TipoHabitacion;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
