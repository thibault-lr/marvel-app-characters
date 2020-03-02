import * as React from 'react';

// eslint-disable-next-line no-unused-vars
import { ImageProps, Image } from 'components/atoms/image';
import { Title } from 'components/atoms/title';


interface ICardProps {
  title: string;
  image: string;
}

const Card = (props: ICardProps) => (
  <>
    <Image imagePath={props.image} imageAlt={props.title} />
    <Title title={props.title} />
  </>
);

export default Card;
