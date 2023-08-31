import React from 'react'
import ProductImages from './ProductImages'
import ProductDetail from './ProductDetail'
import {Box} from '@chakra-ui/react'


const ProductCard = () => {
  return (
    <Box>
        <ProductImages/>
        <ProductDetail/>
    </Box>

  )
}

export default ProductCard