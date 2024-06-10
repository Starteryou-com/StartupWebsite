import React from "react";

// Default props
const defaultProps = {
  image:
    "https://images.unsplash.com/photo-1549180030-48bf079fb38a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwyfHxzeWRuZXl8ZW58MXx8fHwxNjY5ODk4NTU4&ixlib=rb-4.0.3&q=80&w=1080",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  title: "Title goes here",
};

// Styles for Card Component
const cardStyles = {
  Card: {
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
const Card: React.FC = ({children}) => {
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
const buttonStyles = {
  Button: {
    cursor: "pointer",
    width: "150px",
    height: "45px",
    backgroundColor: "#007bff",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "Arial, sans-serif",
    fontWeight: 600,
    border: "none",
    borderRadius: "8px",
    outline: "none",
    textAlign: "center",
    lineHeight: "40px",
    textDecoration: "none",
    transition: "background-color 0.3s",
  } as React.CSSProperties,
};

// Apply Button Component
const ApplyButton: React.FC<{applyLink: string}> = ({applyLink}) => {
  return (
    <a
      href={applyLink}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonStyles.Button}
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
  return (
    <Card>
      <Image image={image} />
      <div style={{flex: 1}}>
        <TitleText title={title} />
        <DescriptionText description={description} />
        <ApplyButton applyLink={applyLink} />
      </div>
    </Card>
  );
};

export default Jobcard;
