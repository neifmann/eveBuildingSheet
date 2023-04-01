import React, {FC, useState, useCallback} from 'react';
import { ProductInline } from 'components/Product/_inline/Product_inline';

import { cnBlueprint } from './Blueprint.const';
import { IBlueprintItemProps, IBlueprintProps } from './Blueprint.typings';

import { Blueprint as BlueprintFetchResult } from 'api/blueprint';

import './Blueprint.scss';

export const Blueprint: FC<IBlueprintProps> = ({manufacturing, onExpand}) => {
    console.log('oe', onExpand);

    return (
        <div className={cnBlueprint()}>
            {
                manufacturing.materials?.map(material => (
                    <BlueprintMaterial 
                        key={material.product.id} 
                        onExpand={onExpand} 
                        item={material} 
                    />
                ))
            }
        </div>
    )
}

const BlueprintMaterial: FC<IBlueprintItemProps> = ({item, onExpand}) => {
    const [expanded, setExpanded] = useState(false);
    const [nested, setNested] = useState<BlueprintFetchResult>();

    const handleExpandClick = useCallback(async () => {
        if (!expanded && onExpand) {
            setNested(await onExpand(String(item.product.blueprintId)));
            setExpanded(true);
        } else {
            setNested(undefined);
            setExpanded(false);
        }
    }, [expanded, onExpand, item]);

    const expandable = onExpand && item.product.blueprintId;

    return (<div className={cnBlueprint('Material', {expandable: expandable})}>
        { expandable && 
            <div className={cnBlueprint('ExpandButton')} onClick={handleExpandClick}>
                {expanded ? "[-]" : "[+]"}
            </div>
        }
        <ProductInline
            id={item.product.id}
            name={item.product.name}
        />
        {
            expanded && nested && <Blueprint manufacturing={nested.manufacturing} onExpand={onExpand} />
        }
    </div>)
};