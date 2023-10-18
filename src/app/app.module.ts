import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { GaugeModule } from 'angular-gauge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserslistComponent } from './components/userslist/userslist.component';
import { UserupdateComponent } from './components/userupdate/userupdate.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { UserComponent } from './components/user/user.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { StringingComponent } from './components/stringing/stringing.component';
import { StringComponent } from './components/string/string.component';
import { ShuttlesComponent } from './components/shuttles/shuttles.component';
import { ShuttleComponent } from './components/shuttle/shuttle.component';
import { ShuttlenewComponent } from './components/shuttlenew/shuttlenew.component';
import { StringnewComponent } from './components/stringnew/stringnew.component';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// FullCalendarModule.registerPlugins([
//   interactionPlugin,
//   dayGridPlugin
// ]);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserslistComponent,
    UserupdateComponent,
    CreateuserComponent,
    UserComponent,
    NotfoundpageComponent,
    HomepageComponent,
    ScheduleComponent,
    StringingComponent,
    StringComponent,
    ShuttlesComponent,
    ShuttleComponent,
    ShuttlenewComponent,
    StringnewComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    GaugeModule.forRoot(),
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    NgbModule,
    FullCalendarModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
