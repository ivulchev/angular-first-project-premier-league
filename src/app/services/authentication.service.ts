import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    public afAuth: AngularFireAuth // Inject Firebase auth service
  ) { }
  // Sign up with email/password
  SignUp(email: string, password: string, repassword: string) {
    if (password === repassword) {
      return this.afAuth
        .createUserWithEmailAndPassword(email, password)
        .then((result: any) => {
          window.alert('You have been successfully registered!');
        })
        .catch((error) => {
          window.alert(error.message);
        });
    } else {
      return window.alert("Password and Repeat Password doesn't match!");
    }
  }
  // Sign in with email/password
  SignIn(email: string, password: any) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result: any) => {
        window.alert('You have been successfully logged in!');
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }


}
