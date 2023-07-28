import { Injectable, NgZone } from '@angular/core';
import { User } from './user';
import { Firestore } from '@angular/fire/firestore';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor (
    public router: Router,
  ){}
  
  LogIn( email: string, password: string) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        return userCredential.user;
        // ...

      })
      .catch((error) => {
        return error;
      });
  }

  Register(email: string, password: string) {

    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

      })
      .catch((error) => {
        
      });
  }


}
