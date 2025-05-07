import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function UserDetails() {
  const location = useLocation();
  const { username } = location.state;

  const [nominees, setNominees] = useState([]);
  const [selectedNominee, setSelectedNominee] = useState(null);
  const [voted, setVoted] = useState(false);
  const [votedUsername, setVotedUsername] = useState(null);

  useEffect(() => {
    const fetchNominees = async () => {
      try {
        const response = await axios.get('http://localhost:8758/nominee/get');
        setNominees(response.data);
      } catch (error) {
        console.error('Error fetching nominee details:', error);
      }
    };

    fetchNominees();
  }, []);

  const handleVote = async () => {
    try {
      await axios.post('http://localhost:8758/api/vote', {
        username: username,
        nominee: selectedNominee
      });

      // Update the state to indicate that the user has voted
      setVoted(true);
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  const handleNomineeSelection = (e) => {
    const selectedNomineeId = e.target.value;
    const selectedNominee = nominees.find(nominee => nominee.nomineeId === selectedNomineeId);
    setSelectedNominee(selectedNominee);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission if needed
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Welcome, {username}!</h1>
      <p className="text-center">This is your user page.</p>
      <div className="mt-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="usernameInput" className="form-label">Username:</label>
            <input type="text" className="form-control" id="usernameInput" value={username} readOnly />
          </div>
          <div className="mb-3">
            <label htmlFor="nomineeInput" className="form-label">Select Nominee:</label>
            <select className="form-select" id="nomineeInput" onChange={handleNomineeSelection}>
              <option value="">Select nominee...</option>
              {nominees.map((nominee) => (
                <option key={nominee.nomineeId} value={nominee.nomineeId}>{nominee.nomineeName}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleVote} disabled={!selectedNominee}>Vote</button>
        </form>
        {voted && <p className="text-success">Thanks for your vote!</p>}
      </div>
    </div>
  );
}
