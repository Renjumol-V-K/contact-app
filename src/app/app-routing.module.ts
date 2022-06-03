import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './private/about/about.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './public/login/login.component';
import { NotFoundComponent } from './public/not-found/not-found.component';
import { AddContactComponent } from './private/secure/add-contact/add-contact.component';
import { DeleteContactComponent } from './private/secure/delete-contact/delete-contact.component';
import { EditContactComponent } from './private/secure/edit-contact/edit-contact.component';
import { ProfileComponent } from './private/secure/profile/profile.component';
import { SecureComponent } from './private/secure/secure.component';
import { SignupComponent } from './public/signup/signup.component';

const routes: Routes = [

  {path:'about',pathMatch:'full',component:AboutComponent},
  {path:'',pathMatch:'full',component:LoginComponent},
  {path:'signup',pathMatch:'full',component:SignupComponent},
  { path: '404', pathMatch:'full',component: NotFoundComponent},
  { path: '', redirectTo: 'secure', pathMatch: 'full' },
  { path: 'secure', canActivate: [ AuthGuard ], component: SecureComponent},
  { path: '404', component: NotFoundComponent },
  {path:'add-contact',canActivate: [ AuthGuard ], component:AddContactComponent},
  {path:'edit-contact',canActivate:[AuthGuard],component:EditContactComponent},
  {path:'delete-contact',canActivate:[AuthGuard],component:DeleteContactComponent},
  { path:'edit/:id',canActivate:[AuthGuard] ,component: SecureComponent },
  {path:'profile',canActivate:[AuthGuard],component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
