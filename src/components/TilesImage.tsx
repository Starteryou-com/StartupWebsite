const styles = {
  ImageContainer: {
    top: "603px",
    left: "98px",
    width: "327px",
    height: "232px",
    borderRadius: "16px",
    backgroundImage: "url(./image.jpeg)",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
};

const defaultProps = {
  image:
    "https://images.unsplash.com/photo-1581985430116-d8fba25256b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwyOHx8cGlua3xlbnwxfHx8fDE2NzAyNTEwMTE&ixlib=rb-4.0.3&q=80&w=1080",
};

const TilesImage = (props) => {
  return (
    <div
      style={{
        ...styles.ImageContainer,
        backgroundImage: `url(${props.image ?? defaultProps.image})`,
      }}
    />
  );
};

export default TilesImage;
