import React, {useState} from 'react'
import {
  Center, 
  Icon, 
  CheckIcon,
  IconButton,
  Button,
  Container,
  SimpleGrid,
  Box,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Flex,
  HStack
} from "@chakra-ui/react";
import Quantity from 'components/common/Quantity';
import {useRouter} from 'next/router' 
import fetcher from '../../lib/fetcher'
import { SWRConfig } from 'swr'
// import ProductDetail from 'components/details/ProductDetail'

export default function Page({fallback}) {

  const router = useRouter()
  const {productId} = router.query
  const {data, isLoading, isError} = fetcher(`api/posts/${productId}`)
  if(isLoading) return <div>Loading...</div>
  if(isError) return <div> error </div>  
  
  return (
      <SWRConfig value={{fallback}}>
        <ProductDetail {...data}></ProductDetail>
      </SWRConfig>
  )
}

const ProductDetail = ({id, image, title,details, isChecked, price }) => {
  const [sizeToggle, setSizeToggle] = useState(false);
  const handleSizeToggle = () => {
    setSizeToggle(!sizeToggle)
  }
  return (
    <Box w={{base:'100%', md:'50%'}} padding='5'>
      <Heading fontWeight='medium'>{title}</Heading>
      <Text fontSize={{base:'md', md:'xl'}} color='gray' >{price}</Text>
      <Text fontSize={{base:'sm', md:'md'}}>{details}</Text>
      <Text marginTop='3' color='gray'>Size</Text>
      <HStack>
        <Button onClick={handleSizeToggle} w='auto' backgroundColor={sizeToggle? 'black':'white'} color={sizeToggle? 'white':'black'} border='1px solid'>S</Button>
        <Button onClick={handleSizeToggle} w='auto' backgroundColor={sizeToggle? 'black':'white'} color={sizeToggle? 'white':'black'} border='1px solid'>M</Button>
        <Button onClick={handleSizeToggle} w='auto' backgroundColor={sizeToggle? 'black':'white'} color={sizeToggle? 'white':'black'} border='1px solid'>L</Button>
      </HStack>
      <Text marginTop='3'color='gray'>Color</Text>
      <HStack>
        <IconButton
          isRound={true}
          variant='solid'
          colorScheme='red'
          aria-label='Done'
          fontSize='20px'
        />
        <IconButton
          isRound={true}
          variant='solid'
          colorScheme='blue'
          aria-label='Done'
          fontSize='20px'
        />
        <IconButton
          isRound={true}
          variant='solid'
          colorScheme='gray'
          aria-label='Done'
          fontSize='20px'
        />
      </HStack>
      <HStack marginTop='3'>
      <Box w='150px'><Quantity/></Box>
      <Button backgroundColor='white' border='1px solid'>Add To Cart</Button>
      {/* <Button backgroundColor='white' border='1px solid'>Compare</Button> */}
      </HStack>
    </Box>
  )
}



// import React from 'react'
// import Format from '../../layout/format'
// import Author from '../../components/child/author'
// import Header from '../../components/header'
// import Footer  from '../../components/footer'
// import {Image, Container, Box, Heading, Text} from '@chakra-ui/react';
// import BlogCard from '../../components/blogDetail/blog-card'
// import Related from '../../components/blogDetail/related'
// import getPost from '../../lib/helper'
// import {useRouter} from 'next/router' 
// import fetcher from '../../lib/fetcher'
// import { SWRConfig } from 'swr'

// export default function Product({fallback}) {

//   const router = useRouter()
//   const {productId} = router.query
//   const {data, isLoading, isError} = fetcher(`api/data/${productId}`)
//   if(isLoading) return <div>Loading...</div>
//   if(isError) return <div> error </div>  
  
//   return (
//       <SWRConfig value={{fallback}}>
//         <Article {...data}></Article>
//       </SWRConfig>
//   )
// }

// function Article({ title, image, subtitle, description, author }) {
//   return (
//     <Format>
//     <Container>
//       <div>
//       <Box mt='4' justifyContent="center" alignItems="center" textAlign='center'>
//         <Box justifyContent='center' display='flex'>
//         {author? <Author></Author>:<></>}  
//         </Box>
//         <Heading fontSize={'2xl'}>{title}</Heading>
//         <Text>{subtitle}</Text>
//         <Box
//           flex={{ base: 12, lg: 6 }}
//           w={{ base: "100%", lg: "100%" }}
//           mt='5'
//           h={{ base: '100%', lg: "450px" }}
//           overflow='hidden'
//         >
//           <Image src={image} alt={title} w='full' h='full' objectFit='cover' />
//         </Box>
//         <Text textAlign='left'>{description}</Text>
//       </Box>
//       <Related/>
//       </div>
//     </Container>
//   </Format>
//   );
// }

// export async function getStaticProps({ params }) {
//   const posts = await getPost(params.productId);

//   console.log({posts})
//     return {
//       props: {
//         data:JSON.stringify(posts)
//     }
//   } 
// }

// export async function getStaticPaths() {
//     const posts = await getPost();

//     console.log({posts})
//     const paths = posts.map(value => {
//       return {
//           params: {
//             productId: value.id.toString()
//           }
//       }
//    })

//    return {
//     paths,
//     fallback:false
//    }  
//   }