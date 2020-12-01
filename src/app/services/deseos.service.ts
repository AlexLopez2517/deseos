import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: any [] = [];

  constructor() {

    const lista1 = new Lista('Recolectar pidras del infinito');
    const lista2 = new Lista('Heroes adesaparecer');

    this.listas.push(lista1, lista2);

  }
}
