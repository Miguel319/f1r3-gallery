import { Routes, RouterModule } from "@angular/router";
import { ImagenesComponent } from "./componentes/imagenes/imagenes.component";
import { CargaComponent } from "./componentes/carga/carga.component";

const RUTAS: Routes = [
  { path: "imagenes", component: ImagenesComponent },
  { path: "carga", component: CargaComponent },
  { path: "**", pathMatch: "full", redirectTo: "imagenes" }
];

export const APP_ROUTES = RouterModule.forRoot(RUTAS);
