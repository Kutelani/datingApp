import { Component, inject, signal} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';


@Component({
  selector: 'app-nav',
  imports: [FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  protected accountService = inject(AccountService);
protected creds:any={}

login(){
  this.accountService.login(this.creds).subscribe({
    next:result =>{console.log(result),
    this.creds={}//for email & password field to be empty after logging out
  },
    error:error =>alert(error.message)
  })
  
}
logout(){
  this.accountService.logout();
}


}
