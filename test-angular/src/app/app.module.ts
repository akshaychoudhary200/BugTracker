import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './register/register.component';
import { ManagerComponent } from './manager/manager.component';
import { MyprojectsComponent } from './myprojects/myprojects.component';
import { CreateProjectComponent } from './manager/create-project/create-project.component';
import { AssignTasksComponent } from './manager/assign-tasks/assign-tasks.component';
import { CreateTeamComponent } from './manager/create-team/create-team.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { ViewProjectsComponent } from './manager/view-projects/view-projects.component';
import { TasksComponent } from './manager/tasks/tasks.component';
import { ProjectdetailsComponent } from './manager/projectdetails/projectdetails.component';
import { TesterComponent } from './tester/tester.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ManagerComponent,
    MyprojectsComponent,
    CreateProjectComponent,
    AssignTasksComponent,
    CreateTeamComponent,
    TeamMemberComponent,
    ViewProjectsComponent,
    TasksComponent,
    ProjectdetailsComponent,
    TesterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
