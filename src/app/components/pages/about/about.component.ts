import { Component } from '@angular/core';
import { DatosService } from 'src/app/shared/services/datos.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private datos: DatosService){
    
  }
}
