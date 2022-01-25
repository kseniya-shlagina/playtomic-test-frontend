import React from "react";
import {
  FormControl,
  OutlinedInputProps,
  OutlinedInput,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
  errorText?: string;
  isRequired?: boolean;
  name?: string;
  key?: number | string;
}

export const Input: React.FC<InputProps & OutlinedInputProps> = ({
  value,
  onChange,
  errorText,
  label,
  name,
  isRequired,
  ...outlineInputProps
}) => {
  const labelId = "myLabel";
  const isError = Boolean(errorText);
  const styles = useStyles();

  return (
    <FormControl className={styles.margin} variant="outlined">
      <InputLabel htmlFor={labelId} error={isError}>
        {label}
      </InputLabel>
      <OutlinedInput
        id={labelId}
        required={isRequired}
        type="text"
        label={label}
        error={isError}
        value={value}
        onChange={onChange}
        name={name}
        {...outlineInputProps}
      />
      {isError && <FormHelperText error>{errorText}</FormHelperText>}
    </FormControl>
  );
};
