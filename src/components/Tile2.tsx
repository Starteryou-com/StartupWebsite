import React from 'react';

const styles = {
  Tile2: {
    top: '1110px',
    left: '46px',
    width: '416px',
    height: '408px',
    backgroundColor: '#fafafa',
    borderRadius: '16px',
    boxShadow: '0px 2px 10px rgba(3,3,3,0.1)',
  },
};

const Tile2 = (props) => {
  return (
    <div style={styles.Tile2}>
      {props.children}
    </div>
  );
};

export default Tile2;