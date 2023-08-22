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
    >
      <Box h="100vh" w="100vw" bgImage="/bg-image.png"></Box>
      <Box
        w={{base:"50%", md:"50%"}}
        h={{base:"50%", md:"30%"}}
        bgColor="white"
        opacity="0.75"
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
