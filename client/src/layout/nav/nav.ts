import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastService } from '../../core/services/toast-service';


@Component({
  selector: 'app-nav',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  protected accountService = inject(AccountService);
  private router =inject(Router);
  private toast = inject(ToastService)
  protected creds: any = {}

  login() {
    this.accountService.login(this.creds).subscribe({
      next: result => {
        this.router.navigateByUrl('/members');
        this.toast.success('Logged in successfully');
        this.creds = {}//for email & password field to be empty after logging out
      },
      error: error => {
        this.toast.error(error.error);
      }
    })

  }
  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }


}
