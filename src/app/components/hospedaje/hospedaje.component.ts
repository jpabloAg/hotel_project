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
      nombre:'Standard Room',
      codigoTipo: '1',
      descripcion1: 'Nuestras habitaciones estándar son la combinación perfecta de funcionalidad y comodidad.',
      descripcion2:'Funcional y confortable. Siéntese y disfrute de una de nuestras nuevas habitaciones estándar. Con vistas al patio, decoración elegante y luz natural, nuestras habitaciones estándar son la combinación perfecta de funcionalidad y comodidad. Ideal para quienes viajan por negocios o por placer.',
      numeroBanos: 1,
      numeroPersonas: 1,
      numeroCamas: 1,
      precio: 150000,
      servicios: [
        { codigoServicio: '1', servicio: 'Aire' },
        { codigoServicio: '2', servicio: 'Tv' },
        { codigoServicio: '3', servicio: 'WiFi' },
        { codigoServicio: '4', servicio: 'Telefono' },
        { codigoServicio: '5', servicio: 'Toalla' }
      ],
      urlImagen:"../../../assets/hospedaje/standarRoom.jpg"
    });
    this.tipoHabitaciones2.push({
      nombre:'Junior Suite',
      codigoTipo: '2',
      descripcion1: 'Nuestras Junior Suites ofrecen impresionantes vistas del horizonte de la ciudad.',
      descripcion2:'Lujo pagable. Nuestras Junior Suites son la opción perfecta si busca un lujo extra. Las Junior Suites ofrecen el espacio adicional que necesita para relajarse y disfrutar de las impresionantes vistas del horizonte de la ciudad.',
      numeroBanos: 1,
      numeroPersonas: 2,
      numeroCamas: 2,
      precio: 250000,
      servicios: [
        { codigoServicio: '1', servicio: 'Aire' },
        { codigoServicio: '2', servicio: 'Tv' },
        { codigoServicio: '3', servicio: 'WiFi' },
        { codigoServicio: '4', servicio: 'Telefono' },
        { codigoServicio: '5', servicio: 'Toalla' }
      ],
      urlImagen:"../../../assets/hospedaje/juniorRoom.jpg"
    });
    this.tipoHabitaciones2.push({
      nombre:'Superior Room',
      codigoTipo: '3',
      descripcion1: 'Nuestras habitaciones superiores son cómodas, espaciosas y elegantes.',
      descripcion2:'Sencillez elegante. Nuestras habitaciones superiores le brindan el espacio y la privacidad que necesita para trabajar o divertirse mientras viaja. Las espaciosas habitaciones incluyen una sala de estar íntima, una estación de trabajo de negocios y vistas al patio. Con todas las comodidades habituales, nuestras habitaciones superiores también incluyen un periódico diario y botellas de agua.',
      numeroBanos: 1,
      numeroPersonas: 1,
      numeroCamas: 1,
      precio: 350000,
      servicios: [
        { codigoServicio: '1', servicio: 'Aire' },
        { codigoServicio: '2', servicio: 'Tv' },
        { codigoServicio: '3', servicio: 'WiFi' },
        { codigoServicio: '4', servicio: 'Telefono' },
        { codigoServicio: '5', servicio: 'Toalla' },
        { codigoServicio: '6', servicio: 'Tina' },
        { codigoServicio: '7', servicio: 'Espacio de Trabajo' },
        { codigoServicio: '8', servicio: 'MiniBar' },
      ],
      urlImagen:"../../../assets/hospedaje/superiorRoom.jpg"
    });
    this.tipoHabitaciones2.push({
      nombre:'Standard Family Room',
      codigoTipo: '4',
      descripcion1: 'Calidez y sencilles para unas buenas vacaciones en familia',
      descripcion2:'Nuestras habitaciones familiares son la combinación perfecta para que tanto niños como adultos disfruten de su estadía de la manera mas placentera posible, con espacios comodos y divertidos como el hogar.',
      numeroBanos: 2,
      numeroPersonas: 5,
      numeroCamas: 4,
      precio: 550000,
      servicios: [
        { codigoServicio: '1', servicio: 'aire' },
        { codigoServicio: '2', servicio: 'tv' },
        { codigoServicio: '3', servicio: 'wifi' },
        { codigoServicio: '4', servicio: 'telefono' },
        { codigoServicio: '5', servicio: 'toalla' }
      ],
      urlImagen:"../../../assets/hospedaje/familyRoom.jpg"
    });
    this.tipoHabitaciones2.push({
      nombre:'Standar Couple Room',
      codigoTipo: '5',
      descripcion1: 'Perfectas para parejas que buscan comodidad y tranquilidad',
      descripcion2:'Funcional y confortable. Siéntese y disfrute de una de nuestras nuevas habitaciones estándar para pareja, dejese llevar y contemple hermosas vistas, con una tranquilidad y comodidia inigualable.',
      numeroBanos: 1,
      numeroPersonas: 2,
      numeroCamas: 1,
      precio: 300000, 
      servicios: [
        { codigoServicio: '1', servicio: 'Aire' },
        { codigoServicio: '2', servicio: 'Tv' },
        { codigoServicio: '3', servicio: 'WiFi' },
        { codigoServicio: '4', servicio: 'Telefono' },
        { codigoServicio: '5', servicio: 'Toalla' },
        { codigoServicio: '6', servicio: 'Tina' }
      ],
      urlImagen:"../../../assets/hospedaje/coupleRoom.jpg"
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
