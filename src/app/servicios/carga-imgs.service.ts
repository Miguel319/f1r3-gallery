import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { AngularFirestore } from "angularfire2/firestore";
import { Imagen } from "../modelos/imagen.interface";
import { ArchivoElem } from "../modelos/archivo.elem";

@Injectable({
  providedIn: "root"
})
export class CargaImgsService {
  private carpetaImgs = "img";

  constructor(private db: AngularFirestore) {}

  async cargarImagenesFirebase(imgs: ArchivoElem[]) {
    const storageRef = firebase.storage().ref();

    for (const img of imgs) {
      img.estaSubiendo = true;

      if (img.progreso >= 100) continue;

      const uploadTask: firebase.storage.UploadTask = storageRef
        .child(`${this.carpetaImgs}/${img.nombreArchivo}`)
        .put(img.archivo);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) =>
          (img.progreso =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100),
        err => console.error("Error al subir", err),
        async () => {
          console.log("Imagen cargada correctamente!");
          img.url = await uploadTask.snapshot.ref.getDownloadURL();
          img.estaSubiendo = false;

          let nImg: Imagen = {
            nombre: img.nombreArchivo,
            url: img.url
          };

          this.guardarImagen(nImg);
        }
      );
    }
  }

  private guardarImagen(imagen: Imagen) {
    this.db.collection(`/${this.carpetaImgs}`).add(imagen);
  }
}
