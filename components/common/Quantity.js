import {useState} from 'react';
import { HStack, Button, Input } from "@chakra-ui/react";

const Quantity = () => {
    const [quantity, setQuantity] = useState(1);
    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };
    const handleDecrement = () => {
      setQuantity(quantity - 1);
    };
    const handleInput = (value) => {
      setQuantity(quantity + value);
    };
    return (
      <HStack maxW="320px">
        <Button onClick={handleIncrement}>+</Button>
        <Input onClick={handleInput} />
        <Button onClick={handleDecrement}>-</Button>
      </HStack>
    );
  };
export default Quantity
