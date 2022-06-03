import { HttpClient } from '@angular/common/http';
import { createDirective } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http:HttpClient) { }

  addContact(data:any){
    return this.http.post<any>('http://localhost:8080/contact/add',data)
  }

  viewContacts(){
    return this.http.get<any>('http://localhost:8080/contact/view')
  }

  editContact(cid:any,data:any){  
    return this.http.put<any>('http://localhost:8080/contact/edit/'+cid,data)
  }  

  deleteContact(cid: number) {  
    return this.http.delete('http://localhost:8080/contact/delete/'+cid,{responseType:'text'});  
  }  
  // viewContactsById(cid:any){
  //   return this.http.get<any>('http://localhost:8080/contact/view/'+cid)
  // }
}