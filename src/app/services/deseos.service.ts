import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: any [] = [];

  constructor() {
    console.log('Servicio inicializado');
  }
}
