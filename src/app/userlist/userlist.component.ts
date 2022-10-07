import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/User.model';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private userslist:RegisterService,private route:Router) { }


  id !:number;
  user:User =new User();

  ngOnInit(): void {
    this.getAllusers();
  }

  users:User[]=[];



  getAllusers()
  {
    this.userslist.getAllusers().subscribe(
      data=>{
        console.log(data);
        this.users =data;
      },
      error=>{
        console.log(error);
      }
    )
  }


update(id:number)
{

  console.log(id);
  this.route.navigate(['/updateuser',id]);
}

// updteuser(id:string)
// {
//   console.log(id);
//   this.route.navigate(['updateuser',id]);
// }


idd!:number;
  deleteuser(idd:number)
  {
    this.userslist.deleteuser(idd).subscribe(
      data=>{
        alert("player deleted :"+idd);
        this.getAllusers();
    //   this.status = 'Delete successful';
      },
      error=>{
        console.log(error);
      }
    )
  }

}
