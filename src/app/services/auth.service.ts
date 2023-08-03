import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor (
    public router: Router,
  ){}
  
  LogIn(email: string, password: string) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        // Signed in 
        return userCredential.user;

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


          // Profile updated successfully!
          alert("Başarıyla Kayıt oldunuz");
          // "name surname" is now the user's display name.
          this.router.navigate(['/']);
    })
    .catch((error) => {
    });
}
}