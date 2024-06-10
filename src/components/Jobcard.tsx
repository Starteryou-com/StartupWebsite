const defaultProps = {
  image:
    "https://images.unsplash.com/photo-1549180030-48bf079fb38a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwyfHxzeWRuZXl8ZW58MXx8fHwxNjY5ODk4NTU4&ixlib=rb-4.0.3&q=80&w=1080",
  descriptiontext:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id odio maximus, congue felis sed, viverra mauris. Praesent luctus cursus risus porttitor bibendum. Proin ac ante ac lorem rutrum lacinia. Phasellus semper diam eget congue facilisis.",
  titletext: "Title goes here",
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
  },
};

// Card Component
const Card = (props) => {
  return <div style={cardStyles.Card}>{props.children}</div>;
};

// Styles for Image Component
const imageStyles = {
  Image: {
    width: "120px",
    height: "120px",
    borderRadius: "12px",
    marginRight: "20px",
  },
};

// Image Component
const Image = (props) => {
  return (
    <img
      src={props.image ?? defaultProps.image}
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
  },
};

// Title Text Component
const TitleText = (props) => {
  return (
    <div style={titleTextStyles.Title}>
      {props.title ?? defaultProps.titletext}
    </div>
  );
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
  },
};

// Description Text Component
const DescriptionText = (props) => {
  return (
    <div style={descTextStyles.Description}>
      {props.description ?? defaultProps.descriptiontext}
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
  },
};

// Apply Button Component
const ApplyButton = (props) => {
  return (
    <a
      href={props.applyLink}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonStyles.Button}
    >
      Apply Now
    </a>
  );
};
type JobcardProps = {
  image: string;
  title: string;
  description: string;
  applyLink: string;
};
// Main Jobcard Component
const Jobcard: React.FC<JobcardProps> = ({
  image,
  title,
  description,
  applyLink,
}) => {
  // Your component code here
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
