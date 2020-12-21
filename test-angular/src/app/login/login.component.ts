import { Component, OnInit } from '@angular/core';
import {RegistrationService} from "../service/registration.service";
import {User} from "../model/user";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // two way binding to take values from form and map it to use
  user = new User();
  mesg = "";
  // dependency injection
  constructor(
    private _service:RegistrationService,
    private _router : Router) { }

  ngOnInit(): void {

  }

  loginUser() {
    let role : String;
    // call function of service
    // return the response in form of observable to use we have to subscribe
    this._service.loginUserFromRest(this.user).subscribe(
       // response we get either data or error
      data => {
        console.log("response received : ",JSON.stringify(data),+" "+JSON.stringify(this.user));
       /// console.log(data.toString());
       // let user  = data;
        console.log("data to user object",JSON.stringify(data.role));
        if(data.role === "manager") {
          //sessionStorage.setItem("userId",data.name);
          //sessionStorage.setItem("id",data.id);
          sessionStorage.setItem("userLogin",JSON.stringify(data));
          sessionStorage.setItem("userId",data.id);
          console.log(typeof(data.id))
          console.log(sessionStorage.getItem("userId"))
          console.log(sessionStorage.getItem("userLogin"));

          this._router.navigate(["/manager"]);
        } else {
          this._router.navigate(["/teammember"]);
        }
      },
      error => {
        console.log("exception occured");
        this.mesg="please check your credentials";
      }
    );
  }

  //goToRegistration() {
  //  console.log("registration link is clicked");
   // this._router.navigate(['/register'])
  //}
}
