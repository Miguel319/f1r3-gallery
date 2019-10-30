import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImagenesComponent } from './componentes/imagenes/imagenes.component';
import { CargaComponent } from './componentes/carga/carga.component';
import { APP_ROUTES } from './app.routes';
import { NavbarComponent } from './componentes/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagenesComponent,
    CargaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
