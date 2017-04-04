import {ModuleWithProviders} from "@angular/core";
import {Routes,RouterModule} from "@angular/router"

import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PrimerosComponent } from './primeros/primeros.component';
import { SegundosComponent } from './segundos/segundos.component';
import { PostresComponent } from './postres/postres.component';
import { BebidasComponent } from './bebidas/bebidas.component';
const appRoutes:Routes=[
{
	path:'',
	redirectTo:'/',
	pathMatch:'full',	
},
{path:'',component: InicioComponent},

{path:'nosotros',component: NosotrosComponent},

{path:'contacto',component: ContactoComponent},
{path:'primeros',component: PrimerosComponent},
{path:'segundos',component: SegundosComponent},

{path:'postres',component: PostresComponent},
{path:'bebidas',component: BebidasComponent},
];
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);