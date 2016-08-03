package org.khmeracademy.smg.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/generation")
public class GenerationController {
	
	@RequestMapping({"", "/","/index"})
	public String add(){
		return "generation";
		}
}
