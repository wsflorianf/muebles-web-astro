export interface DataTypes {
    path:     string;
    products: ProductTypes[];
}

export interface ProductTypes {
    id:          number;
    name:        string;
    description: string;
    images:      string[];
}
