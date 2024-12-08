import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(usuario: string, password: string) {
    sessionStorage.setItem('login', 'true');
    sessionStorage.setItem('username', usuario);
  }

  logout() {
    sessionStorage.clear();
  }

  isLogin(): boolean {
    return !!sessionStorage.getItem('login');
  }
}
