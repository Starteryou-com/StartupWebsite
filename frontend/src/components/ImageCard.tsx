interface CardStyle {
  margin: string;
  padding: string;
  backgroundColor: string;
  borderRadius: string;
  boxShadow: string;
  display: string;
  flexDirection: string;
  alignItems: string;
  maxWidth: string;
  width: string;
  boxSizing: string;
}

interface ImageContainerStyle {
  position: string;
  width: string;
  height: string;
  borderRadius: string;
  backgroundPosition: string;
  backgroundSize: string;
  backgroundRepeat: string;
  marginBottom: string;
  display: string;
  justifyContent: string;
  alignItems: string;
}

interface TextStyle {
  color: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: number | string;
  lineHeight: string;
  textAlign?: string;
  marginBottom?: string;
}

interface ButtonStyle {
  cursor: string;
  display: string;
  justifyContent: string;
  alignItems: string;
  width: string;
  height: string;
  border: string;
  boxSizing: string;
  borderRadius: string;
  color: string;
  backgroundColor: string;
  outline: string;
}

interface IconStyle {
  color: string;
  fill: string;
  width: string;
  height: string;
  fontSize: string;
}

const styles: {
  card: CardStyle;
  imageContainer: ImageContainerStyle;
  title: TextStyle;
  description: TextStyle;
  button: ButtonStyle;
  icon: IconStyle;
} = {
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
    fontWeight: "10",
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
export default styles;
