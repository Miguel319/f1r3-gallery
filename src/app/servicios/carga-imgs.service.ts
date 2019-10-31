import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { Imagen } from '../modelos/imagen.interface';
import { ArchivoElem } from '../modelos/archivo.elem';

@Injectable({
  providedIn: 'root'
})
export class CargaImgsService {
  private carpetaImgs = 'img';
  
  constructor(private db: AngularFirestore) { }

  cargarImagenesFirebase(imgs: ArchivoElem[]) {
    console.log(imgs);
    
  }
  
  private guardarImagen(imagen: Imagen) {
    this.db.collection(`/${this.carpetaImgs}`)
      .add(imagen);
  }
}
