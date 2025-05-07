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

import com.form.varma.model.VoterDetails;
import com.form.varma.service.VoterService;
@CrossOrigin(origins = "*" , allowedHeaders ="*")
@RestController
@RequestMapping("/voter")
public class VoterController {
	@Autowired
	
	VoterService voterService;
	@GetMapping("/get")
	public List<VoterDetails> getVoter(){
		return voterService.getVoter();
	}
	@PostMapping("/add")
	public VoterDetails addVoter(@RequestBody VoterDetails VoterDetails) {
		return voterService.addVoter(VoterDetails);
	} 
	@GetMapping("/get/{VoterName}")
	public VoterDetails getVoterByName(@PathVariable String voterName) {
		return voterService.getVoterByName(voterName);
	}
	@DeleteMapping("/del/{VoterId}")
	public String deleteVoter(@PathVariable int voterId) {
		return voterService.deleteVoter(voterId);
	}
	
}
