interface InputProps {
  name: string;
  placeholder: string;
  icon?: boolean;
  onChange: any;
  value: string;
  style: StyleSheet;
}
const Input = ({
  name,
  placeholder,
  icon,
  value,
  onChange,
  style,
}: InputProps) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={style}
    />
  );
};

export default Input;
