import React from 'react'
import wish from '../data/wish.js'

function Wishlist() {
  return (
    <div className='p-8 text font-bold text-align text-center'>
      <h1 className='text-3xl font-bold mb-8 text-center'>My Wishlist</h1>
      <div className="p-10 flex flex-col gap-4">
        {wish.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-4 border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition-all duration-300"
          >
            <img
              src={item.previewImage}
              alt={item.title}
              className="w-28 h-20 object-cover rounded-lg"
            />

            <div className="flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
            </div>

            <div className="flex flex-col items-end text-right gap-1">
              <p className="text-sm font-medium text-gray-600">{item.seller}</p>
              <p className="text-indigo-600 font-semibold">${item.price}</p>
              <button className='p-3 bg-amber-600 rounded-lg shadow-2xl'>Move to cart</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Wishlist