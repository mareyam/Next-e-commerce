import { useForm } from "react-hook-form";
import { Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ThankyouCard from "components/thankyou/components/ThankyouCard";
import CheckoutCard from "../checkout/components/CheckoutCard";
import { useRouter } from "next/router";

export default function FormValidation({ data }) {
  const router = useRouter();
  console.log("data is");
  console.log(data);

  const [formValues, setFormValues] = useState({});
  const [isValidated, setIsValidated] = useState(false);

  const validateInput = (data) => {
    const firstNameRegex = /^[a-z]+$/;
    const lastNameRegex = /^[a-z]+$/;
    const postalRegex = /^\d{5}$/;
    const addressRegex = /^[a-z]+$/;
    const cityRegex = /^[a-z]+$/;

    if (data?.FirstName && firstNameRegex.test(data?.FirstName)) {
    } else {
      console.log("First Name is not valid.");
      return false;
    }

    if (data?.LastName && lastNameRegex.test(data?.LastName)) {
    } else {
      console.log("Last Name is not valid.");
      return false;
    }

    if (data?.PostalCode && postalRegex.test(data?.PostalCode)) {
    } else {
      console.log("Postal Address is not valid.");
      return false;
    }

    if (data?.Address && addressRegex.test(data?.Address)) {
    } else {
      console.log("Address is not valid.");
      return false;
    }

    if (data?.City && cityRegex.test(data?.City)) {
    } else {
      console.log("Address is not valid.");
      return false;
    }

    setFormValues(data);
    setIsValidated(true);
  };

  useEffect(() => {
    if (data && validateInput(data)) {
      setIsValidated(true);
      // onValidated(true);
    }
  }, [data]);

  useEffect(() => {
    // console.log("here" + formValues);
    // console.log(isValidated);
  }, [formValues]);

  if (isValidated) {
    router.push("/thankyou");
  }
  return (
    <>
      {console.log(isValidated)}
      {/* {isValidated? <ThankyouCard/> : <CheckoutCard/>} */}
    </>
  );
}
