import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/User.model';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  constructor(private update:RegisterService,private activeroutrt:ActivatedRoute,private router:Router) { }

  user:User = new User();
   id!:number;
  ngOnInit(): void {

    this.id = this.activeroutrt.snapshot.params['id'];
    console.log(this.id);
    this.update.getuserById(this.id).subscribe(
      data=>{
        this.user=data;
        console.log(this.user);

      }
     )

  }
   updateuser()
  {
    this.update.updateuser(this.user).subscribe(
      data=>{
        alert("data updated successfully")
        console.log("data updated successfully");
        this.router.navigate(["/userlist"]);
      },
      error=>{
        console.log(error);
        alert("unable to update");
      }
      
    )
  }
  deleteuser(id:number)
  {
    this.update.deleteuser(this.id).subscribe(
      data=>{
        alert("data deleted ");
      },
      error=>{
        console.log(error);
      }
    )
  }

}
