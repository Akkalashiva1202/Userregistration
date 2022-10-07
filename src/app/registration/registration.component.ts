import { Component, OnInit } from '@angular/core';
import { User } from 'src/User.model';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private regserv:RegisterService) { }

  ngOnInit(): void {
  }
user:User = new User();
submitted=false;

  register()
  {
    this.regserv.registernew(this.user).subscribe(
      data=>{
        console.log("new user registered ");
        alert("new user registered ");
        console.log(data);
        this.user = new User();

      },
      error=>{
        console.log(error);
      }
    )
  }
  onSubmit()
  {
    this.submitted =true;
    this.register();
  }

}
