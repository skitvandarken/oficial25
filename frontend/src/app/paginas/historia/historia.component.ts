import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { Slider2Component } from '../../layout/slider2/slider2.component';

@Component({
  selector: 'app-historia',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    Slider2Component
  ],
  templateUrl: './historia.component.html',
  styleUrl: './historia.component.css'
})
export class HistoriaComponent {

}
