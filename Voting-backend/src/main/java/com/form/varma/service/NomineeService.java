package com.form.varma.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.form.varma.model.NomineeDetails;
import com.form.varma.repo.NomineeRepository;

@Service
public class NomineeService {
	@Autowired
	NomineeRepository nomineeRepository;
	public List<NomineeDetails> getNominee(){
		return nomineeRepository.findAll();
		}
	public NomineeDetails addNominee(NomineeDetails nomineeDetails) {
		return nomineeRepository.save(nomineeDetails);
	}
	public NomineeDetails getNomineeByName(String nomineeName) {
		return nomineeRepository.getByNomineeName(nomineeName);
	}
	public String deleteNominee(int nomineeId) {
		nomineeRepository.deleteById(nomineeId);
		return "Record Deleted";
	}
}
