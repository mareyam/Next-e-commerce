import React from 'react'
import OrderedItems from './OrderedItems';
import OrderDetails from './OrderDetails';
import { Box } from '@chakra-ui/react';
const ThankyouCard = () => {
  return (
    <Box display={{base:'block', md:'flex'}}>
        <OrderDetails/>
        <OrderedItems/>
    </Box>
  )
}

export default ThankyouCard