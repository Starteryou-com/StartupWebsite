import React from 'react';

const styles = {
  Jobdescription: {
    top: '250px',
    right: '550px',
    color: '#3d3d3d',
    fontSize: '14px',
    fontFamily: 'Poppins',
    lineHeight: '16px',
    position: 'absolute',
  },
};

const defaultProps = {
  text: 'Lorem ipsum dolor sit amet, consectetur ',
};

const Jobdescription = (props) => {
  return (
    <div style={styles.Jobdescription}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Jobdescription;