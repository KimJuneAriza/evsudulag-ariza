import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private userService: UserService, private router: Router){}

  // loggedInUser: any = {};
  loginError: string = '';
  public submitLogin() {
    if (this.loginForm.invalid) {
      this.loginError = 'Please enter valid credentials.';
      return;
    }

    this.userService.userLogin(this.loginForm.value).subscribe((data) => {
      console.log(data);
      // this.loggedInUser = data.user;

      this.loginError = '';
      this.router.navigate(['/users/dashboard']); 
    });
  }

  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }

}







  
  // public submitLogin() {
  //   const { username, password } = this.loginForm.value;
  //   if(this.userService.login(username, password)){
  //     this.loginError = false;
  //     this.router.navigate(['/users/detail']);
  //   } else {
  //     this.loginError = true;
  //     console.log('error');
  //   }
  // }

