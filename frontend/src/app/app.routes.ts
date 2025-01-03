import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ServicosComponent } from './paginas/servicos/servicos.component';
import { HistoriaComponent } from './paginas/historia/historia.component';
import { VerificadorComponent } from './layout/verificador/verificador.component';

export const routes: Routes = [
    {path:'', component: InicioComponent},
    {path:'inicio', component: InicioComponent},
    {path:'servicos', component: ServicosComponent},
    {path:'historia', component: HistoriaComponent},
    {path: 'verificador', component: VerificadorComponent}
    
];
