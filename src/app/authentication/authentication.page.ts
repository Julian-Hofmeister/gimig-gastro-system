import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {
  // # PROPERTIES
  loginForm: FormGroup;
  email: string;
  password: string;
  error: string;

  // # CONTRUCTOR
  constructor(
    // # SERVICES
    private authService: AuthService
  ) {}

  // # ON INIT
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  // # FUNCTIONS
  submit() {
    this.email = this.loginForm.value.email;
    this.password = this.loginForm.value.password;

    this.authService.signInUser(this.email, this.password).catch((e) => {
      this.error = this.authService.handleError(e.code);
    });
  }

  resetError() {
    this.error = null;
  }
}
