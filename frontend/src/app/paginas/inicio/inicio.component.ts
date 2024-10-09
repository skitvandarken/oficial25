import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../layout/navbar/navbar.component";
import { SliderComponent } from '../../layout/slider/slider.component';
import { CardsComponent } from '../../layout/cards/cards.component';
import { VerificadorComponent } from '../../layout/verificador/verificador.component';
import { Video1Component } from '../../layout/video1/video1.component';
import { AudiovisualComponent } from '../../layout/audiovisual/audiovisual.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    RouterLink,
    NavbarComponent,
    SliderComponent,
    CardsComponent,
    VerificadorComponent,
    Video1Component,
    AudiovisualComponent
],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
