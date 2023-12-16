import Image from "next/image";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaRegStar, FaStar } from "react-icons/fa";

export interface Iproduct {
    id: number;
    img: string;
    name: string;
    price: number;
    // category: string[];
    sale: boolean | undefined;
}

const ProductCard = ({ id, img, name, price, sale }: Iproduct) => {
    const getRating = () => {
        const randomNumber = (min: number, max: number) => {
            return Math.ceil(Math.random() * (max - min) + min);
        };

        switch (randomNumber(0, 5)) {
            case 0:
                return (
                    <div className="flex justify-center text-accent pt-4 pb-2">
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                    </div>
                );

            case 1:
                return (
                    <div className="flex justify-center text-accent pt-4 pb-2">
                        <FaStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                    </div>
                );

            case 2:
                return (
                    <div className="flex justify-center text-accent pt-4 pb-2">
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                    </div>
                );
            case 3:
                return (
                    <div className="flex justify-center text-accent pt-4 pb-2">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                        <FaRegStar />
                    </div>
                );
            case 4:
                return (
                    <div className="flex justify-center text-accent pt-4 pb-2">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                    </div>
                );
            case 5:
                return (
                    <div className="flex justify-center text-accent pt-4 pb-2">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                );

            default:
                return <div></div>;
        }
    };
    return (
        <div className="group cursor-pointer">
            <div className="relative">
                <Image
                    className="w-full h-[200px] xl:h-[250px] 2xl:h-[300px]"
                    src={img}
                    alt={name}
                    width={1000}
                    height={200}
                />

                {sale && (
                    <div className="bg-red-600 inline-block absolute top-0 left-0 text-[14px] text-white rounded-md px-2 py-[2px] m-4">
                        SALE!
                    </div>
                )}

                <div className="absolute top-0 left-0 w-full h-full bg-[#00000050] opacity-0 transition-opacity duration-500 group-hover:opacity-100 cursor-pointer">
                    <div className="absolute bottom-0 mb-4 left-[50%] translate-x-[-50%] flex gap-2">
                        <div className="bg-white w-[50px] text-[26px] grid place-items-center">
                            <CiHeart />
                        </div>

                        <div className="bg-white w-[50px] text-[26px] grid place-items-center">
                            <CiShoppingCart />
                        </div>
                    </div>
                </div>
            </div>
            {getRating()}
            <h2 className="font-medium pb-3 hover:text-accent">{name}</h2>
            <div className="text-gray-600 font-light">${price}.00</div>
        </div>
    );
};

export default ProductCard;
