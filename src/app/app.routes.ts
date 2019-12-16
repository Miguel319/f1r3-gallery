import { Routes, RouterModule } from "@angular/router";
import { ImagenesComponent } from "./componentes/imagenes/imagenes.component";
import { CargaComponent } from "./componentes/carga/carga.component";
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';

const RUTAS: Routes = [
  { path: "imagenes", component: ImagenesComponent },
  { path: "carga", component: CargaComponent, canActivate: [AuthGuard] },
  { path: "sign-in", component: LoginComponent },
  { path: "sign-up", component: RegistroComponent },
  { path: "**", pathMatch: "full", redirectTo: "imagenes" }
];

export const APP_ROUTES = RouterModule.forRoot(RUTAS);
