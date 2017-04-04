import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
// Importar objetos de la librería http
import { HttpModule, Response, RequestOptions, Headers } from '@angular/http';  
// Importar la clase Observable desde la librería rxjs
import { Observable }     from 'rxjs/Observable'; 
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PrimerosComponent } from './primeros/primeros.component';
import { SegundosComponent } from './segundos/segundos.component';
import { PostresComponent } from './postres/postres.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import {routing,appRoutingProviders} from './app.routing';
 


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    ContactoComponent,
    PrimerosComponent,
   SegundosComponent,
   PostresComponent,
   BebidasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
