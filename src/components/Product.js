import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsEyeFill } from 'react-icons/bs';
//import cart context
import {CartContext} from '../contexts/CartContext'
const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext)
  //destructive product
  const { id, image, category, title, price } = product;

  // Format category nicely
  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div>
      {/* product card */}
      <div
        className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group 
                   transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2"
      >
        {/* image container */}
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] transition-transform duration-300 group-hover:scale-110"
              src={image}
              alt={title}
            />
          </div>
        </div>

        {/* Eye Button - slides in from top right */}
        <Link
          to={`/product/${id}`}
          className="absolute -top-12 right-2 bg-white p-3 rounded-full shadow-lg 
                     opacity-0 group-hover:opacity-100 group-hover:top-2 
                     transition-all duration-300"
        >
          <BsEyeFill className="text-xl text-gray-800" />
        </Link>

        {/* Add to Cart Button - slides up from bottom */}
        <button onClick={() => addToCart(product, id)}
          className="absolute bottom-[-50px] left-0 right-0 bg-red-500 text-white 
                     py-2 font-semibold shadow-lg opacity-0 
                     group-hover:bottom-0 group-hover:opacity-100 
                     transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>

      {/* product details (category above name) */}
      <div className="mt-2 text-center">
        <div className="text-gray-400 text-sm mb-1">{formattedCategory}</div>
        <div className="font-medium">{title}</div>
        <div className="text-gray-600">${price}</div>
      </div>
    </div>
  );
};

export default Product;
