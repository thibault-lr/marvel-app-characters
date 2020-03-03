/* eslint-disable import/prefer-default-export */
import * as React from 'react';

import './style.scss';

interface ITitle {
  title: string;
}

export const Title = (props: ITitle) => {
  const { title } = props;

  return (
    <div className="Title">
      {title}
    </div>
  );
};
