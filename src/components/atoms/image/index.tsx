import * as React from 'react';

import './style.scss';

export interface ImageProps {
  imagePath: string;
  imageAlt: string;
}

const IMAGE_FALLBACK = 'dist/assets/images/not_available.jpg'

export class Image extends React.Component <ImageProps> {

  state = {
    image: this.props.imagePath || IMAGE_FALLBACK
  }

  render () {
    return (
      <div className="Image">
        <img src={this.state.image} alt={this.props.imageAlt} />
      </div>
    )
  }
}
