import React from "react";

const styles = {
  card: {
    margin: "20px",
    padding: "20px",
    backgroundColor: "#fafafa",
    borderRadius: "16px",
    boxShadow: "0px 2px 10px rgba(3,3,3,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "416px",
    width: "100%",
    boxSizing: "border-box",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "232px",
    borderRadius: "16px",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#aa93f3",
    fontSize: "18px",
    fontFamily: "DM Sans",
    fontWeight: 700,
    lineHeight: "24px",
    marginBottom: "10px",
  },
  description: {
    color: "#aa93f3",
    fontSize: "14px",
    fontFamily: "Poppins",
    lineHeight: "18px",
    textAlign: "justify",
    marginBottom: "20px",
  },
  button: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    border: "0",
    boxSizing: "border-box",
    borderRadius: "100px",
    color: "#aa93f3",
    backgroundColor: "#e5e5e5",
    outline: "none",
  },
  icon: {
    color: "#aa93f3",
    fill: "#aa93f3",
    width: "14px",
    height: "14px",
    fontSize: "14px",
  },
};

const defaultProps = {
  image:
    "https://images.unsplash.com/photo-1581985430116-d8fba25256b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwyOHx8cGlua3xlbnwxfHx8fDE2NzAyNTEwMTE&ixlib=rb-4.0.3&q=80&w=1080",
  title: "Title goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec arcu molestie, mollis purus sit amet, sodales libero. Nulla id odio maximus, congue.",
  IconComponent: () => (
    <svg style={styles.icon} viewBox="0 0 256 512">
      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
    </svg>
  ),
};

const ImageCard = (props) => {
  const {image, title, description, IconComponent} = props;
  const iconComponent = IconComponent ?? defaultProps.IconComponent;

  return (
    <div style={styles.card}>
      <div
        style={{
          ...styles.imageContainer,
          backgroundImage: `url(${image ?? defaultProps.image})`,
        }}
      >
        <button style={styles.button}>
          {iconComponent({style: styles.icon})}
        </button>
        <button style={styles.button}>
          {iconComponent({style: styles.icon})}
        </button>
      </div>
      <div style={styles.title}>{title ?? defaultProps.title}</div>
      <div style={styles.description}>
        {description ?? defaultProps.description}
      </div>
    </div>
  );
};

export default ImageCard;
