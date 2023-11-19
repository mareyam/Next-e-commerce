import {
  Box,
  HStack,
  VStack,
  Button,
  Heading,
  Text,
  SimpleGrid,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

import { TECH } from "data/tech";
import { INTERIOR } from "data/interior";

const Index = ({ title, data, img }) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <HStack mt="5" border="1px solid #8B96A5" h="72" p="2">
      {isDesktop ? (
        <>
          <Image pos="relative" h="full" src={img} />
          <VStack pos="absolute" py="4" px="2" h="40" align="left">
            <Heading fontSize="16">{title}</Heading>
            <Button bg="white" color="black">
              Source now
            </Button>
          </VStack>
          <SimpleGrid h="full" columns={[2, null, 4]} spacingX="4">
            {data.slice(0, 8).map((item) => (
              <Box
                h="full"
                w="52"
                key={item.img}
                border="1px solid #8B96A5"
                display="flex"
                justifyContent="space-between"
              >
                <Box p="2">
                  <Text>{item.name}</Text>
                  <Text>from USD {item.sale}</Text>
                </Box>
                <Box alignSelf="flex-end">
                  <Image h="20" src={item.img} />
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </>
      ) : (
        <Box overflow="scroll">
          <Heading fontSize="16">{title}</Heading>
          <Box
            py="4"
            px="2"
            h="full"
            align="left"
            overflowX="none"
            overflow="scroll"
          >
            <HStack h="full">
              {data.slice(0, 8).map((item) => (
                <VStack
                  h="40"
                  // px="12"
                  key={item.img}
                  border="1px solid #8B96A5"
                  lineHeight="0.75"
                  w="96"
                >
                  <Image h="20" src={item.img} />
                  <Text>{item.name}</Text>
                  <Text>from USD {item.sale}</Text>
                </VStack>
              ))}
            </HStack>
          </Box>
          <Button bg="white" color="black">
            Source now
          </Button>
        </Box>
      )}
    </HStack>
  );
};

export default Index;

// import {
//   Box,
//   HStack,
//   VStack,
//   Button,
//   Heading,
//   Text,
//   SimpleGrid,
//   Image,
//   useBreakpointValue,
// } from "@chakra-ui/react";
// import React from "react";

// import { TECH } from "data/tech";
// import { INTERIOR } from "data/interior";

// const Index = ({ title, data, img }) => {
//   const isDesktop = useBreakpointValue({ base: false, lg: true });

//   return (

//     <HStack mt="5" border="1px solid #8B96A5" h="72" p="2">

//       {isDesktop && <Image pos="relative" h="full" src={img} />}
//       <VStack pos="absolute" py="4" px="2" h="40" align="left">
//         <Heading fontSize="16">{title}</Heading>
//         <Button bg="white" color="black">
//           Source now
//         </Button>
//       </VStack>
//       {isDesktop ? (
//         <SimpleGrid h="full" columns={[2, null, 4]} spacingX="4">
//           {data.slice(0, 8).map((item) => (
//             <Box
//               h="full"
//               w="52"
//               key={item.img}
//               border="1px solid #8B96A5"
//               display="flex"
//               justifyContent="space-between"
//             >
//               <Box p="2">
//                 <Text>{item.name}</Text>
//                 <Text>from USD {item.sale}</Text>
//               </Box>
//               <Box alignSelf="flex-end">
//                 <Image h="20" src={item.img} />
//               </Box>
//             </Box>
//           ))}
//         </SimpleGrid>
//       ) : (
//         <>
//           <HStack overflow="scroll" w="auto">
//             {data.map((item) => (
//               <VStack
//                 h="100%"
//                 w="52"
//                 key={item.img}
//                 border="1px solid #8B96A5"
//                 display="flex"
//                 justifyContent="space-between"
//               >
//                 <Image h="20" src={item.img} />
//                 <Text>{item.name}</Text>
//                 <Text>from USD {item.sale}</Text>
//               </VStack>
//             ))}
//           </HStack>
//         </>
//       )}
//     </HStack>
//   );
// };

// export default Index;
