package com.form.varma.repo;

import org.springframework.data.jpa.repository.JpaRepository;


import com.form.varma.model.VoterDetails;

public interface VoterRepository extends JpaRepository<VoterDetails,Integer>{

	VoterDetails getByVoterName(String voterName);

}
