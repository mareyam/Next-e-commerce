import React from "react";
import {
  SimpleGrid,
  Box,
  Container,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const TestimonialsCard = ({ TestimonialsList }) => {
  const { id, image, comment, name } = TestimonialsList;
  return (
    <VStack textAlign="center" borderWidth="1px" borderRadius="lg">
      <Image borderRadius="100%" src={image}></Image>
      <Heading fontSize="12px">{comment}</Heading>
      <Text fontSize="8px">{name}</Text>
    </VStack>
  );
};
export default TestimonialsCard;
