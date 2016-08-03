package org.khmeracademy.smg.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/course")
public class CourseController {
	
	@RequestMapping({"", "/","/index"})
	public String course(){
		return "course";
	}
}
