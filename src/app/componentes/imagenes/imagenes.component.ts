import { Component, OnInit } from "@angular/core";
import { Elemento } from '../../modelos/elemento.interface';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { Observable } from 'rxjs';

@Component({
  selector: "app-imagenes",
  templateUrl: "./imagenes.component.html",
  styleUrls: ["./imagenes.component.css"]
})
export class ImagenesComponent implements OnInit {
  private elemsColeccion: AngularFirestoreCollection<Elemento>;
  elementos: Observable<Elemento[]>;

  constructor(private afs: AngularFirestore) {
    this.elemsColeccion = afs.collection<Elemento>('img');
    this.elementos = this.elemsColeccion.valueChanges();
  }

  ngOnInit() {}

}
