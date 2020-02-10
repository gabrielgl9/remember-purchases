import { AlertComponent } from './../../helpers/alert/alert.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';

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
    private router: Router,
    private modal: MatDialog
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
      if (this.loginForm.valid) {
        throw new Error('Formulário inválido');
      }

      this.authService.login(this.loginForm.value);
      // this.router.navigate(['/menu/dashboard']);
    } catch (e) {
      this.openModal(e.message);
    } finally {
      this.loading = false;
    }
  }

  /**
   * Open Modal
   *
   */
  openModal(message) {
    return this.modal.open(AlertComponent, {
      width: '350px',
      data: message
    });
  }

}
