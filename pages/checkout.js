import React from "react";
import { CheckoutItems, CheckoutCalculations } from "../components/checkout";
import Form from "../components/checkout/components/Form";

const Checkout = () => {
  return (
    <div>
      <CheckoutItems />
      <CheckoutCalculations />
    </div>
  );
};

export default Checkout;
