package com.form.varma.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.form.varma.model.NomineeDetails;
import com.form.varma.service.NomineeService;
@CrossOrigin(origins = "*" , allowedHeaders ="*")
@RestController
@RequestMapping("/nominee")
public class NomineeController {
	@Autowired
	
	NomineeService nomineeService;
	@GetMapping("/get")
	public List<NomineeDetails> getNominee(){
		return nomineeService.getNominee();
	}
	@PostMapping("/add")
	public NomineeDetails addNominee(@RequestBody NomineeDetails nomineeDetails) {
		return nomineeService.addNominee(nomineeDetails);
	} 
	@GetMapping("/get/{nomineeName}")
	public NomineeDetails getNomineeByName(@PathVariable String nomineeName) {
		return nomineeService.getNomineeByName(nomineeName);
	}
	@DeleteMapping("/del/{nomineeId}")
	public String deleteNominee(@PathVariable int nomineeId) {
		return nomineeService.deleteNominee(nomineeId);
	}
	
}
