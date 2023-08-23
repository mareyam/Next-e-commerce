import { SimpleGrid, Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <Container maxW="container.lg">
      <Box textAlign="center">
        <Heading>Testimonials</Heading>
        <Text>Some quotes from our happy customers</Text>
      </Box>
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing="4">
        {TESTIMONIALS_LIST.map((value) => {
          return <TestimonialsCard TestimonialsList={value}></TestimonialsCard>;
        })}
      </SimpleGrid>
    </Container>
  );
};
export default Testimonials;

const TESTIMONIALS_LIST = [
  {
    id: 1,
    image: "/image 1-1.png",
    stars: 4,
    comment: "Lorem ipsum dolor sit amet.",
    name: "John Doe",
  },
  {
    id: 2,
    image: "/image 1-2.png",
    stars: 5,
    comment: "Vestibulum ante ipsum primis in faucibus.",
    name: "Jane Smith",
  },
  {
    id: 3,
    image: "/image 1-3.png",
    stars: 3,
    comment: "Nullam scelerisque vehicula nunc.",
    name: "Alice Johnson",
  },
  {
    id: 4,
    image: "/image 1-4.png",
    stars: 4,
    comment: "Aenean vehicula odio et urna.",
    name: "Michael Brown",
  },
  {
    id: 5,
    image: "/image 1-5.png",
    stars: 5,
    comment: "Pellentesque habitant morbi.",
    name: "Emily Davis",
  },
];
