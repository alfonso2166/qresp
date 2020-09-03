import { useState } from "react";
import PropTypes from "prop-types";

import { TextField, Typography, Tooltip } from "@material-ui/core";

import { useField } from "formik";

const SelectInput = (props) => {
  const { id, placeholder, type, helperText, name } = props;

  const [field, meta] = useField(props);
  const [focused, setFocused] = useState(false);
  const [hovering, setHovering] = useState(false);

  return (
    <Tooltip
      title={
        helperText ? (
          <Typography variant="subtitle2">{helperText}</Typography>
        ) : (
          ""
        )
      }
      placement="top"
      arrow
      open={focused || hovering}
    >
      <TextField
        name={name}
        id={id}
        fullWidth
        variant="outlined"
        placeholder={placeholder}
        type={type}
        {...field}
        error={meta.touched && meta.error && !focused}
        helperText={meta.touched && meta.error && !focused ? meta.error : ""}
        InputProps={{
          onFocus: () => setFocused(true),
          onBlur: (e) => {
            field.onBlur(e);
            setFocused(false);
          },
          onMouseEnter: () => setHovering(true),
          onMouseLeave: () => setHovering(false),
        }}
      />
    </Tooltip>
  );
};

TextInput.defaultProps = {
  type: "text",
  helperText: "",
  required: false,
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  helperText: PropTypes.string,
};

export default SelectInput;
