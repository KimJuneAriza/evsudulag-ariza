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

  public submitLogin() {
    const { username, password } = this.loginForm.value;
    if(this.userService.login(username, password)){
      this.router.navigate(['/users/detail']);
    } else {
      console.log('error');
    }

    // this.userService.validateUser(this.loginForm.value).subscribe(data => {
    //   if (data) {
    //     this.route.navigateByUrl('/users/detail');
    //   }
    // })
  }

  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }

  // onLogin(){
  //   if (this.loginForm.valid) {
  //     console.log(this.loginForm.value);
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // }
}
