import { useCallback } from "react";
import useGetCart from "../../hooks/useGetCart";
import { MoreProducts } from "../../hooks/useGetProducts";
import styles from "./ProductsList.module.css";
import Image from "next/image";

interface Props {
    products: MoreProducts;
}
export const ProductsList = ({ products }: Props) => {
    const { data } = useGetCart();

    const quantityInCart = useCallback(
        (sku: string) => {
            if (!data) return;

            for (const product of data.products) {
                if (product.sku === sku) return product.quantity;
            }
        },
        [data]
    );

    return (
        <main className={styles.grid}>
            {products.map(({ node: product }) => (
                <div className={styles.item1} key={product.productId}>
                    <Image
                        src={`http:${product.image}?imwidth=175`}
                        alt={product.name}
                        className={styles.image}
                        loading="lazy"
                        width="175px"
                        height="200px"
                    />
                    <span className={styles.text}>{product.name}</span>
                    <span className={styles.text}>
                        {product.prices.baseUnit}
                    </span>
                    <span className={styles.price}>
                        {product.prices.basePrice.toLocaleString("de-DE")} €
                    </span>
                    {quantityInCart(product.sku) && (
                        <span className={styles.text}>
                            Total in cart: {quantityInCart(product.sku)}
                        </span>
                    )}
                </div>
            ))}
        </main>
    );
};
