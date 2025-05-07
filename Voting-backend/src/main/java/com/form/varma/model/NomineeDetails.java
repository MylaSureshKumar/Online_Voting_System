package com.form.varma.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table
@Data
@NoArgsConstructor
@AllArgsConstructor
public class NomineeDetails {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int nomineeId;
	@Column
	private String nomineeName;
	@Column
	private String nomineeParty;
	@Column
	private String nomineeAddress;
	
}
