import { Blueprint } from "api/blueprint";
import { FC } from "react";
import { IProductProps } from "../Product/Product.typings";

export interface ICountableItem {
    product: IProductProps;
    quantity: number;
};

export type BlueprintFetcher = (blueprintId: string) => Promise<Blueprint>;

export interface IBlueprintProps {
    manufacturing: {
        materials?: ICountableItem[];
        products?: ICountableItem[];
    },

    onExpand?: BlueprintFetcher;
}

export interface IBlueprintItemProps {
    item: ICountableItem;
    onExpand?: BlueprintFetcher;
}