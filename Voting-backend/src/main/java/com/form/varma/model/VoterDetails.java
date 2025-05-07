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
public class VoterDetails {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int voterId;
	
	@Column(unique = true)
	private String voterName;
	@Column
	private String nominee;

	
}
