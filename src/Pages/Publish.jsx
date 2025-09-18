import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function Publish() {

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4 p-8">
      <section className="w-full max-w-4xl flex flex-col md:flex-row rounded-3xl shadow-2xl overflow-hidden backdrop-blur-lg bg-white/90 border border-white/40">

        {/* Left Side - Form */}
        <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            🚀 Publish Your Web!
          </h2>
          <p className="text-gray-600 mt-3">
            Make something delicious with <span className="font-semibold text-blue-700">SamCommerce</span>
          </p>

          <form className="mt-6 space-y-5" action="#" method="POST">

            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-gray-700 font-medium">Product Title</label>
              <input
                type="text"
                id="title"
                placeholder="Enter Title"
                className="w-full px-4 py-3 rounded-xl bg-gray-100 mt-2 border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="desc" className="block text-gray-700 font-medium">Product Description</label>
              <textarea
                id="desc"
                placeholder="Enter Description"
                rows="4"
                className="w-full px-4 py-3 rounded-xl bg-gray-100 mt-2 border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label htmlFor="price" className="block text-gray-700 font-medium">Price</label>
              <input
                type="number"
                id="price"
                min="0"
                placeholder="Enter Price"
                className="w-full px-4 py-3 rounded-xl bg-gray-100 mt-2 border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
                required
              />
            </div>

            {/* Image Upload */}
            <div>
              <label htmlFor="coverImage" className="block text-gray-700 font-medium">Upload Cover Image</label>
              <input
                type="file"
                id="coverImage"
                accept="image/*"
                className="w-full px-4 py-3 rounded-xl bg-gray-100 mt-2 border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400 text-white font-semibold rounded-xl px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Upload Now 🚀
            </button>
          </form>
        </div>

        {/* Right Side - Illustration */}
        <div className="md:w-1/2 hidden md:block relative p-8 pl-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Publishing Illustration"
            className="h-full w-full object-cover rounded-tr-3xl rounded-br-3xl rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-tr-3xl rounded-br-3xl"></div>
        </div>
      </section>
    </div>

  )
}

export default Publish;