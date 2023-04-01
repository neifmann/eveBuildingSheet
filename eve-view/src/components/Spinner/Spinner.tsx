import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import React, {FC} from 'react';

const cnSpinner = cn('Spinner');

export const Spinner: FC<IClassNameProps> = ({className}) => {
    return (<div className={cnSpinner(null, [className])} />);
}