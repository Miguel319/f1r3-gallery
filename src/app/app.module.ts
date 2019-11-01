import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ImagenesComponent } from "./componentes/imagenes/imagenes.component";
import { CargaComponent } from "./componentes/carga/carga.component";
import { APP_ROUTES } from "./app.routes";
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";

import { environment } from "../environments/environment";
import { NgDropDirective } from './directivas/ng-drop.directive';

@NgModule({
  declarations: [
    AppComponent,
    ImagenesComponent,
    CargaComponent,
    NavbarComponent,
    NgDropDirective
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
