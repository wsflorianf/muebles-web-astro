import { type ProductTypes } from "@/types/data";

export function getIds(products: ProductTypes[]){
    let ids: [{params?: {id?: number}}?]= []

    products.forEach(product => ids.push({params: {id: product.id}}));

    return ids
}