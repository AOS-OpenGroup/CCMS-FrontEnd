import { Component, OnInit, ViewChild } from '@angular/core';
import {Profile} from "../../../model/profile";
import {NgForm} from "@angular/forms";
import {ProfileService} from "../../../services/profile.service";
import * as _ from "lodash";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileData: Profile;
  dataSource: any = [];

  @ViewChild('profileForm', {static: false})
  profileForm!: NgForm;


  isEditMode = false;

  constructor(private profileService: ProfileService) {
    this.profileData = {} as Profile;
  }

  ngOnInit(): void {
    this.getAllProfiles();
  }
  getAllProfiles(){
    this.profileService.getAll().subscribe((response:any)=>{
      this.dataSource = response;
    });
  }

  editItem(element: Profile){
    this.profileData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.profileForm.resetForm();
  }

  addProfile() {
    this.profileData.id = 0;
    this.profileService.create(this.profileData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });
  }

  updateProfile() {
    this.profileService.update(this.profileData.id, this.profileData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Profile) => {
        if (o.id == response.id) {
          o = response;
        }
        return o;
      });
    });
  }

  onSubmit() {
    if (this.profileForm.form.valid) {
      console.log('valid');
      if (this.isEditMode) {
        console.log('about to update');
        this.updateProfile();
      } else {
        console.log('about to create');
        this.addProfile();
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }
  }

}
