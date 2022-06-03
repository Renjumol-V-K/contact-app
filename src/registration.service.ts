import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }
  userRegistration(data:any){
    return this.http.post<any>('http://localhost:8080/register',data)
  }
  viewProfile(){
    return this.http.get<any>('http://localhost:8080/viewProfile')
  }
}
