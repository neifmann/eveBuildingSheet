export type Product = {
    id: number;
    name: string;
    description: string;
    blueprintId: number;
}

export const FetchProduct = async (id: number) => {
    const fetcher = await fetch(`/api/product/${id}`)
    const data = await fetcher.json();
    console.log(data);

    return data as Product;
}