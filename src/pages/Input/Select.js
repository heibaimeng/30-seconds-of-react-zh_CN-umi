import React from "react";
function Select({
  values,
  callback,
  disabled = false,
  readonly = false,
  selected
}) {
  const [current, setCurrent] = React.useState(selected);
  const handleChange = ({ target: { value } }) => {
    setCurrent(value);
    callback(value);
  };
  return (
    <select
      value={current}
      disabled={disabled}
      readOnly={readonly}
      onChange={handleChange}
    >
      {values.map(([value, text]) => (
        <option value={value} key={value}>
          {text}
        </option>
      ))}
    </select>
  );
}

export default function() {
  let choices = [
    ["grapefruit", "Grapefruit"],
    ["lime", "Lime"],
    ["coconut", "Coconut"],
    ["mango", "Mango"]
  ];
  return (
    <Select
      values={choices}
      selected={"lime"}
      callback={val => {
        console.log(val);
      }}
    />
  );
}
