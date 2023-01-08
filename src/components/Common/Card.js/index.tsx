import React, { useState } from "react";
import ImageCard from "./ImgCards";
import { cardData } from "../../../constants";

const Card = ({ setClick }: any) => {
    const [img] = useState(cardData);
    return (
        <>
            <div onClick={() => setClick(false)} className="mt-3 bg-white p-3.5 rounded-md">
                <h1 className="text-lg font-bold mb-4">Latest Trends</h1>
                <div className="grid grid-cols-4 justify-center gap-2">
                    {img.map((item) => {
                        return (
                            <ImageCard key={item.id} item={item} />
                        )
                    })}
                </div>
                <h1 className="text-lg font-bold mt-4 mb-3">Popular Suggestions</h1>
                {img.map((item) => {
                    return (
                        <div className="py-1 font-medium cursor-pointer">
                            <p>{item.title}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
};

export default Card;
