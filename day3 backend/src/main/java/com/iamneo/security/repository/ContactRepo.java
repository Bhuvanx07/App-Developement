package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.Contact;




public interface ContactRepo extends JpaRepository<Contact, Long>{

}