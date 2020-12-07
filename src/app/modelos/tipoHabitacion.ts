import { ServiciosCollection } from './servicios';

export interface TipoHabitacion {
    nombre:string;
    codigoTipo:string;
    descripcion:string;
    numeroBanos:number;
    numeroPersonas:number;
    numeroCamas:number;
    precio:number;
    servicios: ServiciosCollection[];
    imagen:string; 
}