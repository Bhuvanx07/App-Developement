package com.iamneo.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Contact;
import com.iamneo.security.repository.ContactRepo;



@Service
public class Contactservice {
	@Autowired
	ContactRepo Repo;
	public String updateDetails(Contact a) {
		Repo.save(a);
		return "Updated";
	}
	public String deletedetails(Long id) {
		Repo.deleteById(id);
		return "Deleted";
	}
}
