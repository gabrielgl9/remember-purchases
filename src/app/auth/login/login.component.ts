import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /** Login Form */
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  /**
   * Start the component
   *
   */
  ngOnInit() {
    this.setupForm();
  }

  /**
   * Start the form
   *
   */
  setupForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  /**
   * Submit the form
   *
   */
  onSubmit() {
    try {

      // Verify if form is valid
      if (this.loginForm.valid) {
        throw new Error('Formulário inválido');
      }

      // Submit to API
      this.authService.login(this.loginForm);
    } catch (e) {

    } finally {
      this.router.navigate(['/menu/dashboard']);
    }
  }

}
