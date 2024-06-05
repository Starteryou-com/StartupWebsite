import React from 'react';

const styles = {
  Faq: {
    color: '#030303',
    fontSize: '48px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    lineHeight: '62px',
    textAlign: 'justify',
  },
};

const defaultProps = {
  text: 'FAQ\'S',
};

const Faq = (props) => {
  return (
    <div style={styles.Faq}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Faq;