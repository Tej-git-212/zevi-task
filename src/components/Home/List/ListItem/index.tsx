import { HeartIcon, StarIcon } from "@heroicons/react/solid";
import { useState } from "react";

const ListItem = ({ item }: any) => {
  const [like, setLike] = useState(true);
  const starRating = item.rating;

  const handleLike = () => {
    setLike(!like);
    item.like = like;
  };
  return (
    <div className="relative md:w-56 h-[390px] wrapper">
      <div>
        <h1 className="absolute mt-3 left-[140px] sm:left-[170px] md:left-[175px] cursor-pointer">
          {
            <HeartIcon
              onClick={() => handleLike()}
              className={`h-8 w-8 text-white ${
                item.like ? "text-red-600" : ""
              }`}
            />
          }
        </h1>
        <h1>{item.like}</h1>
        <img
          src={item.coverSrc}
          className="rounded-sm w-48 md:w-56 h-[250px]"
          alt=""
        />
        <h1 className="-mt-10 text-center bg-violet-400  h-10 w-auto container flex items-center justify-center">
          <p className="overlay mt-1.5 cursor-pointer">View Product</p>
        </h1>
        <h1 className="mt-4 text-md mb-1">{item.title}</h1>
        <div className="flex mb-1">
          <h1 className="mr-2 line-through text-sm text-gray-400">
            Rs. {item.price - 100}
          </h1>
          <h1 className="mr-2 text-blue-500 text-sm">
            Rs. {item.price}
          </h1>
        </div>
        <div className="flex items-center">
          <h1 className="flex">
            {[...Array(starRating)].map(() => (
              <div className="">
                <StarIcon className="w-5 h-5 text-yellow-500" />
              </div>
            ))}
          </h1>
          <span className="ml-4 text-gray-500 text-sm">
            {"(210)"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
