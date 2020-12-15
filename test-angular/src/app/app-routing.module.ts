import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LoginSuccessfullComponent} from "./login-successfull/login-successfull.component";
import {RegisterComponent} from "./register/register.component";
import {ManagerComponent} from "./manager/manager.component";
import {TeamComponent} from "./team/team.component";


const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:"login-successfull",component:LoginSuccessfullComponent},
  {path:"manager",component:ManagerComponent},
  {path:"team-member",component:TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
