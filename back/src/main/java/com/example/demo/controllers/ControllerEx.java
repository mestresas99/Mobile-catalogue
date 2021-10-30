package com.example.demo.controllers;


import java.util.HashSet;

import java.util.Set;

import javax.annotation.PostConstruct;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
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
	Set<Mobile> mobile;
	
	@PostConstruct
	public void init() {
		mobile = new HashSet<>();
		mobile.add(new Mobile(1, "IPhone 7", "Apple","lorem ipsum dolor sit amet consectetur", "black", 600, "./images/a4012e4f-8fae-45a5-88b0-2ecec9b2d2e3_1.18a6f3642dab5336c94ebae20262d64b.jpeg", "4.7 inch IPS", "A10 fusion", 2));
		mobile.add(new Mobile(2, "IPhone 10", "Apple","lorem ipsum dolor sit amet consectetur", "white", 930, "./images/iPhone-X-64GB-Silver-1-1-1-1.png.jpeg", "13 inch IPS", "A10 fusion", 4));
		mobile.add(new Mobile(3, "Samsung s20", "Samsung","lorem ipsum dolor sit amet consectetur", "black", 820, "./images/picsart_09-04-02-35-341-b3c1ca0e5aaccbf09415998581258380-640-0.jpg", "4.7 inch IPS", "A14 Bionic", 2));
		mobile.add(new Mobile(4, "IPhone 11 Pro", "Apple","lorem ipsum dolor sit amet consectetur", "black", 900, "./images/gris1.jpg", "7.5 inch IPS", "A14 Bionic", 2));
		mobile.add(new Mobile(5, "IPhone 12", "Apple","lorem ipsum dolor sit amet consectetur", "white", 850, "./images/iphone-12-white-select-2020.jpeg", "4.7 inch IPS", "A14 Bionic", 4));
		mobile.add(new Mobile(6, "Huawei nova 8i", "Huawei","lorem ipsum dolor sit amet consectetur", "black", 550, "./images/450_1000.jpeg", "6.57 inch IPS", "Snapdragon 778G", 8));
		mobile.add(new Mobile(7, "Huawei nova 9", "Huawei","lorem ipsum dolor sit amet consectetur", "black", 689, "./images/Huawei-Smartphone-Nova-8i-Starry-Black-(HMS)-9.jpg", "6.57 inch IPS", "Snapdragon 778G fusion", 8));
		mobile.add(new Mobile(8, "Samsung s10", "Samsung","lorem ipsum dolor sit amet consectetur", "black", 700, "./images/235548_ed97333e-0c9d-44bc-8076-3e98c00b59ac.jpg", "4.5 inch IPS", "Octa-core", 12));
		mobile.add(new Mobile(9, "Samsung Note 20 Ultra", "Samsung","lorem ipsum dolor sit amet consectetur", "green", 749, "./images/Samsung-Galaxy-Note-20-verde.jpg.webp", "6.7 inch IPS", "Octa-core", 12));
		
		//user = new User(mobile);
		
	}
	
	@CrossOrigin
	@RequestMapping(value= "/phones", method= RequestMethod.GET, produces= {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody Set<Mobile> userResource () {
	
		return mobile;
	}
	
//	@RequestMapping(value="/hello/{name}", method = RequestMethod.GET)
//	public @ResponseBody String getting(@PathVariable String name,
//										@RequestParam (required=false)String surname) {
//		
//		String text;
//		if(surname == null) {
//			text = "hello "+name;
//		}else {
//			text = "hello "+name +" "+ surname;
//		}
//		return text;
//	}

}
