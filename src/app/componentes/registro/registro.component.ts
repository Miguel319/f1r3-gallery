import { Component, OnInit, ViewChild } from "@angular/core";
import { Usuario } from "../../modelos/usuario.model";
import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"]
})
export class RegistroComponent implements OnInit {
  usuario: Usuario;
  registroFormulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.usuario = new Usuario();
    this.crearFormulario();
  }

  crearFormulario() {
    this.registroFormulario = this.fb.group(
      {
        email: ["", [Validators.required, Validators.email]],
        nombre: ["", [Validators.required, Validators.minLength(2)]],
        password: [
          "",
          [
            Validators.minLength(4),
            Validators.maxLength(30),
            Validators.required
          ]
        ],
        confirmPassword: ["", [Validators.required]]
      },
      { validator: this.validarContrasenia }
    );
  }

  authRedirect() {
    this.router.navigateByUrl("imagenes");
  }

  validarContrasenia(formulario: FormGroup) {
    return formulario.get("password").value ===
      formulario.get("confirmPassword").value
      ? null
      : { mismatch: true };
  }

  registrar() {
    if (this.registroFormulario.valid) {
      this.usuario = { ...this.registroFormulario.value };

      this.auth
        .registrar(this.usuario)
        .then(() => this.authRedirect())
        .catch(err => console.log(err));

    }
  }

  registroGoogle() {
    this.auth
      .googleLogin()
      .then(() => this.authRedirect())
      .catch(err => console.log(err));
  }
}
