import * as React from 'react';

import './style.scss';

export interface ImageProps {
  imagePath: string;
  imageAlt: string;
}


export const Image = (props: ImageProps) => {
  const { imagePath, imageAlt } = props;

  return (
    <div className="Image">
      <img src={imagePath} alt={imageAlt} />
    </div>
  );
};
