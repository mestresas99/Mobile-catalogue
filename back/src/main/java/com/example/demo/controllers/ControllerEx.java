package com.example.demo.controllers;


import java.util.HashSet;
import java.util.Set;

import javax.annotation.PostConstruct;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import domains.Address;
import domains.User;


@Controller
public class ControllerEx {
	
	
	User user;
	
	@PostConstruct
	public void init() {
		Set<Address> address = new HashSet<>();
		address.add(new Address("first", 1111));
		address.add(new Address("second", 2222));
		
		user = new User("Pablo", 11, address);
	}
	
	
	@RequestMapping(value= "/user", method= RequestMethod.GET, produces= {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody User userResource () {
		return user;
	}
	
	@RequestMapping(value="/hello/{name}", method = RequestMethod.GET)
	public @ResponseBody String getting(@PathVariable String name,
										@RequestParam (required=false)String surname) {
		
		String text;
		if(surname == null) {
			text = "hello "+name;
		}else {
			text = "hello "+name +" "+ surname;
		}
		return text;
	}

}
