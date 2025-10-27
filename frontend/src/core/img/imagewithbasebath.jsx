import React from 'react';
import { image_path } from '../../environment';

const ImageWithBasePath = (props) => {
  const fullSrc = `${image_path}${props.src}`;
  return (
    <img
      className={props.className}
      src={fullSrc}
      height={props.height}
      alt={props.alt}
      width={props.width}
      id={props.id}
    />
  );
};

export default ImageWithBasePath;