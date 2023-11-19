import React from "react";
import { Box, VStack, HStack, useBreakpointValue } from "@chakra-ui/react";

const Index = ({ children }) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Box>
      {isDesktop ? (
        <VStack align="left" h="full" px="5">
          {children}
        </VStack>
      ) : (
        <HStack w="full" h="full" px="5" justifyContent="space-between">
          {children}
        </HStack>
      )}
    </Box>
  );
};

export default Index;
