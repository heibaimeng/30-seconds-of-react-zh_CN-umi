function Input({
  callback,
  type = "text",
  disabled = false,
  readOnly = false,
  placeholder = ""
}) {
  return (
    <input
      type={type}
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder}
      // event.target.value
      onChange={({ target: { value } }) => callback(value)}
    />
  );
}

export default function() {
  return (
    <Input
      type="text"
      placeholder="Insert some text here..."
      callback={val => console.log(val)}
    />
  );
}
