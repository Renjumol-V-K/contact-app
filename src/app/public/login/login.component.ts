import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { OauthService } from '../../oauth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: OauthService, private router: Router, private formBuilder: FormBuilder){}

  loginForm: FormGroup;
  username = '';
  password = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();
  
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username:[null,Validators.required],
      password:[null,Validators.required]
    })
  }

  onSubmit(): void {
    this.isLoadingResults = true;
    this.authService.login(this.loginForm.value)
      .subscribe(() => {
        this.isLoadingResults = false;
        this.router.navigate(['/secure']).then(_ => console.log('You are secure now!'));
      }, (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
        
      });
  }
  
}
