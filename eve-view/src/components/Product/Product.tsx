import React, {FC} from 'react';
import {cn} from '@bem-react/classname';

import { cnProduct } from './Product.const';
import { IProductProps } from './Product.typings';

import './Product.scss';


export const Product: FC<IProductProps> = ({id, name, description}) => {
    return (
        <div className={cnProduct()}>
            <div className={cnProduct('title')}>
                <div className={cnProduct('icon')} style={{backgroundImage: `url(https://images.evetech.net/types/${id}/icon)`}} /> 
                {name}
            </div>
            {description && <div className={cnProduct('description')}>{description}</div>}
        </div>
    );
}

