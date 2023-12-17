import { Whisper } from "next/font/google";
import React from "react";
import CategoryCard from "./CategoryCard";

const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });

const data = [
    {
        img: "/products/7.jpg",
        type: "devices",
        quantity: "(4 Items)",
    },
    {
        img: "/products/9.jpg",
        type: "dress",
        quantity: "(8 Items)",
    },
    {
        img: "/products/13.jpg",
        type: "glossaries",
        quantity: "(6 Items)",
    },
];

const Category = () => {
    return (
        <div className="bg-[url(/products/13.jpg)] bg-no-repeat py-16 mt-32">
            <div className="container text-center text-white">
                <h3 className={`${whisper.className} text-[40px]`}>
                    Favorite Category
                </h3>
                <h2 className=" text-[40px] font-medium">Top Category</h2>

                <div className="flex justify-center gap-4 pt-8 md:gap-16">
                    {data.map((item, index) => (
                        <CategoryCard
                            key={index}
                            img={item.img}
                            type={item.type}
                            quantity={item.quantity}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
