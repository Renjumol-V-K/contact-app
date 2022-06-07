import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OauthService } from 'src/app/oauth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router:Router,private authService: OauthService) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']).then(_ => console.log('Logout'));
  }

}
