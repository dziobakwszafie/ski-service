import React from "react";

const Input = props => {
  const {
    input,
    label,
    meta: { touched, error, warning },
    ...custom
  } = props;

  return (
    <div className="input-wrapper">
      <TextField
        label={label}
        error={touched && !!error}
        fullWidth
        {...input}
        {...custom}
      />
      {touched && error && <FormHelperText error>{error}</FormHelperText>}
      {touched && warning && <FormHelperText>{warning}</FormHelperText>}
    </div>
  );
};

export default withStyles(null)(Input);
