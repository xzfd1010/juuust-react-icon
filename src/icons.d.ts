/// <reference types="react" />
  import { ComponentType, SVGAttributes } from 'react';

  interface Props extends SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
  }

  type Icon = ComponentType<Props>;
  export const ArrowDownRight: Icon;
export const ArrowLeft: Icon;
export const ArrowLeftCircle: Icon;
export const ArrowRight: Icon;
export const ArrowRightCircle: Icon;
export const ArrowUp: Icon;
