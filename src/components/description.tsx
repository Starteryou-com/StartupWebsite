import React from 'react';

const styles = {
  Description: {
    color: '#000000',
    fontSize: '20px',
    fontFamily: 'Poppins',
    lineHeight: '26px',
    textAlign: 'justify'
  },
};

const defaultProps = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
};

const Description = (props) => {
  return (
    <div style={styles.Description}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Description;