import React from "react";
import { Field } from "formik";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/core";

function ChakraInput(props) {
  const { label, name, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl
          isInvalid={form.errors[name] && form.touched[name]}
          mt="1vw"
        >
          <FormLabel htmlFor={name} fontSize={20}>
            <b>{label}</b>
          </FormLabel>
          <Input id={name} {...rest} {...field} />
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}

export default ChakraInput;
