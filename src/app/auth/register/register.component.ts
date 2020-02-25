import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  /** Register form */
  registerForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  /**
   * Start the Component
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
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', Validators.required)
    });
  }

  /**
   * Submit the form
   *
   */
  onSubmit() {
    try {

      // Verify if form is valid
      if (!this.registerForm.valid) {
        throw new Error('Formulário inválido');
      }

      // Submit to API
      this.authService.register(this.registerForm);
    } catch (e) {
      console.log(e);
    } finally {
      // this.router.navigate(['/menu/dashboard']);
    }
  }

}
