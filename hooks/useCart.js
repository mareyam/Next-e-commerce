//removes single and all cart items
import React from "react";
import { useDispatch } from "react-redux";
import { removeCartProduct, clearCart } from "../toolkit/cartSlice";

const useCart = () => {
  const dispatch = useDispatch();

  const handleRemoveItem = (product) => {
    console.log("Delected Product:", product);
    dispatch(removeCartProduct(product));
  };

  const handleEmptyCart = () => {
    console.log("handle empty cart");
    dispatch(clearCart());
  };

  return { handleRemoveItem, handleEmptyCart };
};
export default useCart;

// const useCart = () => {

//     return (
//     <div>useCart</div>
//   )
// }

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// export const useCart = () => {
//   const dispatch = useDispatch();
//   const { cart } = useSelector((state) => state.cart);

//   useEffect(() => {
//     const getData = () => {
//       dispatch(setIsLoaing(true));
//       const response = "api call";
//       dispatch(setIsLoaing(false));
//       dispatch(setData(response));
//     };
//   }, []);

//   return { isLoading, cart };
// };
