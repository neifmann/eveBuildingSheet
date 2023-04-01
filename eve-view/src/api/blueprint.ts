import { Product } from "./product";

export type Blueprint = {
    id: number;
    name: string;
    description: string;
    blueprintId: string;
    manufacturing: {
        products?: {
            quantity: number,
            product: Product,
        }[];
        materials?: {
            quantity: number,
            product: Product,
        }[];
    };
}

export const FetchBlueprint = async (id: string) => {
    const fetcher = await fetch(`/api/blueprint/${id}`)
    const data = await fetcher.json();
    console.log(data);

    return data as Blueprint;
}