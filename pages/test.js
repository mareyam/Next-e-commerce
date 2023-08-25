import React, { useState } from 'react';
import { Box, Button, Image, Text } from '@chakra-ui/react';

const Test = ({ item }) => {
  const [button, setButton] = useState(false);


  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <Box
      position="relative"
      onMouseEnter={toggleOverlay}
      onMouseLeave={toggleOverlay}
    >
      {/* <Image src={item.imageUrl} alt={item.title} /> */}


      {showOverlay && (
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.6)"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button colorScheme="green" size="sm" onClick={() => console.log("item")}>
            Add to Cart
          </Button>
          <Button colorScheme="green" size="sm" onClick={() => setButton(!button)}>
            X
          </Button>
          
        </Box>
      )}

      <Box p="2">
        <Text fontSize="lg" fontWeight="bold">
          maryam 
        </Text>
        <Text color="gray.500">$50</Text>
      </Box>
    </Box>
  );
};

export default Test;

// import React, { useState } from "react";
// import ProductsTest from "../components/test/ProductsTest"; 

// const Test = () => {
//   const [showAddToCart, setIsShowAddToCart] = useState(true);
//   return (
//     <div>
//       <ProductsTest showAddToCart={showAddToCart} />
//     </div>
//   );
// };

// export default Test;
