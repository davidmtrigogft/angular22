import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private router = inject(Router);

  protected goToUsers(): void {
    this.router.navigate(['/users']);
  }

  protected goToCreateUser(): void {
    this.router.navigate(['/create-user']);
  }
}
