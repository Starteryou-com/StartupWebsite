import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Jobcard from './Jobcard';

// Styles for JobsList Component
const jobsListStyles = {
  Container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '20px',
  } as React.CSSProperties,
};

type Job = {
  _id: string;
  job_title: string;
  job_description: string;
  job_image: string;
};

const JobsList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState<string | null>(null);
  fetch('http://localhost:8000/jobs')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('Fetched data:', data);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:8000/jobs');
        console.log('Response data:', response.data);
        if (Array.isArray(response.data)) {
          setJobs(response.data);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setError('Failed to load jobs. Please try again later.');
      }
    };

    fetchJobs();
  }, []);

  return (
    <div style={jobsListStyles.Container}>
      {error ? (
        <div style={{ color: 'red' }}>{error}</div>
      ) : (
        jobs.map((job) => (
          <Jobcard
            key={job._id}
            id={job._id} 
            image={job.job_image}
            title={job.job_title}
            description={job.job_description}
            applyLink={`/jobs/${job._id}`}  // Assuming you have a detailed view link
          />
        ))
      )}
    </div>
  );
};

export default JobsList;
