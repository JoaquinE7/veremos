import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  private datos: jsjsjs[] = [
    {
      nombre: 'Joaquin Miguel Esquivel Meza',
      img1: '',
      img2: '',
      resume: '',
      linkF: '',
      linkI: '',
    },
    {
      nombre: 'Emmanuel Caleb Perez Estrada',
      img1: '',
      img2: '',
      resume: '',
      linkF: '',
      linkI: '',
    },
    {
      nombre: 'Ethienne Alejandro Lopez Olvera',
      img1: '',
      img2: '',
      resume: '',
      linkF: '',
      linkI: '',
    },
    {
      nombre: 'Frank Elgar Delgado Araiza',
      img1: '',
      img2: '',
      resume: '',
      linkF: '',
      linkI: '',
    },
    {
      nombre: 'Jose Gerardo Castro Benitez',
      img1: '',
      img2: '',
      resume: '',
      linkF: '',
      linkI: '',
    },
  ];
}

export interface jsjsjs {
  nombre: string;
  img1: string;
  img2: string;
  resume: string;
  linkF: string;
  linkI: string;
}
