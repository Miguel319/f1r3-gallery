import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ImagenesComponent } from "./componentes/imagenes/imagenes.component";
import { CargaComponent } from "./componentes/carga/carga.component";
import { APP_ROUTES } from "./app.routes";
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { environment } from "../environments/environment";
import { NgDropDirective } from "./directivas/ng-drop.directive";
import { LoginComponent } from "./componentes/login/login.component";
import { RegistroComponent } from "./componentes/registro/registro.component";

@NgModule({
  declarations: [
    AppComponent,
    ImagenesComponent,
    CargaComponent,
    NavbarComponent,
    NgDropDirective,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
