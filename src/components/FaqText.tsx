import React from 'react';

const styles = {
  FaqText: {
    color: '#000000',
    fontSize: '48px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    lineHeight: '62px',
  },
};

const defaultProps = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu',
};

const FaqText = (props) => {
  return (
    <div style={styles.FaqText}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default FaqText;