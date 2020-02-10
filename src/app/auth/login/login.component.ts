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

  /** Loading */
  loading = false;

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
    this.loading = true;

    try {
      if (!this.loginForm.valid) {
        throw new Error('Formulário inválido');
      }

      this.authService.login(this.loginForm.value);
      // this.router.navigate(['/menu/dashboard']);
    } catch (e) {
      console.log(e);
    } finally {
      this.loading = false;
    }
  }

}
