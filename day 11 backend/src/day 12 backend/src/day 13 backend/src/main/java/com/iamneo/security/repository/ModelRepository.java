package com.iamneo.security.repository;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.Model;

public interface ModelRepository extends JpaRepository<Model,String>{

Optional<Model> findById(String name);
	
    Model findByName(String name);
}
