import { Injectable } from '@angular/core';
import { UserDetail } from '../model/UserModel';
import { Observable, of } from 'rxjs';
import { mockUserDetailData } from '../mock/UserMockData';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedInUser: UserDetail | null = null;

  login(username: string, password: string) : boolean {
    const user = mockUserDetailData.find(u => u.username === username && u.password === password);

    if (user) {
      this.loggedInUser = user;
      return true;
    }
    return false;
  }

  getLoggedInUser(): UserDetail | null {
    return this.loggedInUser;
  }

  // constructor() { }

  // public validateUser(userLogin: UserLoginModel) : Observable<any> {
  //   const password = 'doe123';
  //   const email = 'john@doe.com';


  //   if (password == userLogin.password && email == userLogin.username) {
  //     return of(mockUserDetailData)
  //   } else {
  //     return of({
  //       isLogin: false,
  //       message: 'Invalid password/email'
  //     })
  //   }
  // }
}
