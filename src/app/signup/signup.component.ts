import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: false
})
export class SignupComponent implements OnInit {

  myForm: UntypedFormGroup;
  message: string = '';
  userError: any;

  constructor(
    private fb: UntypedFormBuilder,
    private authService: AuthService
  ) {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    }, {
      validators: this.checkIfMatchingPasswords('password', 'confirmPassword')
    });
  }

  async onSubmit(signupForm: UntypedFormGroup): Promise<void> {
    if (signupForm.invalid) return;

    const email: string = signupForm.value.email;
    const password: string = signupForm.value.password;
    const firstName: string = signupForm.value.firstName;
    const lastName: string = signupForm.value.lastName;

    try {
      const user: any = await this.authService.signup(email, password, firstName, lastName);
      const db = getFirestore();
      const userRef = doc(db, 'users', user.uid);

      await setDoc(userRef, {
        firstName,
        lastName,
        email,
        photoURL: user.photoURL || '',
        interests: '',
        bio: '',
        hobbies: ''
      });

      this.message = 'You have signed up successfully. Please login.';
    } catch (error) {
      console.error(error);
      this.userError = error;
    }
  }

  checkIfMatchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: UntypedFormGroup) => {
      const password = group.controls[passwordKey];
      const confirmPassword = group.controls[confirmPasswordKey];
      if (password.value !== confirmPassword.value) {
        confirmPassword.setErrors({ notEqualToPassword: true });
      } else {
        confirmPassword.setErrors(null);
      }
    };
  }

  ngOnInit(): void {}
}