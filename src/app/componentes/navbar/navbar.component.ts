import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../servicios/auth.service";
import { AlertifyService } from "../../servicios/alertify.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  usuarioActual: string;
  estaAutenticado: boolean;

  constructor(private auth: AuthService, private alertify: AlertifyService) {}

  ngOnInit() {
    this.auth.obtenerNombre().subscribe(res => (this.usuarioActual = res));
    this.autenticar();
  }

  autenticar() {
    this.auth
      .estaAutenticado()
      .subscribe(data => (this.estaAutenticado = data));
  }

  logout() {
    this.auth
      .logout()
      .then(() => this.alertify.success("Logged out succesfully!"))
      .catch(() => this.alertify.error("Unable to logout. Try again"));
  }
}
