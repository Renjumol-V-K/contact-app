import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,FormGroupDirective,NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  ngOnInit(): void {
  }
  
 
  constructor(private fb:FormBuilder,private userService:RegistrationService,private router:Router){}
  registrationForm= this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    phone:['',[Validators.required,Validators.pattern('(^$|[0-9]{10})')]],
    username:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')]]
  })
 data={
   firstName:'',
   lastName:'',
   password:'',
   phone:'',
   username:''
  
 }
  showMsg=false
  submit=false
  get f(){
    return this.registrationForm.controls;
  }
  onSubmit(){
    this.submit=true
    console.log('clicked')
    console.log('f',this.f)
    this.userService.userRegistration(this.data).subscribe((res)=>{
    console.log(res)
      
    });
    this.showMsg= true;
    this.router.navigate(['/login'])
  }
}