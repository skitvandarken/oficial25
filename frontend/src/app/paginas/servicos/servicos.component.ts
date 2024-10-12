import { Component } from '@angular/core';
import { NavbarComponent } from "../../layout/navbar/navbar.component";
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [NavbarComponent, FooterComponent ],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {

}
