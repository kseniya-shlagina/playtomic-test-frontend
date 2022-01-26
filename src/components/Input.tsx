import React from "react";
import {
  FormControl,
  OutlinedInputProps,
  OutlinedInput,
  InputLabel,
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
  isRequired?: boolean;
  name?: string;
}

export const Input: React.FC<InputProps & OutlinedInputProps> = ({
  value,
  onChange,
  label,
  name,
  isRequired,
  ...outlineInputProps
}) => {
  const styles = useStyles();

  return (
    <FormControl className={styles.margin} variant="outlined">
      <InputLabel>{label}</InputLabel>
      <OutlinedInput
        required
        type="text"
        label={label}
        value={value}
        onChange={onChange}
        name={name}
        {...outlineInputProps}
      />
    </FormControl>
  );
};
