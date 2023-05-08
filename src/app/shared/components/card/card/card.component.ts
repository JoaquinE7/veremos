import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  nombre:string = ''
  resume: string = ''
  img1: string = ''
  img2: string = ''
  link1: string = ''
  link2: string = ''
}
