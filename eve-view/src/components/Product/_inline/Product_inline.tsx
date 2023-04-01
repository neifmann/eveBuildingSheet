import React, { FC } from "react"

import { cnProduct } from "../Product.const"
import { IProductProps } from "../Product.typings"

import './Product_inline.scss';

export const ProductInline: FC<IProductProps> = ({id, name}) => {
    return (
        <div className={cnProduct({inline: true})}>
            <div className={cnProduct('icon')} style={{backgroundImage: `url(https://images.evetech.net/types/${id}/icon)`}} /> 
            {name}
        </div>
    );
}