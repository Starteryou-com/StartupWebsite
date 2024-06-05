import React from 'react';

const styles = {
  Jobbox: {
    top: '405px',
    left: '91px',
    width: '1244px',
    height: '380px',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
  },
};

const Jobbox = (props) => {
  return (
    <div style={styles.Jobbox}>
      {props.children}
    </div>
  );
};

export default Jobbox;