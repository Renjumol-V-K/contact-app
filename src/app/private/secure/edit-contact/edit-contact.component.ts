import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { ContactService } from 'src/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute,
              private service:ContactService,
              private formBuilder:FormBuilder) { }

  
  cid: number;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  data={
    firstName:'',
    lastName:'',
    description:'',
    email:'',
    phone:''
  }
  ngOnInit(): void {
    
    this.cid = this.activatedroute.snapshot.params['id'];
      this.isAddMode = !this.cid;
  }
  form= this.formBuilder.group({
    firstName:['',Validators.required],
    lastName:[''],
    description:[''],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required,Validators.pattern('(^$|[0-9]{10})')]]
   
    
  })
  public edit(row:any){
   
    var a=this.form.controls['firstName'].setValue(row.firstName)
    
  }
  
  onSubmit(){
   
  }
}