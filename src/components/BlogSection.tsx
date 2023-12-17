import React from "react";
import BlogCard from "./BlogCard";

const data = [
    {
        img: "/products/3.jpg",
        title: "Lorem Ipsum is simply dummy text",
        date: "Sep 27, 2023",
        comment: 8,
    },
    {
        img: "/products/7.jpg",
        title: "Lorem Ipsum is simply dummy text",
        date: "Sep 21, 2023",
        comment: 1,
    },
    {
        img: "/products/8.jpg",
        title: "Lorem Ipsum is simply dummy text",
        date: "Sep 30, 2023",
        comment: 6,
    },
];

const BlogSection = () => {
    return (
        <div className="container pt-32">
            <h2 className="font-bold text-2xl">Latest</h2>
            <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                vero aperiam quidem error porro repellat?
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
                {data.map((item, index) => (
                    <BlogCard
                        key={index}
                        img={item.img}
                        title={item.title}
                        date={item.date}
                        comment={item.comment}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlogSection;
