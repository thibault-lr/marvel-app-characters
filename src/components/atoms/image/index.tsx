import * as React from 'react';

export interface ImageProps {
  imagePath: string;
  imageAlt: string;
}


export const Image = (props: ImageProps) => {
  const { imagePath, imageAlt } = props;

  return (
    <div>
      <img src={imagePath} alt={imageAlt} />
    </div>
  );
};
