import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-profile',
  imports: [MaterialModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  usuario = sessionStorage.getItem('username') || 'Usuario';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authservice: AuthService
  ) {}

  logout() {
    this.authservice.logout();
    this.router.navigateByUrl('/login');
  }
}
