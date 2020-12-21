import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ManagerComponent} from "./manager/manager.component";
import {CreateProjectComponent} from "./manager/create-project/create-project.component";
import {AssignTasksComponent} from "./manager/assign-tasks/assign-tasks.component";
import {MyprojectsComponent} from "./myprojects/myprojects.component";
import {CreateTeamComponent} from "./manager/create-team/create-team.component";
import {TeamMemberComponent} from "./team-member/team-member.component";
import {ViewProjectsComponent} from "./manager/view-projects/view-projects.component";
import {ProjectdetailsComponent} from "./manager/projectdetails/projectdetails.component";
import {UpdateStatusComponent} from "./team-member/update-status/update-status.component";


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:"manager",component:ManagerComponent},
  {path:"createproject",component:CreateProjectComponent},
  {path:"assign-tasks",component:AssignTasksComponent},
  {path:"myprojects",component:MyprojectsComponent},
  {path:"createteam",component:CreateTeamComponent},
  {path:"teammember",component:TeamMemberComponent},
  {path:"view-projects",component:ViewProjectsComponent},
  {path:"projectdetails",component:ProjectdetailsComponent},
  {path:"updatebug/:bugId",component:UpdateStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
