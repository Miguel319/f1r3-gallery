import { Routes, RouterModule } from "@angular/router";
import { ImagenesComponent } from "./componentes/imagenes/imagenes.component";
import { CargaComponent } from "./componentes/carga/carga.component";
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const RUTAS: Routes = [
  { path: "imagenes", component: ImagenesComponent },
  { path: "carga", component: CargaComponent },
  { path: "sign-in", component: LoginComponent },
  { path: "sign-up", component: RegistroComponent },
  { path: "**", pathMatch: "full", redirectTo: "imagenes" }
];

export const APP_ROUTES = RouterModule.forRoot(RUTAS);
