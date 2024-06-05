import React from 'react';

const styles = {
  Titleedu: { // Updated name
    top: '470px',
    left: '290px',
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

const Titleedu = (props) => { // Updated name
  return (
    <div style={styles.Titleedu}> 
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Titleedu; // Updated name