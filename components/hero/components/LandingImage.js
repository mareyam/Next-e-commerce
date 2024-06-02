import React from "react";
import { Box, Center } from "@chakra-ui/react";
import CenterCard from "./CenterCard";

function LandingImage() {
  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      marginBottom="30px"
    >
      <Box
        h="100vh"
        w="100vw"
        bgImage="/background.png"
        backgroundSize="cover"
        backgroundPosition="center"
      ></Box>
      <Box
        w={{ base: "90%", md: "50%" }}
        h={{ base: "50%", md: "60%" }}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <CenterCard />
      </Box>
    </Box>
  );
}

export default LandingImage;
