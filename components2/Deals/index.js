import {
  Box,
  HStack,
  VStack,
  Heading,
  Text,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import Countdown from "../../features/Countdown";
import ResponsiveStack from "../../common/responsive-views";

import { TECH } from "data/tech";

const Index = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <HStack mt="5" border="1px solid" py="3">
      <Box h="100%">
        <ResponsiveStack>
          <VStack
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            alignContent="flex-start"
          >
            <Heading fontSize="16" fontWeight="700">
              Deals and offers
            </Heading>
            <Text color="#8B96A5">Hygiene equipments</Text>
          </VStack>
          <Countdown />
        </ResponsiveStack>
      </Box>

      {isDesktop && (
        <>
          {TECH.slice(0, 7).map((item) => (
            <VStack
              h="full"
              key={item.img}
              borderLeft="1px solid gray"
              align="center"
              lineHeight="0.5"
            >
              <Image h="32" src={item.img} />
              <Text>{item.name}</Text>
              <Text
                fontWeight="600"
                px="4"
                py="2"
                rounded="full"
                color="red"
                bg="#FFE3E3"
              >
                {item.sale}%
              </Text>
            </VStack>
          ))}
        </>
      )}
    </HStack>
  );
};

export default Index;
