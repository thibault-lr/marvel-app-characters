import * as React from 'react';

import './style.scss';

// eslint-disable-next-line no-unused-vars
import { ImageProps, Image } from 'components/atoms/image';
import { Title } from 'components/atoms/title';


interface ICardProps {
  title: string;
  image: string;
  className: string;
}

const Card = (props: ICardProps) => (
  <div className={`Card ${props.className || ''}`}>
    <Image imagePath={props.image} imageAlt={props.title} />
    <Title title={props.title} />
  </div>
);

export default Card;
