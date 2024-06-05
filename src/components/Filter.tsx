import React from 'react';

const styles = {
  Filter: {
    cursor: 'pointer',
    top: '456px',
    left: '135px',
    width: '165px',
    height: '45px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    backgroundColor: '#0000ff',
    color: '#ffffff',
    fontSize: '24px',
    fontFamily: 'Roboto',
    lineHeight: '31px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Filters',
};

const Filter = (props) => {
  return (
    <button style={styles.Filter}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Filter;