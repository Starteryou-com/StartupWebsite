import React from 'react';

const styles = {
  Tiles: {
    top: '571px',
    left: '52px',
    width: '416px',
    height: '408px',
    backgroundColor: '#fafafa',
    borderRadius: '16px',
    boxShadow: '0px 2px 10px rgba(3,3,3,0.1)',
  },
};

const Tiles = (props: any) => {
  return (
    <div style={styles.Tiles}>
      {props.children}
    </div>
  );
};

export default Tiles;