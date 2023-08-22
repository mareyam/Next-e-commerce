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
