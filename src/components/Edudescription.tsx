import React from 'react';

const styles = {
  Edudescription: {
    top: '520px',
    left: '200px',
    color: '#aa93f3',
    fontSize: '14px',
    fontFamily: 'Poppins',
    lineHeight: '18px',
    textAlign: 'justify',
    position: 'absolute',
  },
};

const defaultProps = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

const Edudescription = (props) => {
  return (
    <div style={styles.Edudescription}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Edudescription;