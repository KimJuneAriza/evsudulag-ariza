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

    this.userService.userLogin(this.loginForm.value).subscribe({
      next: (data) => {
        if (data?.user) {
          this.router.navigate(['/users/dashboard']); // Redirect
          this.loginError = ''; // Clear error if login is successful
        }
      },
      error: (err) => {
        if (err.status === 401) {
          this.loginError = 'Invalid username or password.'; // Show error for wrong credentials
        } else {
          this.loginError = 'Something went wrong. Please try again.';
        }
      }
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

