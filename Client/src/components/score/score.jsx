import React, { useState } from "react";
import { axiosInstance } from "../../lib/axios";
import "./score.css";

const Score = () => {
  const [name, setName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [studentDetails, setStudentDetails] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear any previous error
    setError("");

    try {
      // Send the student details to the backend
      const response = await axiosInstance.post("/score", {
        name,
        idNumber,
        studentNumber,
      });

      if (response.data.success) {
        // Store the student details and scores
        setStudentDetails(response.data);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("Couldn't find the user. Please enter details again");
    }
  };

  return (
    <div className="auth-container">
      <h1 className="auth-heading">Check Your Exam Results</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>ID Number</label>
          <input
            type="text"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Student Number</label>
          <input
            type="text"
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-btn">
          Get Results
        </button>
      </form>

      {error && <div className="error">{error}</div>}

      {studentDetails && (
        <div className="results">
          <h2>Student Details</h2>
          <p>Name: {studentDetails.studentDetails.name}</p>
          <p>ID Number: {studentDetails.studentDetails.idNumber}</p>
          <p>Student Number: {studentDetails.studentDetails.studentNumber}</p>
          <p>Center Number: {studentDetails.studentDetails.centerNumber}</p>
          <p>Nationality: {studentDetails.studentDetails.nationality}</p>
          <p>Passport Number: {studentDetails.studentDetails.passportNumber}</p>

          <h2>Scores</h2>
          <p>Listening: {studentDetails.scores.listening}</p>
          <p>Reading: {studentDetails.scores.reading}</p>
          <p>Writing: {studentDetails.scores.writing}</p>
          <p>Speaking: {studentDetails.scores.speaking}</p>
          <p>Overall: {studentDetails.scores.overall}</p>
          <p>CEFR Level: {studentDetails.scores.CEFR}</p>
        </div>
      )}
    </div>
  );
};

export default Score;
