import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ContactService } from 'src/contact.service';
import { OauthService } from '../../oauth.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})

export class SecureComponent implements OnInit {
 
  message = ''
  isLoadingResults = false;
  public contacts: Array<any> = [  
  ];
  constructor(private authService: OauthService, 
    private router: Router, 
    private service: ContactService,
    private formBuilder: FormBuilder) { }
   
    editForm= this.formBuilder.group({
      cid:[''],
      firstName:['',Validators.required],
      lastName:[''],
      description:[''],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.pattern('(^$|[0-9]{10})')]]
    })
    data={
      firstName:this.editForm.value.firstName,
      lastName:this.editForm.value.lastName,
      description:this.editForm.value.description,
      email:this.editForm.value.email,
      phone:this.editForm.value.phone
    }
    get f(){
      return this.editForm.controls;
    }
    submit=false
  ngOnInit(): void {
    
    this.isLoadingResults = true;
    this.authService.secured()
      .subscribe((data: any) => {
        this.message = data;
        console.log(data);
        this.isLoadingResults = false;
      });
    this.viewContacts();
    this.service.viewContacts()
      .subscribe(data => {
        console.log(data)
      })
  }
  
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']).then(_ => console.log('Logout'));
  }
  public viewContacts() {
      this.service.viewContacts().subscribe((data: Array<object>) => {
      this.contacts = data;
      console.log(data);
    });
  }

public edit(row:any){
  this.editForm.controls['cid'].setValue(row.cid)
  this.editForm.controls['firstName'].setValue(row.firstName)
  this.editForm.controls['lastName'].setValue(row.lastName)
  this.editForm.controls['description'].setValue(row.description)
  this.editForm.controls['email'].setValue(row.email)
  this.editForm.controls['phone'].setValue(row.phone)
}

  public deleteContact(row:any){
    this.service.deleteContact(row.cid)
    .subscribe(()=>{
      alert("Contact deleted")
      this.viewContacts();
    })
   
  }
  
onSubmit(){
 
  this.submit=true
  this.service.editContact(this.editForm.value.cid,this.data).subscribe((res)=>{
    console.log(res) 
    this.viewContacts()
  });
  }
  
}