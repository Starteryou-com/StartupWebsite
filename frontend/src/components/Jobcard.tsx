import React, {useState, useEffect} from "react";
import CrudDropdown from "./CrudDropdown";

// Default props
const defaultProps = {
  image:
    "https://images.unsplash.com/photo-1549180030-48bf079fb38a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwyfHxzeWRuZXl8ZW58MXx8fHwxNjY5ODk4NTU4&ixlib=rb-4.0.3&q=80&w=1080",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id odio maximus, congue felis sed, viverra mauris. Praesent luctus cursus risus porttitor bibendum. Proin ac ante ac lorem rutrum lacinia. Phasellus semper diam eget congue facilisis.",
  title: "Title goes here",
};

// Styles for Card Component
const cardStyles = {
  Card: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    maxWidth: "800px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    margin: "20px auto",
    boxSizing: "border-box",
  } as React.CSSProperties,
};

// Card Component
const Card: React.FC<{children: React.ReactNode}> = ({children}) => {
  return <div style={cardStyles.Card}>{children}</div>;
};

// Styles for Image Component
const imageStyles = {
  Image: {
    width: "120px",
    height: "120px",
    borderRadius: "12px",
    marginRight: "20px",
  } as React.CSSProperties,
};

// Image Component
const Image: React.FC<{image?: string}> = ({image}) => {
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
    color: "#333333",
    fontSize: "24px",
    fontFamily: "Arial, sans-serif",
    fontWeight: 600,
    lineHeight: "1.2",
    marginBottom: "10px",
    textAlign: "left",
  } as React.CSSProperties,
};

// Title Text Component
const TitleText: React.FC<{title?: string}> = ({title}) => {
  return <div style={titleTextStyles.Title}>{title ?? defaultProps.title}</div>;
};

// Styles for Description Text Component
const descTextStyles = {
  Description: {
    color: "#666666",
    fontSize: "16px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.5",
    marginBottom: "10px",
    textAlign: "left",
  } as React.CSSProperties,
};

// Description Text Component
const DescriptionText: React.FC<{description?: string}> = ({description}) => {
  return (
    <div style={descTextStyles.Description}>
      {description ?? defaultProps.description}
    </div>
  );
};

// Styles for Apply Button Component
const applyButtonStyles = {
  Button: {
    display: "inline-block",
    padding: "12px 24px",
    fontSize: "16px",
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "6px",
    textDecoration: "none",
    textAlign: "center",
    transition: "background-color 0.3s, transform 0.3s",
  } as React.CSSProperties,
  ButtonHover: {
    backgroundColor: "#0056b3",
    transform: "scale(1.05)",
  } as React.CSSProperties,
};

type ApplyButtonProps = {
  applyLink: string;
};

const ApplyButton: React.FC<ApplyButtonProps> = ({applyLink}) => {
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
  image?: string;
  title?: string;
  description?: string;
  applyLink: string;
};

// Main Jobcard Component
const Jobcard: React.FC<JobcardProps> = ({
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

  const handleAddJob = () => {
    // Logic to add job
    alert("Add Job");
  };

  const handleEditJob = () => {
    // Logic to edit job
    const newTitle = prompt("Enter new job title:", jobTitle);
    if (newTitle) setJobTitle(newTitle);

    const newDescription = prompt("Enter new job description:", jobDescription);
    if (newDescription) setJobDescription(newDescription);

    const newImage = prompt("Enter new job image URL:", jobImage);
    if (newImage) setJobImage(newImage);
  };

  const handleDeleteJob = () => {
    // Logic to delete job
    alert("Delete Job");
  };

  return (
    <Card>
      <div style={{display: "flex", alignItems: "flex-start", width: "100%"}}>
        <Image image={jobImage} />
        <div style={{flex: 1}}>
          <TitleText title={jobTitle} />
          <DescriptionText description={jobDescription} />
          <ApplyButton applyLink={applyLink} />
        </div>
      </div>
      <CrudDropdown
        onAdd={handleAddJob}
        onEdit={handleEditJob}
        onDelete={handleDeleteJob}
      />
    </Card>
  );
};

export default Jobcard;
