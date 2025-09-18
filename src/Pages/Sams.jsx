
import React, { useState } from "react";
import data from "../data/websites";
import { FaHeart } from "react-icons/fa";


function WishlistIcon() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className="p-2 rounded-full hover:bg-gray-100 transition"
    >
      <FaHeart
        size={22}
        className={liked ? "text-red-500" : "text-gray-400"}
      />
    </button>
  );
}


function Sams() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Website Templates
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="h-48 w-full overflow-hidden relative">
              <img
                src={item.previewImage}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute top-3 right-3">
                <WishlistIcon />
              </div>
            </div>

            <div className="p-5 flex flex-col justify-between">
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>

              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-500">By {item.seller}</span>
                <span className="font-bold text-blue-600">${item.price}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={item.zipFileUrl}
                className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                download
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sams;
