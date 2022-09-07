import type { NextPage } from "next";
import Head from "next/head";
import { ChangeEvent, useEffect, useState } from "react";
import { ProductsList } from "../src/components/ProductsList/ProductsList";
import { Search } from "../src/components/Search/Search";
import { Spinner } from "../src/components/Spinner/Spinner";
import useGetProducts, { MoreProducts } from "../src/hooks/useGetProducts";


export const Home: NextPage = () => {
    const { loading, data } = useGetProducts();
    const [products, setProducts] = useState<MoreProducts>();

    // canRender is only to ensure that it is rendered as SPA
    // (disable server side rendering)
    const [canRender, setCanRender] = useState(true);
    useEffect(() => {
        if (!loading) setCanRender(false);

        if (data) setProducts(data.edges);
    }, [loading, data]);

    if (canRender) {
        return <Spinner />;
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value.toLowerCase();

        const filteredProducts = data?.edges.filter(({ node: product }) =>
        product.name.toLowerCase().indexOf(inputValue) >= 0
    );
    setProducts(filteredProducts);    };

    return (
        <div>
            <Head>
                <title>Bringmeister Coding Challenge</title>
            </Head>
            <Search handleChange={handleChange} />
            {products && <ProductsList products={products} />}
        </div>
    );
};
export default Home;
