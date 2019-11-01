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
  estaSobreElem: boolean = false;

  constructor(private cargaImgsService: CargaImgsService) {}

  ngOnInit() {}

  cargarImagenes() {
    this.cargaImgsService.cargarImagenesFirebase(this.archivos);
  }

  mouseSobreElem(evento: Event) {
    console.log(evento);
  }

  limpiarArchivos() {
    this.archivos = [];
  }
}
