"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { products } from "@/utils/produceData";
import { Iproduct } from "@/components/ProductCard";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaRegStar, FaStar } from "react-icons/fa";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";

const DetailPage = () => {
    const params = useParams();

    const [productData, setProductData] = useState<Iproduct>({
        id: 0,
        img: "",
        name: "",
        price: 0,
        category: [],
        sale: false,
    });

    useEffect(() => {
        const id = params.id;
        const getProductData = products.filter(
            (item) => item.id.toString() === id
        )[0];

        setProductData(getProductData);
    }, [params.id]);

    return (
        <div className="pt-8">
            <div className="bg-gray-100 py-4">
                <div className="container flex gap-4 items-center text-gray-500">
                    <Link
                        href="/"
                        className=" cursor-pointer hover:text-accent"
                    >
                        Home
                    </Link>
                    <div className="bg-gray-400 w-[30px] h-[2px]" />
                    <p className="capitalize">{productData?.category[0]}</p>
                    <div className="w-[30px] h-[2px] bg-gray-400" />
                    <p>{productData?.name}</p>
                </div>
            </div>

            <div className="container pt-8">
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <Image
                            className="w-full h-full"
                            src={productData?.img}
                            width={1000}
                            height={1200}
                            alt="no-image"
                        />
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center text-accent">
                            <FaStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />

                            <p className="text-gray-400 text-[14px] ml-2 hover:text-accent cursor-pointer">
                                (8 customer review)
                            </p>
                        </div>

                        <div className="space-y-6 text-[#161616]">
                            <h2 className="text-3xl font-semibold">
                                {productData?.name}
                            </h2>
                            <p className="text-xl">${productData?.price}.00</p>
                        </div>

                        <p className="text-gray-500 text-[14px]">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Pariatur similique inventore quam ab dolorem
                            harum explicabo nisi magnam, eaque dolorum?
                        </p>
                        <p className="text-gray-500 text-[14px]">20 in stock</p>

                        <button className="uppercase bg-accent py-4 px-8 rounded-lg text-white flex gap-2 items-center hover:bg-balck">
                            <CiShoppingCart />
                            Add to cart
                        </button>

                        <div className="flex gap-4 items-center uppercase py-4 text-[14px]">
                            <div className="flex gap-1 items-center">
                                <CiHeart />
                                Add to Wish List
                            </div>
                            <div className="flex gap-1 items-center">
                                <IoIosGitCompare />
                                Compare
                            </div>
                        </div>

                        <div className="bg-gray-400 w-[30px] h-[2px]"></div>

                        <div>Name: {productData?.name}</div>
                        <div className="capitalize">
                            Category: {productData?.category[0]}
                        </div>
                        <div className="flex gap-1 items-center capitalize">
                            Tags:{" "}
                            {productData?.category?.map((item, index) => (
                                <div key={index}>{item}</div>
                            ))}
                        </div>
                        <div className="bg-gray-400 w-[30px] h-[2px]"></div>

                        <div className="flex gap-1 items-center pt-4">
                            SHARE:{" "}
                            <div className="flex gap-2 items-center text-[18px]">
                                <FaFacebook />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
