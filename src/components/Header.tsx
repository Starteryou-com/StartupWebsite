import React from "react";

const styles = {
  Header: {
    top: "0px",
    left: "0px",
    width: "1440px",
    height: "115px",
    backgroundColor: "#ededed",
  },
};

const Header = (props) => {
  return <div style={styles.Header}>{props.children}</div>;
};

export default Header;
