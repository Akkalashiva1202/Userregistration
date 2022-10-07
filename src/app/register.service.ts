import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/User.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseURL = "http://localhost:1234"

  constructor(private http:HttpClient) { }
  public loginuserfromremote(user:User):Observable<any>
  {
    return this.http.post<any>("http://localhost:1234/login",user);
  }

  public registernew(user:User)
  {
    return this.http.post("http://localhost:1234/register",user);
  }

  public getAllusers():Observable<User[]>
  {
    return this.http.get<User[]>("http://localhost:1234/users");
  }
  public updateuser(user:User){
    return this.http.post<User>("${http://localhost:1234}",user);
  }

  deleteuser(id:number)
  {
    return this.http.delete('http://localhost:1234/userId'+id);
  }

  getuserById(id:number):Observable<User>{
    console.log(id);
    return this.http.get<User>(`${this.baseURL}/${id}`);
   //  return this.http.get<Myemployee>("${this.baseURL}/${empId}");

  }


}
