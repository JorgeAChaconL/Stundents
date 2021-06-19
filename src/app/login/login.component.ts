import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username;
  public password;
  public correctUser ='pepepecas';
  public correctPass ='picapapas';

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  logIn(username,password){
    if(username == this.correctUser && password == this.correctPass){
      alert(`Welcome back ${username}`)
      this.router.navigate(['home'])
    }else{
      alert(`Sorry ${username}, try again`)
    }
  }
}
