import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, name: string): Observable<any> {
    return this.http.post<any>('/api/login', { email, name });
  }

  userEmailRequest(email: string, name: string) {
    fetch(`/api/test`, {
      method: `POST`,
      body: JSON.stringify({
        destination: email,
        name: name,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          document.body.innerText = json.code;
        }
      });
  }

  callback(token: string) {

    return this.http.get<any>(`http://localhost:9000/api/magiclogin/callback/?token=${token}`);
  }

  test(email: string, name: string): Observable<any> {
    return this.http.post<any>('/api/test', { email, name });
  }
}
