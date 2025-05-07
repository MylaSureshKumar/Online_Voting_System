import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NomineeForm() {
  const navigate = useNavigate();

  const [nominee, setNominee] = useState({
    nomineeName: '',
    nomineeParty: '',
    nomineeAddress: '',
  });

  const handleChange = (event) => {
    setNominee({ ...nominee, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8758/nominee/add', nominee);
      console.log(response.data);
      alert('Nominee added successfully!');
      // Clear the form fields after successful submission
      setNominee({
        nomineeName: '',
        nomineeParty: '',
        nomineeAddress: '',
      });
    } catch (error) {
      console.error('Error during registration:', error.response?.data || error.message);
      alert('Error adding nominee. Please try again.');
    }
  };

  const isFormValid = () => {
    return nominee.nomineeName !== '' && nominee.nomineeParty !== '' && nominee.nomineeAddress !== '';
  };

  return (
    <div className='container ' style={{border : '2px solid gray'}}>
      <h2 className='text-center p-2 my-3 mx-2 text-decoration-underline'>New User ? Register Here</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="" id='nomineeName' className="form-label">Enter NomineeName : </label>
        <input
          type="text"
          className="form-control p-2 m-2"
          name="nomineeName"
          autoComplete='off'
          placeholder="Nomineename"
          value={nominee.nomineeName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="" id='nomineeParty' className="form-label">Enter Party : </label>
        <input
          type="text"
          className="form-control p-2 m-2"
          placeholder="Party"
          autoComplete='off'
          name="nomineeParty"
          value={nominee.nomineeParty}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="" id='nomineeAddress' className="form-label">Enter Address : </label>
        <input
          type="text"
          className="form-control p-2 m-2"
          placeholder="Address"
          autoComplete='off'
          name="nomineeAddress"
          value={nominee.nomineeAddress}
          onChange={handleChange}
          required
        />
        <br />
        <input type="submit" value="Submit" className="b1" disabled={!isFormValid()} />
      </form>
    </div>
  );
}
