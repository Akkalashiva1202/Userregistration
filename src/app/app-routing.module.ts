import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"loginsuccess",component:LoginsuccessComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"userlist",component:UserlistComponent},
  {path:"updateuser/:id",component:UpdateuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
