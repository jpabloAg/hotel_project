import { Servicios } from './servicios';

export interface TipoHabitacion {
    codigoTipo:string;
    descripcion:string;
    numeroBanos:number;
    numeroPersonas:number;
    numeroCamas:number;
    precio:number;
    servicios: Servicios[]
}