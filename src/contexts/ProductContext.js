import React, { createContext, useState, useEffect } from 'react';

// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // products state
  const [products, setProducts] = useState([]);

  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();

      // Use API images directly without replacing with local images
      const updatedProducts = data.map((product) => ({
        ...product,
        // image: product.image, // use original API image URL
      }));

      setProducts(updatedProducts); // ✅ use updatedProducts here
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
