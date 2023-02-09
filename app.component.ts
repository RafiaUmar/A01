import { Component, ViewChild } from '@angular/core';
import { MinValidator, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('login')
  login!: NgForm;
  title = 'Forms';
  level = 'Pro';
  submitted = false;
  Data = {
    email: '',
    Subscription: '',
    password: '',
  };

  submit() {
    this.submitted = true;
    console.log(this.login);
      this.Data.email = this.login.value.mail;
      this.Data.Subscription = this.login.value.Subscriptions;
      this.Data.password = this.login.value.numeric;
    
  
  }
}
