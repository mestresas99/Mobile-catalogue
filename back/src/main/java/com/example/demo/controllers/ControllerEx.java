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
import domains.Mobile;
import domains.User;

@Controller
public class ControllerEx {
	
	User user;
	
	@PostConstruct
	public void init() {
		Set<Mobile> mobile = new HashSet<>();
		mobile.add(new Mobile(1, "iPhone 7", "Apple","lorem ipsum dolor sit amet consectetur", "black", 769, "IPhone_7.png", "4.7 inch IPS", "A10 fusion", 2));
		mobile.add(new Mobile(2, "iPhone 10", "Apple","lorem ipsum dolor sit amet consectetur", "white", 930, "IPhone_10.png", "13 inch IPS", "A10 fusion", 4));
		
		user = new User(mobile);
		
	}
	
	
	@RequestMapping(value= "/mobiles", method= RequestMethod.GET, produces= {MediaType.APPLICATION_JSON_VALUE})
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
