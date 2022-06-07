import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './private/about/about.component';
import { LoginComponent } from './public/login/login.component';
import { SignupComponent } from './public/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactInterInterceptor } from 'src/contact-inter.interceptor';
import { SecureComponent } from './private/secure/secure.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {NotFoundComponent } from './public/not-found/not-found.component';
import { AddContactComponent } from './private/secure/add-contact/add-contact.component';
import { ViewContactComponent } from './private/secure/view-contact/view-contact.component';
import { EditContactComponent } from './private/secure/edit-contact/edit-contact.component';
import { DeleteContactComponent } from './private/secure/delete-contact/delete-contact.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { ProfileComponent } from './private/secure/profile/profile.component';
import { SideNavComponent } from './private/side-nav/side-nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
 

@NgModule({
  
  declarations: [
    
    AppComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    SecureComponent,
    AddContactComponent,
    ViewContactComponent,
    EditContactComponent,
    DeleteContactComponent,
    ProfileComponent,
    SideNavComponent
  ],
  entryComponents: [AddContactComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ContactInterInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
