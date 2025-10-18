import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);

  constructor() {}

  /**
   * Login user with email and password
   */
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  /**
   * Signup new user and update their profile with display name and photo URL
   */
  async signup(email: string, password: string, firstName: string, lastName: string): Promise<User> {
    try {
      // Create the user
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;

      // Create a random avatar number
      const randomNumber = Math.floor(Math.random() * 1000);
      const photoURL = `https://api.dicebear.com/6.x/identicon/svg?seed=${randomNumber}`;

      // Update user profile
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
        photoURL
      });

      return user;
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  }
}