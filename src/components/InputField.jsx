const InputField = ({ type, placeholder, onChange, Icon }) => (
  <div className="input-wrapper">
    <input
      type={type}
      placeholder={placeholder}
      className="input-field"
      onChange={onChange}
      required
    />
    <Icon className="icon" />
  </div>
);

export default InputField;
