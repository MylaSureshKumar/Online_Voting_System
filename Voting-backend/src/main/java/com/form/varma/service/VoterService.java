package com.form.varma.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.form.varma.model.VoterDetails;
import com.form.varma.repo.VoterRepository;

@Service
public class VoterService {
	@Autowired
	VoterRepository voterRepository;
	public List<VoterDetails> getVoter(){
		return voterRepository.findAll();
		}
	public VoterDetails addVoter(VoterDetails VoterDetails) {
		return voterRepository.save(VoterDetails);
	}
	public VoterDetails getVoterByName(String voterName) {
		return voterRepository.getByVoterName(voterName);
	}
	public String deleteVoter(int voterId) {
		voterRepository.deleteById(voterId);
		return "Record Deleted";
	}
}
