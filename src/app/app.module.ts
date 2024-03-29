import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { ProfileComponent } from './pages/dashboard/profile/profile.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AddListingComponent } from './pages/dashboard/listing/add-listing/add-listing.component';
import { EditListingComponent } from './pages/dashboard/listing/edit-listing/edit-listing.component';
import { UserListingComponent } from './pages/dashboard/listing/user-listing/user-listing.component';
import { TestingComponent } from './test/testing/testing.component';
import { FormTestingComponent } from './test/form-testing/form-testing.component';

const appRoute: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'restaurant/:id', component: RestaurantComponent },
  { path: 'dashboard/profile', component: ProfileComponent },
  { path: 'dashboard/listing/add-listing', component: AddListingComponent },
  { path: 'dashboard/listing', component: UserListingComponent },
  { path: 'dashboard/testing', component: TestingComponent },
  { path: 'dashboard/form/testing', component: FormTestingComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    RestaurantComponent,
    ProfileComponent,
    SidenavComponent,
    UserListingComponent,
    AddListingComponent,
    EditListingComponent,
    TestingComponent,
    FormTestingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
