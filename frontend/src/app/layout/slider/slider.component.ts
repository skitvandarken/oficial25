import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

}
