import React from "react";
import {
  Box,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
} from "@chakra-ui/react";

export default function CustomField({
  id,
  name,
  w,
  len,
  type,
  message,
  placeholder,
  required,
  minLength,
  maxLength,
  errors,
  register,
}) {

  return (
    <FormControl>
      <FormLabel
        fontFamily="Gruppo"
        fontSize="20px"
        fontWeight="bold"
        htmlFor={id}
      >
        {name}
      </FormLabel>

      <Input
        w={w}
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id, {
          required: required,
          minLength: { value: parseInt(minLength), message: `${message}` },
          maxLength: { value: parseInt(maxLength), message: `${message}` },
        })}
        border={errors[id] ? "2px solid" : "1px solid gray"}
        borderColor={errors[id] ? "red.500" : "gray.300"}
      />
      {errors[id] && (
        <Box color="red.500" fontSize="10px">
          <p>{message}</p>
        </Box>
      )}
      <FormErrorMessage>{errors.id && errors?.message}</FormErrorMessage>
    </FormControl>
  );
}
