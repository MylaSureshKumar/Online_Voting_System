import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import NomineeForm from './NomineeForm';

export default function AdminPage() {
  const [showForm, setShowForm] = useState(false);
  const [voterDetails, setVoterDetails] = useState([]); // State to store voter details

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // Function to fetch voter details
  const fetchVoterDetails = async () => {
    try {
      const response = await axios.get('http://localhost:8758/voter/get'); // Replace with your endpoint
      setVoterDetails(response.data);
    } catch (error) {
      console.error('Error fetching voter details:', error);
    }
  };

  // Function to group voter details by nominee and count occurrences
  const countVotersByNominee = () => {
    const nomineeCounts = {};
    voterDetails.forEach((voter) => {
      const { nominee } = voter;
      if (nominee in nomineeCounts) {
        nomineeCounts[nominee]++;
      } else {
        nomineeCounts[nominee] = 1;
      }
    });
    return nomineeCounts;
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Admin Dashboard</h1>
      <p className="text-center">Welcome to the admin page.</p>
      <div className="text-center mt-3">
        <button className="a1" onClick={toggleForm}>
          {showForm ? 'Close Voting Application Form' : 'Nomination Form'}
        </button>
        {/* Button to fetch voter details */}
        <button className="a2" onClick={fetchVoterDetails}>
          Show Voter Results
        </button>
      </div>
      {showForm && <NomineeForm />}
      {/* Render voter details if available */}
      {voterDetails.length > 0 && (
        <div className="mt-4">
          <h2 className="text-center">Voter Details</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nominee Voted</th>
                <th>Number of Voters</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(countVotersByNominee()).map(([nominee, count]) => (
                <tr key={nominee}>
                  <td>{nominee}</td>
                  <td>{count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
