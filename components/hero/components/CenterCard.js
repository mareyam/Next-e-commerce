import { Center, Stack, Box, Button, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import styles from '../../../styles/Home.module.css'


export default function CenterCard() {
  const handleMouseEnter = (id) => {
    setToggleHover(id);
  };

  const handleMouseLeave = () => {
    setToggleHover(null);
  };

  return (
    <Center h="100%">
      <VStack
        textAlign="left"
        padding="5%"
        bgColor="white"
        opacity="0.75"      >
        <Stack spacing='2'>
          <Heading
            marginTop="5%"
            fontSize="16px"
            fontWeight="bold"
            fontFamily="Poppins"
            letterSpacing="2px"
          >
            New Arrival
          </Heading>
          <Heading fontSize="40px" w="80%">
            Discover Our New Collection
          </Heading>
          <p>
            All handmade with natural soy wax, Candleaf is a companion for all
            your pleasure moments
          </p>
          <Button className={styles.centerCard_button}>
            BUY NOW
        </Button>

        </Stack>
        
      </VStack>
    </Center>
  );
}
