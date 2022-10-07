package com.example.registration.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
 
import com.example.registration.model.User;
import com.example.registration.service.registrationservice;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class Registrationcontroller {
	
	@Autowired
	private registrationservice regserv;
	
	
	@PostMapping("/register")
	public User registeruser(@RequestBody User user	) throws Exception
	{
		String tempemail = user.getEmailId();
		if(tempemail != null && !" ".equals(tempemail))
		{
		User userobj = regserv.fetchemailid(tempemail);
			
		if(userobj != null)
		{
			throw new Exception("User with "+tempemail+" already exists");
		}
		}
		
		User obj = null;
		obj = 	regserv.saveuser(user);
	     return obj;
	
	}
	
	@PostMapping("/login")
	public User  loginuser(@RequestBody User user) throws Exception
	{
			String tempmail = user.getEmailId();
			String temppass = user.getPassword();
			User obj = null;
			if(tempmail != null && temppass != null)
			{
			obj = regserv.fetchemailidAndpass(tempmail, temppass);
				
			}
			if(obj == null)
			{
				throw new Exception("bad Credientials");
			}
			return obj;
	}
	
	@GetMapping("users")
	public ResponseEntity<List<User>> getusers()
	{
		List<User> users = regserv.getAll();
		if(users !=null)
		{
			
			return new ResponseEntity<List<User>>(users,HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity(HttpStatus.OK);
		}
	}
	
	@PutMapping()
	public ResponseEntity<User> updateuser(@RequestBody User user)
	{
		User update = regserv.saveuser(user);
		return new ResponseEntity<User>(update,HttpStatus.OK);
	}
	
	
	@GetMapping("id/{id}")
	public ResponseEntity<Object> getuserbyid(@PathVariable int id)
	{
		Optional<User> userlist = regserv.getuserid(id);
		 if(userlist != null)
		 {
			 return new ResponseEntity<Object>(userlist,HttpStatus.OK);
		 }
		 else
		 {
			 return new ResponseEntity<Object>("data not found ",HttpStatus.OK);
		 }
	}
	
	@DeleteMapping("userId/{id}")
	public ResponseEntity<String> deleteuser(@PathVariable int  id)
	{	
		String result = regserv.deleteuser(id);
			  	return new ResponseEntity<String>(result,HttpStatus.FOUND);
			
		
	}
	
	
	@GetMapping("{id}")
	public ResponseEntity<Object> getuserByid(@PathVariable int  id)
	{	
		User user = regserv.getuser(id);
			if(user!=null)
			{
				return new  ResponseEntity<Object>(user,HttpStatus.FOUND);
			}
			else
			{
				return new ResponseEntity<Object>("Data Not Found",HttpStatus.NOT_FOUND);
			}
		
	}
	
	
}
