import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  authenticated: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authenticated = this.authService.getAuthStatus();
    this.authService.authChanged.subscribe(
      (authStatus: boolean) => {
        this.authenticated = authStatus;
      }
    );
  }
}
