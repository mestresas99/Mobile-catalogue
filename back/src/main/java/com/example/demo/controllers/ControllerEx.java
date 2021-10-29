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
		mobile.add(new Mobile(1, "iPhone 7", "Apple","lorem ipsum dolor sit amet consectetur", "black", 600, "IPhone_7.png", "4.7 inch IPS", "A10 fusion", 2));
		mobile.add(new Mobile(2, "iPhone 10", "Apple","lorem ipsum dolor sit amet consectetur", "white", 930, "IPhone_10.png", "13 inch IPS", "A10 fusion", 4));
		mobile.add(new Mobile(1, "Samsung s20", "Apple","lorem ipsum dolor sit amet consectetur", "black", 820, "Samsung_s20.png", "4.7 inch IPS", "A14 Bionic", 2));
		mobile.add(new Mobile(1, "iPhone 11 Pro", "Apple","lorem ipsum dolor sit amet consectetur", "black", 900, "IPhone_11.png", "7.5 inch IPS", "A14 Bionic", 2));
		mobile.add(new Mobile(1, "iPhone 12", "Apple","lorem ipsum dolor sit amet consectetur", "white", 850, "IPhone_12.png", "4.7 inch IPS", "A14 Bionic", 4));
		mobile.add(new Mobile(1, "Huawei nova 8i", "Huawei","lorem ipsum dolor sit amet consectetur", "black", 550, "Huawei_8.png", "6.57 inch IPS", "Snapdragon 778G", 8));
		mobile.add(new Mobile(1, "Huawei nova 9", "Huawei","lorem ipsum dolor sit amet consectetur", "black", 689, "Huawei_9.png", "6.57 inch IPS", "Snapdragon 778G fusion", 8));
		mobile.add(new Mobile(1, "Samsung s10", "Samsung","lorem ipsum dolor sit amet consectetur", "black", 700, "Samsung_s10.png", "4.5 inch IPS", "Octa-core", 12));
		mobile.add(new Mobile(1, "Samsung Note 20 Ultra", "Samsung","lorem ipsum dolor sit amet consectetur", "green", 749, "Samsung_note.png", "6.7 inch IPS", "Octa-core", 12));
		
		
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
