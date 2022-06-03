import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  cid:number
  ngOnInit(): void {
    
  }
  constructor(private fb:FormBuilder,private contactService:ContactService,private router:Router) { }
  addContactForm= this.fb.group({
    firstName:['',Validators.required],
    lastName:[''],
    description:[''],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required,Validators.pattern('(^$|[0-9]{10})')]]
   
    
  })
  

  data={
   firstName:'',
   lastName:'',
   description:'',
   email:'',
   phone:''
   
  }
  submit=false
  get f(){
    return this.addContactForm.controls;
  }
  onSubmit(){
    this.submit=true
    console.log('clicked')
    console.log('f',this.f)
    this.contactService.addContact(this.data).subscribe((res)=>{
      console.log(res) 
      this.router.navigate(['/secure'])
    });
  }
}
