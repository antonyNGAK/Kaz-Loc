const InputField = ({ type, placeholder, value, onChange, Icon }) => (
  <div className="input-wrapper">
    <input
      type={type}
      placeholder={placeholder}
      className="input-field"
      value={value}
      onChange={onChange}
      required
    />
    <Icon className="icon" />
  </div>
);

export default InputField;
