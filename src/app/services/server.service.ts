import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  /** Req Headers */
  headers = {};

  constructor(
    private http: HttpClient
  ) { }

  /** Get end pont */
  private getEndPoint(action: string) {
    return `${SERVER_URL}/${action}`;
  }

  /**
   * Método POST
   *
   */
  post({url, body}): Observable<any> {

    const headers = JSON.parse(JSON.stringify(
      this.headers = {
        ...this.headers,
        'content-type': 'application/json'
      }
    ));

    return this.http.post(this.getEndPoint(url), body, { headers });
  }

  /**
   * Método GET
   *
   */
  get({url}): Observable<any> {

    const headers = JSON.parse(JSON.stringify(
      this.headers = {
        ...this.headers,
        'content-type': 'application/json'
      }
    ));

    return this.http.get(this.getEndPoint(url), { headers });
  }
}
