import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";
import {RegistrationService} from "../service/registration.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User();
  mesg = "";

  constructor(private _service : RegistrationService,private _route : Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    this._service.registerFromRest(this.user).subscribe(
      data => {
        console.log("registration succesfull");
        this._route.navigate(['/login']);
      },
      error => {
        console.log("not registered");
        this._route.navigate(['/register'])
        this.mesg = "registration failed please check your internet connection"
      }
    );
  }
}
