import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authservice: AuthService
  ) {}

  goLogin() {
    this.router.navigateByUrl('/login');
  }

  goProfile() {
    this.router.navigateByUrl('/profile');
  }

  logout() {
    this.authservice.logout();
    this.router.navigateByUrl('/login');
  }
}
