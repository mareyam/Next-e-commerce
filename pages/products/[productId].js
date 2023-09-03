import data from '../api/data/products'


export default function handler(req, res) {
    const {productId} = req.query;
    const {Products} = data;

    if(productId) {
        const post = Products.find(value => value.id == productId)
        return res.status(200).json(post)
    }
    return res.status(404).json({error: "Product Not found"})
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