import React from "react";
import FeatureCards from "./FeatureCards";

const data = [
    {
        img: "/products/1.jpg",
        title: "Naturally Derived",
        desc: "Natural and Digital Watch",
    },
    {
        img: "/products/2.jpg",
        title: "Free Shipping",
        desc: "It has survived not only five centuries",
    },
    {
        img: "/products/3.jpg",
        title: "Secure Payment",
        desc: "Lorem Ipsum is that it has a more-or-less",
    },
];

const Features = () => {
    return (
        <div className="container pt-16">
            <div className="grid md:grid-cols-2 gap-y-8 lg:gap-y-4 lg:grid-cols-3 gap-4">
                {data.map((item) => (
                    <FeatureCards
                        key={item.title}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                    />
                ))}
            </div>
        </div>
    );
};

export default Features;
