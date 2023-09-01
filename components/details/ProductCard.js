import React from 'react'
import ProductImages from './ProductImages'
import ProductDetail from './ProductDetail'
import {Box} from '@chakra-ui/react'


const ProductCard = () => {
  return (
    <Box display={{base:'block', md:'flex'}} margin='3%'>
        <ProductImages/>
        <ProductDetail/>
    </Box>

  )
}

export default ProductCard