import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm: FormGroup;
  constructor(public builder: FormBuilder, public authService: AuthService, public router: Router) {
    this.signUpForm = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required,]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', [Validators.required]]
    });
   }

   get email() { return this.signUpForm.controls['email'];}

   get password() { return this.signUpForm.controls['password'];}

   signUp() {
    this.authService.signUp(this.signUpForm.value).subscribe((response: any) => {
      alert("sign up successful")
      this.signUpForm.reset();
      console.log(`user : ${response.user}`);
      this.router.navigate(['/sign-in']).then();
    })
  }
}
