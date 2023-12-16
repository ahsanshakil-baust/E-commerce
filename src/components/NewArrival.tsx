"use client";

import { Whisper } from "next/font/google";
import React, { useEffect, useState } from "react";
import { products } from "@/utils/produceData";
import ProductCard, { Iproduct } from "./ProductCard";

const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });
const tabData = ["All", "Devices", "Cloths", "Glossaries"];

const NewArrival = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [data, setData] = useState([]);

    const shuffleArray = (array: any) => {
        return array
            .map((value: any) => ({
                value,
                sort: Math.random(),
            }))
            .sort((a: any, b: any) => a.sort - b.sort)
            .map(({ value }: any) => value);
    };

    const handleTab = (index: number) => {
        const category = tabData[index].toLowerCase();
        setSelectedTab(index);

        if (category === "all") {
            setData(shuffleArray(products).slice(0, 15));
            return;
        }
        const filterData = products.filter((item) =>
            item.category.includes(category)
        );
        setData(shuffleArray(filterData));
    };

    useEffect(() => {
        setData(shuffleArray(products).slice(0, 15));
    }, []);

    return (
        <div className="container pt-32">
            <div className="text-center">
                <h3
                    className={`${whisper.className} text-[40px] text-gray-500`}
                >
                    For Your Interest
                </h3>

                <div className="font-semibold text-5xl">New Arrival</div>
                <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pt-8 uppercase font-medium text-xl">
                    {tabData.map((text, index) => (
                        <li
                            key={index}
                            className={`cursor-pointer hover:text-accent ${
                                selectedTab === index && "text-accent"
                            } cursor-pointer`}
                            onClick={() => handleTab(index)}
                        >
                            {text}
                        </li>
                    ))}
                </ul>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8">
                    {data.map((item: Iproduct, index) => (
                        <ProductCard
                            key={index}
                            id={item.id}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            sale={item.sale}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewArrival;
