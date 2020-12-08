import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/servicios/reserva.service';
import { Reserva } from '../../modelos/reserva';
@Component({
  selector: 'app-consulta-reserva',
  templateUrl: './consulta-reserva.component.html',
  styleUrls: ['./consulta-reserva.component.css']
})
export class ConsultaReservaComponent implements OnInit {
  public codigoReserva:string;
  public reserva:Reserva;
  constructor(private _reservaService:ReservaService) { 
    this.codigoReserva = '';
  }

  ngOnInit(): void {
  }

  buscarReserva(){
    this._reservaService.buscarReserva(this.codigoReserva).subscribe(
      response => {
        this.reserva = response;
      }
    )
  }
}
