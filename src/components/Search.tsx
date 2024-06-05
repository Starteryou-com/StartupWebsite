import React from 'react';

const styles = {
  Input: {
    top: '253px',
    left: '201px',
    width: '891px',
    height: '46px',
    padding: '0px 8px',
    border: '1px solid #505050',
    boxSizing: 'border-box',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    backgroundColor: '#ffffff',
    color: '#000000',
    fontSize: '16px',
    fontFamily: 'Roboto',
    lineHeight: '20px',
    outline: 'none',
  },
};

const defaultProps = {
  text: 'Search',
};

const Search = (props) => {
  return (
    <input style={styles.Input} placeholder={props.text ?? defaultProps.text} />
  );
};

export default Search;