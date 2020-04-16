package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

//http://localhost/myfinalproject/main.do
@Controller
public class SearchController {
	@RequestMapping(value="main.do") 
	public String SearchProcess() {
		return "view/main";
	}
}
