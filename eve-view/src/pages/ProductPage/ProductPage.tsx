import { cn } from '@bem-react/classname';
import React, {FC, useEffect, useState} from 'react';
import { FetchProduct, Product as ProductType } from '../../api/product';

import { Product } from '../../components/Product/Product';
import { Spinner } from '../../components/Spinner/Spinner';

export const cnProductPage = cn('ProductPage');

export interface IProductPageProps {
    id: number;
}

export const ProductPage: FC<IProductPageProps> = ({ id }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState<ProductType>();

    useEffect(() => {
        const fetcher = async () => {
            setProduct(await FetchProduct(id));
            setIsLoading(false);
        }
        setIsLoading(true);

        fetcher();
    }, [id]);

    return (
        <div className={cnProductPage()}>
            {
                isLoading && <Spinner className={cnProductPage('spinner')} />
            }
            {
                product && <Product 
                    id={product.id} name={product.name} description={product.description} />
            }
        </div>
    )
}