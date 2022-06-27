import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../security/services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private router: Router,
    private authService: AuthService) {}

    getCurrentUserEmail() {
      let currentUserString = this.authService.getCurrentUser();
      if (currentUserString) {
        console.log(`current user: ${ currentUserString}`);
        let currentUser = JSON.parse(currentUserString);
        console.log(currentUser);
        return currentUser.email;
      } else {
        return null;
      }
    }
    signOut() {
      this.authService.signOut();
      this.router.navigate(['home']).then();
      console.log("Signed Out");
    }
}
