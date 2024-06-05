import React from 'react';

const styles = {
  Titlejob: {
    top: '180px',
    right: '650px',
    color: '#030303',
    fontSize: '24px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    lineHeight: '32px',
    position: 'absolute',
  },
};

const defaultProps = {
  text: 'Title goes here',
};

const Titlejob = (props) => {
  return (
    <div style={styles.Titlejob}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Titlejob;