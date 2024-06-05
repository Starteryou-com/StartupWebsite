import React from 'react';

const styles = {
  ImageContainer: {
    top: '180px',
    left: '250px',
    width: '565px',
    height: '333px',
    borderRadius: '20px',
    backgroundImage: 'url(./image.jpeg)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
  },
};

const defaultProps = {
  image: 'https://images.unsplash.com/photo-1549180030-48bf079fb38a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwyfHxzeWRuZXl8ZW58MXx8fHwxNjY5ODk4NTU4&ixlib=rb-4.0.3&q=80&w=1080',
}

const Imagejob = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default Imagejob;