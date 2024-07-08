import React, { useState } from 'react';
import axios from 'axios';

type AddJobFormProps = {
  onClose: () => void;
  onAdd: (job: { job_title: string; job_description: string; job_image: string }) => void;
};

const cardStyles: React.CSSProperties = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '800px',
  height: '300px', // Set fixed height to match Jobcard
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  margin: '20px auto',
  boxSizing: 'border-box',
};

const inputStyles: React.CSSProperties = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

const buttonStyles: React.CSSProperties = {
  display: 'inline-block',
  padding: '12px 24px',
  fontSize: '16px',
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'bold',
  color: '#fff',
  backgroundColor: '#007bff',
  border: 'none',
  borderRadius: '6px',
  textDecoration: 'none',
  textAlign: 'center' as React.CSSProperties['textAlign'],
  transition: 'background-color 0.3s, transform 0.3s',
  margin: '10px',
};

const buttonHoverStyles: React.CSSProperties = {
  backgroundColor: '#0056b3',
  transform: 'scale(1.05)',
};

const AddJobForm: React.FC<AddJobFormProps> = ({ onClose, onAdd }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobImage, setJobImage] = useState('');
  const [hover, setHover] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/jobs', {
        job_title: jobTitle,
        job_description: jobDescription,
        job_image: jobImage,
      });
      console.log('Job added successfully:', response.data);
      onAdd(response.data); // Update parent component with the new job
      onClose(); // Close the form
    } catch (error) {
      console.error('Error adding job:', error);
    }
  };

  return (
    <div style={cardStyles}>
      <h2>Add New Job</h2>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <div>
          <label>Job Title</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
            style={inputStyles}
          />
        </div>
        <div>
          <label>Job Description</label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
            style={inputStyles}
          />
        </div>
        <div>
          <label>Job Image URL</label>
          <input
            type="text"
            value={jobImage}
            onChange={(e) => setJobImage(e.target.value)}
            required
            style={inputStyles}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            type="submit"
            style={{ ...buttonStyles, ...(hover ? buttonHoverStyles : {}) }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Add Job
          </button>
          <button
            type="button"
            onClick={onClose}
            style={{ ...buttonStyles, backgroundColor: '#dc3545', ...(hover ? { transform: 'scale(1.05)' } : {}) }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJobForm;
