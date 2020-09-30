import React from "react";
import { Field } from "formik";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/core";

function ChakraRadio(props) {
  const { label, name, options, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel htmlFor={name}>
            <b>{label}</b>
          </FormLabel>
          <RadioGroup isInline>
            {options.map((option) => {
              return (
                <React.Fragment key={option.key}>
                  <Radio
                    htmlFor={option.value}
                    id={option.value}
                    {...field}
                    {...rest}
                    value={option.value}
                    checked={field.value === option.value}
                    variantColor="red"
                  >
                    {option.key}
                  </Radio>
                </React.Fragment>
              );
            })}
          </RadioGroup>
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}

export default ChakraRadio;
