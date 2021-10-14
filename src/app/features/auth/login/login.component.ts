import { Observable } from 'rxjs';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  myObs$: Observable<any>;

  ngOnInit(): void {
    // this.authService.loginM('john', 'changeme')
    this.authService.userEmailRequest('albertolunardini@gmail.com', 'ALBY');
  }
}
