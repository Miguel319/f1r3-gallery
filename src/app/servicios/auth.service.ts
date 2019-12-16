import { Injectable } from "@angular/core";
import { Usuario } from "../modelos/usuario.model";
import { AngularFireAuth } from "angularfire2/auth";
import { map } from "rxjs/operators";
import { auth } from "firebase/app";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private apiKey = "AIzaSyD6m9C2k290TmnKncwgltWbeXPiXe9haAg";

  constructor(private afsAuth: AngularFireAuth) {}

  estaAutenticado() {
    return this.afsAuth.authState.pipe(map(auth => Boolean(auth.uid)));
  }

  obtenerNombre() {
    return this.afsAuth.authState.pipe(map(auth => auth.displayName));
  }

  registrar(usuario: Usuario) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth
        .createUserWithEmailAndPassword(usuario.email, usuario.password)
        .then(data => data.user.updateProfile({ displayName: usuario.nombre }))
        .then((data: any) => resolve(data)),
        err => reject(err);
    });
  }

  login(usuario: Usuario) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth
        .signInWithEmailAndPassword(usuario.email, usuario.password)
        .then(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  googleLogin() {
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    return this.afsAuth.auth.signOut();
  }
}
