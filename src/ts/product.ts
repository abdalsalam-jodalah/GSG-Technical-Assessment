export interface Product {
    name: string;
    price: number;
}

export const calculateTotalPrice = (products: Product[]): number => {
    return products.reduce((total, product) => total + product.price, 0);
};

