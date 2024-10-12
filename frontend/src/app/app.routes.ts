import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ServicosComponent } from './paginas/servicos/servicos.component';
import { ProdutosComponent } from './paginas/produtos/produtos.component';
import { HistoriaComponent } from './paginas/historia/historia.component';

export const routes: Routes = [
    {path:'', component: InicioComponent},
    {path:'servicos', component: ServicosComponent},
    {path:'produtos', component: ProdutosComponent},
    {path:'historia', component: HistoriaComponent}
    
];
