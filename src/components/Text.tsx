import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '48px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    lineHeight: '62px',
    textAlign: 'justify',
  },
};

const defaultProps = {
  text: 'Education',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;