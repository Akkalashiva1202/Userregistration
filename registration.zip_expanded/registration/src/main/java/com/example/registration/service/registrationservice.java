package com.example.registration.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
import com.example.registration.model.User;
import com.example.registration.repository.RegistrationRepository;
 
@Service
public class registrationservice {
	
	@Autowired
	private RegistrationRepository regrepo;
	
	public User saveuser(User user)
	{
		return regrepo.save(user);
	}
	
	public User fetchemailid(String email)
	{
		return regrepo. findByEmailId(email);
	}

	public User fetchemailidAndpass(String email,String password)
	{
		return regrepo.findByEmailIdAndPassword(email, password);
		
	}

	public List<User> getAll() {
		 return regrepo.findAll();
	}
	public User updateUser(User user)
	{
		return regrepo.save(user);
	}
	public Optional<User> getuserid(int id){
		return regrepo.findById(id);
	}
	 
	public User getuser(int id)
	{
 //Optional<Author> authoropt = authordao.findById(authorId);
//		if(authoropt.isPresent())
//		{
//				return authoropt.get();
//		}
	//return authordao.findById(authorId).get();
		
		Optional<User> user = regrepo.findById(id);
		if(user.isPresent())
		{
			return user.get();
		}
		return null;
 
	}
	
	public String deleteuser(int id) {
		User user = getuser(id);
		if(user!=null)
		{

			regrepo.delete(user);
			return "  user deleted";
		}
		else
		{
			return "user cannot be deleted ";
		}
	
	}

}
