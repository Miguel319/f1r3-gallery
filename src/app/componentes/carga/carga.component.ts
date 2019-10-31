import { Component, OnInit } from "@angular/core";
import { ArchivoElem } from "../../modelos/archivo.elem";
import { CargaImgsService } from "../../servicios/carga-imgs.service";

@Component({
  selector: "app-carga",
  templateUrl: "./carga.component.html",
  styleUrls: ["./carga.component.css"]
})
export class CargaComponent implements OnInit {
  archivos: ArchivoElem[] = [];

  constructor(private cargaImgsService: CargaImgsService) {}

  ngOnInit() {}

  cargarImagenes() {
    this.cargaImgsService.cargarImagenesFirebase(this.archivos); 
  }
}
