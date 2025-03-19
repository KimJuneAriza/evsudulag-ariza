import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private userSource = new BehaviorSubject<any>(null); // Holds logged-in user data
  // currentUser = this.userSource.asObservable(); // Observable for other components

  constructor(private http: HttpClient) { }

  public userLogin(user: any): Observable<any> {
    return this.http.post('http://localhost:8000/login', user)
  }

  // // ✅ Store user data after login
  // public setUser(user: any) {
  //   this.userSource.next(user); // Update BehaviorSubject
  //   localStorage.setItem('loggedInUser', JSON.stringify(user)); // Store in localStorage
  // }

  // // ✅ Retrieve user data
  // public getUser() {
  //   return this.userSource.value; // Get latest user value
  // }

}














  // login(username: string, password: string) : boolean {
  //   const user = mockUserDetailData.find(u => u.username === username && u.password === password);

  //   if (user) {
  //     this.loggedInUser = user;
  //     return true;
  //   }
  //   return false;
  // }

  // getLoggedInUser(): UserDetail | null {
  //   return this.loggedInUser;
  // }





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

  
