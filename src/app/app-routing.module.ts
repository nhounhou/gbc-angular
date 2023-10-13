import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserslistComponent } from './components/userslist/userslist.component';
import { UserComponent } from './components/user/user.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { StringingComponent } from './components/stringing/stringing.component';
import { StringComponent } from './components/string/string.component';
import { ShuttlesComponent } from './components/shuttles/shuttles.component';
import { ShuttleComponent } from './components/shuttle/shuttle.component';
import { ShuttlenewComponent } from './components/shuttlenew/shuttlenew.component';
import { StringnewComponent } from './components/stringnew/stringnew.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'users', component: UserslistComponent},
  {path:'users/:id', component: UserComponent},
  {path:'register', component: CreateuserComponent},
  {path:'schedule', component: ScheduleComponent},
  {path:'stringing', component: StringingComponent},
  {path:'stringing/new', component: StringnewComponent},
  {path:'stringing/:id', component: StringComponent},
  {path:'shuttles', component: ShuttlesComponent},
  {path:'shuttles/new', component: ShuttlenewComponent},
  {path:'shuttles/:id', component: ShuttleComponent},
  {path:'**', component: NotfoundpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
