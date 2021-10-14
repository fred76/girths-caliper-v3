import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-back',
  templateUrl: './login-back.component.html',
  styleUrls: ['./login-back.component.css'],
})
export class LoginBackComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: AuthService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      let callback = params['token'];
      this.service.callback(callback).subscribe((l) => console.log(l));
    });
  }
}
