/* eslint-disable import/prefer-default-export */
import * as React from 'react';

interface ITitle {
  title: string;
}

export const Title = (props: ITitle) => {
  const { title } = props;

  return (
    <div>
      {title}
    </div>
  );
};
