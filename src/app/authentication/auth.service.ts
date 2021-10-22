import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { User } from './user.model';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  user = new BehaviorSubject<User>(null);

  isLoggedIn = false;

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {}

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  async signInUser(email: string, password: string) {
    await this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;

        localStorage.setItem('user', JSON.stringify(res.user));

        const user = new User(res.user.email);

        this.user.next(user);

        this.router.navigate(['/home']);

        return res.user.email;
      });
  }

  // ----------------------------------------------------------------------------------------------

  autoSignIn() {
    const user: {
      email: string;
    } = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      this.router.navigate(['/authentication']);

      console.log('NO USER FOUND');

      return null;
    }

    const loadedUser = new User(user.email);

    this.user.next(loadedUser);
  }

  // ----------------------------------------------------------------------------------------------

  logout() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/authentication']);
  }

  // ----------------------------------------------------------------------------------------------

  handleError(errorRes: string) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes) {
      return errorMessage;
    }
    switch (errorRes) {
      case 'auth/user-not-found':
        errorMessage = 'Dieses Konto wurde nicht gefunden.';
        break;
      case 'auth/wrong-password':
        errorMessage = 'Das eingegebene Passwort ist falsch.';
        break;
      case 'auth/email-already-in-use':
        errorMessage = 'Diese E-mail Adresse existiert bereits.';
        break;
    }

    return errorMessage;
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
