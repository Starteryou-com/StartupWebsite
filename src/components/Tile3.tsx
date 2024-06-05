import React from 'react';

const styles = {
  Tile3: {
    top: '571px',
    left: '533px',
    width: '416px',
    height: '408px',
    backgroundColor: '#fafafa',
    borderRadius: '16px',
    boxShadow: '0px 2px 10px rgba(3,3,3,0.1)',
  },
};

const Tile3 = (props) => {
  return (
    <div style={styles.Tile3}>
      {props.children}
    </div>
  );
};

export default Tile3;