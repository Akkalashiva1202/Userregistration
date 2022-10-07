import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/User.model';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginserv:RegisterService,private router:Router) { }

  user:User = new User();
  msg="";
  ngOnInit(): void {
  }
  loginuser()
  {
    this.loginserv.loginuserfromremote(this.user).subscribe(
      data=>{
        console.log("reponse received");
        alert("login successfully");
        this.router.navigate(['/loginsuccess'])
      },
      error=>{
        console.log(error);
        console.log("exception occured ");
        this.msg = "bad credentials ,please enter valid emailid and password ";

      }
    )
  }
  gotoregistration()
  {
    this.router.navigate(['/registration'])
  }

  getAllusers()
  {
    this.router.navigate(['/userlist']);
  }

}
