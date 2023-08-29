import React from "react";
import {
  Button,
  Container,
  SimpleGrid,
  Box,
  VStack,
  Image,
  Stack,
  Heading,
  Text,
  Checkbox,
  Divider,
  Flex,
} from "@chakra-ui/react";
import CustomField from "./CustomField";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  return (
    <Container>
      <Stack spacing={5}>
      <Box textAlign="left" justifyContent="space-between">
        <Heading fontSize="25px">Billing Details</Heading>
      </Box>
      <Stack spacing={2}>
      <Flex display={{base:'block', md:'flex'}} gap='5'>
        <CustomField
          type="text"
          id="FirstName"
          name="First Name"
          w="100%"
          placeholder="Maryam"
          required="this is required"
          minLength="4"
          maxLength="9"
          message="enter 4 characters atleast"
          errors={errors}
          register={register}
        ></CustomField>
        <CustomField
          type="text"
          id="LastName"
          name="Last Name"
          w="100%"
          placeholder="Naveed"
          required="this is required"
          minLength="4"
          maxLength="9"
          message="enter 4 characters atleast"
          errors={errors}
          register={register}
        ></CustomField>
      </Flex>
        <CustomField
          type="text"
          id="Address"
          name="Address"
          w="100%"
          placeholder="XX Bahria Town, Lahore"
          required="this is required"
          minLength="10"
          maxLength="30"
          message="enter 10 characters atleast"
          errors={errors}
          register={register}
        ></CustomField>
        <CustomField
          type="text"
          id="ShippingNote"
          name="ShippingNote"
          w="100%"
          placeholder="Shipping note (optional)"
          register={register}
        ></CustomField>
        <Flex  display={{base:'block', md:'flex'}} gap='5'>
          <CustomField
            type="text"
            id="City"
            name="City"
            w="100%"
            placeholder="Lahore"
            required="this is required"
            minLength="5"
            maxLength="15"
            message="enter 5 characters atleast"
            errors={errors}
            register={register}
          ></CustomField>
          <CustomField
            type="number"
            id="Postal Code"
            name="Postal Code"
            w="100%"
            placeholder="54400"
            required="this is required"
            minLength="5"
            maxLength="15"
            message="enter 5 characters atleast"
            errors={errors}
            register={register}
          ></CustomField>
        </Flex>
        <Button
          mb={4}
          mt={4}
          w="100%"
          colorScheme="green"
          isLoading={isSubmitting}
          type="submit"
          fontFamily="Gruppo"
        >
          Place Order
        </Button>
      </Stack>
      </Stack>   
     </Container>
  );
};

export default Form;

// <VStack as="form" onSubmit={handleSubmit(handleInput)}>
//   <Box>
//     <CustomField placeholder="Email or mobile phone number" />
//     <Checkbox>Add me to Candleaf newsletter for a 10% discount</Checkbox>
//   </Box>
//   <CustomField
//     type="text"
//     id="name"
//     name="Cardholders name"
//     w="100%"
//     placeholder="Maryamm Naveedd"
//     required="this is required"
//     minLength="4"
//     maxLength="9"
//     message="enter 4 characters atleast"
//     errors={errors}
//     register={register}
//   ></CustomField>
//   <Button
//     mt={4}
//     w="100%"
//     colorScheme="purple"
//     isLoading={isSubmitting}
//     type="submit"
//   >
//     Confirm
//   </Button>
// </VStack>
// <Box>
//   <p>Back to cart</p>
//   <Button>Go to shipping</Button>
// </Box>
// </Container>

// <CustomField
// type="number"
// id="number"
// name="Card number"
// w="100%"
// placeholder="1234 5678 9101 1213"
// required="this is required"
// minLength="16"
// maxLength="16"
// message="enter 16 digits only"
// errors={errors}
// register={register}
// ></CustomField>

// <Flex w="full">
// <CustomField
//   type="number"
//   id="MM"
//   name="MM"
//   w="90px"
//   placeholder="MM"
//   required="this is required"
//   minLength="2"
//   maxLength="2"
//   message="enter 2 digits only"
//   errors={errors}
//   register={register}
// ></CustomField>

// <CustomField
//   type="number"
//   id="YY"
//   name="YY"
//   w="90px"
//   placeholder="YY"
//   required="this is required"
//   minLength="2"
//   maxLength="2"
//   message="enter 2 digits only"
//   errors={errors}
//   register={register}
// ></CustomField>

// <CustomField
//   type="number"
//   id="CVC"
//   name="CVC"
//   w="100%"
//   placeholder="CVC"
//   required="this is required"
//   minLength="3"
//   maxLength="3"
//   message="enter 3 digits only"
//   errors={errors}
//   register={register}
// ></CustomField>
// </Flex>
