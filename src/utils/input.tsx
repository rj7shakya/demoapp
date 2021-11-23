import TextField from "@mui/material/TextField";

export const Input = ({
  name,
  style,
  error,
  type,
  register,
  value,
  disabled,
  placeholder,
  multiline,
  onChange,
  required,
}: any) => {
  return (
    <div className="input">
      <div>
        {name}
        {required && <span className="star">*</span>}
      </div>
      <TextField
        id="outlined-basic"
        margin="dense"
        placeholder={placeholder}
        variant="outlined"
        style={style}
        type={type === "password" ? "password" : "text"}
        value={value}
        disabled={disabled}
        onChange={onChange}
        multiline={multiline}
        minRows={3}
        {...register}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
};
