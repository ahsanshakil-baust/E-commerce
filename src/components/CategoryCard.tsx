import Image from "next/image";
import React from "react";

interface propsType {
    img: string;
    type: string;
    quantity: string;
}

const CategoryCard = ({ img, type, quantity }: propsType) => {
    return (
        <div className="space-y-4">
            <Image
                className="rounded-full border-4 md:border-8 h-[200px] lg:h-[250px] border-white"
                src={img}
                width={250}
                height={250}
                alt="no-image"
            />

            <div>
                <h2 className="text-[14px] md:text-xl font-medium">{type}</h2>
                <p className="text-gray-400 text-[12px] md:text-[14px]">
                    {quantity}
                </p>
            </div>
        </div>
    );
};

export default CategoryCard;
