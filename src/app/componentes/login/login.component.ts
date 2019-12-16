import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";
import { Usuario } from "src/app/modelos/usuario.model";
import { AlertifyService } from "../../servicios/alertify.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  usuario: Usuario;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.crearFormulario();
    this.usuario = new Usuario();
  }
  crearFormulario() {
    this.formGroup = this.fb.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  login() {
    this.usuario.email = this.formGroup.get("email").value;
    this.usuario.password = this.formGroup.get("password").value;

    this.authService
      .login(this.usuario)
      .then(() => {
        this.alertify.success('Logged in successfully!');
        this.loginRedirect();
      })
        .catch(err => this.alertify.error('Unable to login. Verify your credentials.'));
  }

  googleLogin() {
    this.auth
      .googleLogin()
      .then(() => this.loginRedirect())
      .catch(err => console.log(err));
  }

  loginRedirect() {
    this.router.navigateByUrl(`imagenes`);
  }

  logout() {
    this.auth.logout();
  }
}
