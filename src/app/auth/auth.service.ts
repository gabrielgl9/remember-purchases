import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /**
   * It do login
   *
   */
  login(params) {
    console.log({
      url: 'login',
      body: {
        email: params.get('email').value,
        password: params.get('password').value
      }
    });
  }

  /**
   * It do register
   *
   */
  register(params) {
    console.log({
      url: 'register',
      body: {
        email: params.get('email').value,
        password: params.get('password').value,
      }
    })
  }
}
