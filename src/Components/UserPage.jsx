import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Register() {
  const [regi, setRegi] = useState({
    voterName: generateUniqueId(),
    nominee: ''
  });

  const [nominees, setNominees] = useState([]);
  const [votedSuccessfully, setVotedSuccessfully] = useState(false);

  useEffect(() => {
    const fetchNominees = async () => {
      try {
        const response = await axios.get('http://localhost:8758/nominee/get');
        setNominees(response.data);
      } catch (error) {
        console.error('Error fetching nominee data:', error);
      }
    };

    fetchNominees();
  }, []);

  const handleChange = (event) => {
    setRegi({ ...regi, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8758/voter/add', regi);
      console.log(response.data);
      setVotedSuccessfully(true);
    } catch (error) {
      console.error('Error during registration:', error.response?.data || error.message);
    }
  };

  const isFormValid = () => {
    return regi.voterName !== '' && regi.nominee !== '';
  };

  function generateUniqueId() {
    return Math.floor(Math.random() * Date.now());
  }

  return (
    <div className='container' style={{border: '2px solid gray'}}>
      <h2 className='text-center p-2 my-3 mx-2 text-decoration-underline'>Vote For Future</h2>
      {!votedSuccessfully && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="voterName" className="vote">Voter Id </label>
          <input
            type="text"
            className="form-control p-2 m-2"
            name="voterName"
            autoComplete='off'
            placeholder="voterId"
            value={regi.voterName}
            onChange={handleChange}
            required
            readOnly
          />
          <br />
          <div>
            <label className="nm">Select Nominee:</label>
            <div className="nm2">
              {nominees.map(nominee => (
                <div key={nominee.nomineeId}>
                  <input
                    type="radio"
                    name="nominee"
                    id={`nominee-${nominee.nomineeId}`}
                    value={nominee.nomineeName}
                    onChange={handleChange}
                    checked={regi.nominee === nominee.nomineeName}
                    required
                  />
                  <label htmlFor={`nominee-${nominee.nomineeId}`}>{nominee.nomineeName}</label>
                </div>
              ))}
            </div>
          </div>
          <br />
          <input type="submit" value="Vote" className="v1" disabled={!isFormValid()} />
        </form>
      )}
      {votedSuccessfully && (
        <div className="alert alert-success" role="alert">
          You have voted successfully!
        </div>
      )}
    </div>
  );
}
