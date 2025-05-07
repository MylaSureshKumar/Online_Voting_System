package com.form.varma.repo;

import org.springframework.data.jpa.repository.JpaRepository;


import com.form.varma.model.NomineeDetails;

public interface NomineeRepository extends JpaRepository<NomineeDetails,Integer>{

	NomineeDetails getByNomineeName(String nomineeName);

}
