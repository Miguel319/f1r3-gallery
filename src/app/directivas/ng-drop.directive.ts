import { ArchivoElem } from "../modelos/archivo.elem";
import {
  Directive,
  Output,
  EventEmitter,
  Input,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[appNgDrop]"
})
export class NgDropDirective {
  @Input() archivos: ArchivoElem[] = [];
  @Output() mouseSobre = new EventEmitter<boolean>();

  constructor() {}

  @HostListener("dragover", ["$event"])
  public onDragEnter(event: Event): void {
    this.mouseSobre.emit(true);
    this.evitarRefresh(event);
  }

  @HostListener("dragleave", ["$event"])
  public onDragLeave(event: Event): void {
    this.mouseSobre.emit(false);
  }

  @HostListener("drop", ["$event"])
  public onDrop(event: Event): void {
    const transferencia = this.getTransferencia(event);

    if (!transferencia) return;

    this.extraerArchivos(transferencia.files);
    this.evitarRefresh(event);
    this.mouseSobre.emit(false);
  }

  private getTransferencia(event: any) {
    return event.dataTransfer
      ? event.dataTransfer
      : event.originalEvent.dataTransfer;
  }

  private extraerArchivos(archivosLista: FileList) {
    for (const propiedad in Object.getOwnPropertyNames(archivosLista)) {
      const archivoTemp = archivosLista[propiedad];

      if (this.archivoPuedeSerCargado(archivoTemp)) {
        const nuevoArchivo = new ArchivoElem(archivoTemp);
        this.archivos.push(nuevoArchivo);
      }
    }

    console.log(this.archivos);
  }

  private evitarRefresh(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }

  private archivoFueDesplegado(nombreArchivo): boolean {
    for (const archivo of this.archivos) {
      if (archivo.nombreArchivo === nombreArchivo) {
        console.log("El archivo ya existe.");
        return true;
      }
    }

    return false;
  }

  private esImagen(tipoArchivo: string): boolean {
    return tipoArchivo === "" || tipoArchivo === undefined
      ? false
      : tipoArchivo.startsWith("image");
  }

  private archivoPuedeSerCargado(archivo: File): boolean {
    return (
      !this.archivoFueDesplegado(archivo.name) && this.esImagen(archivo.type)
    );
  }
}
