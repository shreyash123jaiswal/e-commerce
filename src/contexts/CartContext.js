import React, { createContext, useEffect, useState } from 'react';

// Create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Cart state
  const [cart, setCart] = useState([]);
//item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // total price state
  const[total, setTotal] = useState(0);
  useEffect(()=>{
    const total = cart.reduce((accumulator, currentItem)=>{
      return accumulator +currentItem.price * currentItem.amount;
    },0)
    setTotal(total);
  },[cart])

  //update item amount
  useEffect(()=>{
    if (cart) {
      const total = cart.reduce((accumulator, currentItem)=>{
        return accumulator+currentItem.amount
      },0);
      setItemAmount(total);
    }
  },[cart])
  // Example: add to cart
  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1}; 
    //check if the item is already in the cart
    const CartItem = cart.find(item => {
      return item.id === id;  
    });
    if(CartItem){
      const newCart = [...cart].map((item) => {
        if(item.id === id){
          return{...item, amount: CartItem.amount +1 };
        }else{
          return item;
        }
      });
      setCart(newCart);
    }else{
      setCart([...cart, newItem]);
    }
  };
  // console.log(cart);

  //remove from cart
   const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    })
     setCart(newCart);
   };
   //clear cart 
   const clearCart = ()=>{
    setCart([]);
   }
   //increase amount
   const increaseAmount = (id) => {
      const newCart = cart.map((item) => {
        if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
        }
      return item;
      });
       setCart(newCart);
   };
   const decreaseAmount = (id) => {
      const item = cart.find(item => item.id === id);
      if (item.amount === 1) {
       removeFromCart(id); // remove if only 1 left
      } else {
        const newCart = cart.map((item) => {
        if (item.id === id) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    setCart(newCart);
  }
};

   
  return (
    <CartContext.Provider 
    value={{
      cart, 
      addToCart,
      removeFromCart,
      clearCart, 
      increaseAmount, 
      decreaseAmount,
      total,
      itemAmount,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
