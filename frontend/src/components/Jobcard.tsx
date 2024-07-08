import React, { useState } from 'react';
import axios from 'axios';
import CrudDropdown from './CrudDropdown';
import AddJobForm from './AddJobForm';

// Default props
const defaultProps = {
  image: 'https://images.unsplash.com/photo-1549180030-48bf079fb38a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwyfHxzeWRuZXl8ZW58MXx8fHwxNjY5ODk4NTU4&ixlib=rb-4.0.3&q=80&w=1080',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id odio maximus, congue felis sed, viverra mauris. Praesent luctus cursus risus porttitor bibendum. Proin ac ante ac lorem rutrum lacinia. Phasellus semper diam eget congue facilisis.',
  title: 'Title goes here',
};

// Styles for Card Component
const cardStyles = {
  Card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    maxWidth: '800px',
    height: '300px', // Set fixed height
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '20px auto',
    boxSizing: 'border-box',
  } as React.CSSProperties,
};

// Card Component
const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div style={cardStyles.Card}>{children}</div>;
};

// Styles for Image Component
const imageStyles = {
  Image: {
    width: '120px',
    height: '120px',
    borderRadius: '12px',
    marginRight: '20px',
  } as React.CSSProperties,
};

// Image Component
const Image: React.FC<{ image?: string }> = ({ image }) => {
  return (
    <img
      src={image ?? defaultProps.image}
      alt="Job"
      style={imageStyles.Image}
    />
  );
};

// Styles for Title Text Component
const titleTextStyles = {
  Title: {
    color: '#333333',
    fontSize: '24px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 600,
    lineHeight: '1.2',
    marginBottom: '10px',
    textAlign: 'left',
  } as React.CSSProperties,
};

// Title Text Component
const TitleText: React.FC<{ title?: string }> = ({ title }) => {
  return <div style={titleTextStyles.Title}>{title ?? defaultProps.title}</div>;
};

// Styles for Description Text Component
const descTextStyles = {
  Description: {
    color: '#666666',
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.5',
    marginBottom: '10px',
    textAlign: 'left',
  } as React.CSSProperties,
};

// Description Text Component
const DescriptionText: React.FC<{ description?: string }> = ({ description }) => {
  return (
    <div style={descTextStyles.Description}>
      {description ?? defaultProps.description}
    </div>
  );
};

// Styles for Apply Button Component
const applyButtonStyles = {
  Button: {
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
    textAlign: 'center',
    transition: 'background-color 0.3s, transform 0.3s',
  } as React.CSSProperties,
  ButtonHover: {
    backgroundColor: '#0056b3',
    transform: 'scale(1.05)',
  } as React.CSSProperties,
};

type ApplyButtonProps = {
  applyLink: string;
};

const ApplyButton: React.FC<ApplyButtonProps> = ({ applyLink }) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={applyLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...applyButtonStyles.Button,
        ...(hover ? applyButtonStyles.ButtonHover : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      Apply Now
    </a>
  );
};

type JobcardProps = {
  id: string;
  image?: string;
  title?: string;
  description?: string;
  applyLink: string;
};

// Main Jobcard Component
const Jobcard: React.FC<JobcardProps> = ({
  id,
  image,
  title,
  description,
  applyLink,
}) => {
  const [jobTitle, setJobTitle] = useState(title ?? defaultProps.title);
  const [jobDescription, setJobDescription] = useState(
    description ?? defaultProps.description
  );
  const [jobImage, setJobImage] = useState(image ?? defaultProps.image);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);

  const handleAddJob = (job?: { job_title: string; job_description: string; job_image: string }) => {
    if (job) {
      console.log("Job Added", job); // Log the job details
      setJobTitle(job.job_title);
      setJobDescription(job.job_description);
      setJobImage(job.job_image);
      setIsAddFormVisible(false); // Close the form after adding the job
    } else {
      console.log("Add Job Clicked"); // Log the add job action
      setIsAddFormVisible(true); // Show the form for adding a new job
    }
  };

  const handleCloseForm = () => {
    console.log("Close Form Clicked"); // Log the close form action
    setIsAddFormVisible(false); // Hide the form
  };

  const handleEditJob = async () => {
    const newTitle = prompt('Enter new job title:', jobTitle);
    if (newTitle) setJobTitle(newTitle);

    const newDescription = prompt('Enter new job description:', jobDescription);
    if (newDescription) setJobDescription(newDescription);

    const newImage = prompt('Enter new job image URL:', jobImage);
    if (newImage) setJobImage(newImage);

    try {
      const response = await axios.put(`/jobs/${id}`, {
        job_title: newTitle,
        job_description: newDescription,
        job_image: newImage,
      });
      console.log('Job edited successfully:', response.data);
    } catch (error) {
      console.error('Error editing job:', error);
    }
  };

  const handleDeleteJob = async () => {
    try {
      const response = await axios.delete(`http://localhost:8000/jobs/${id}`);
      console.log('Job deleted successfully:', response.data);
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  return (
    <div>
      <Card>
        <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
          <Image image={jobImage} />
          <div style={{ flex: 1 }}>
            <TitleText title={jobTitle} />
            <DescriptionText description={jobDescription} />
            <ApplyButton applyLink={applyLink} />
          </div>
        </div>
        <CrudDropdown
          onAdd={() => handleAddJob()}
          onEdit={handleEditJob}
          onDelete={handleDeleteJob}
        />
      </Card>
      {isAddFormVisible && (
        <AddJobForm onClose={handleCloseForm} onAdd={handleAddJob} />
      )}
    </div>
  );
};

export default Jobcard;
