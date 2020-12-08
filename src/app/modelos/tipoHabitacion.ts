import { ServiciosCollection } from './servicios';

export interface TipoHabitacion {
    nombre:string;
    codigoTipo:string;
    descripcion1:string;
    descripcion2:string;
    numeroBanos:number;
    numeroPersonas:number;
    numeroCamas:number;
    precio:number;
    servicios: ServiciosCollection[];
    urlImagen:string; 
}