import { ServerService } from './../services/server.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private server: ServerService
  ) { }

  /**
   * It do login
   *
   */
  async login(params) {
    return await this.server.post({
      url: 'login',
      body: {
        email: params.get('email').value,
        password: params.get('password').value
      }
    }).toPromise();
  }

  /**
   * It do register
   *
   */
  async register(params: any) {

    return await this.server.post({
      url: 'register',
      body: {
        name: params.get('name').value,
        email: params.get('email').value,
        password: params.get('password').value,
        password_confirmation: params.get('passwordConfirm').value
      }
    }).toPromise();

  }
}
