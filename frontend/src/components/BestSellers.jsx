import {useContext, useEffect, useState} from "react";
import {ShopContext} from "../context/ShopContext.jsx";
import Title from "./Title.jsx";
import ProductItem from "./ProductItem.jsx";

const BestSellers = () => {

    const {products} = useContext(ShopContext);
    const [bestSellers, setBestSellers] = useState([]);
    useEffect(() => {
        const bestProducts = products.filter(item => (item.bestseller === true))
        setBestSellers(bestProducts.slice(0, 5));
    }, [])

    return (
        <div className="my-10">
            <div className="text-center text-3xl py-8">
                <Title text1="Best" text2="Sellers"/>
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur illum inventore porro
                    quia voluptates. Accusantium debitis esse molestiae optio.
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {bestSellers.map((product) => (
                    <ProductItem
                        key={product._id}
                        id={product._id}
                        name={product.name}
                        image={product.image}
                        price={product.price}/>
                ))}
            </div>
        </div>
    );
};

export default BestSellers;