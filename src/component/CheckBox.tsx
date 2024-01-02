import React, { useState, useEffect } from 'react';

interface CheckBoxProps {
  children : React.ReactElement
  checked?: boolean | undefined;
  onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({
  children,
  checked,
  onChange
}: CheckBoxProps) => {
  const [state, setState] = useState(checked)

  useEffect(() => {
    setState(checked);
  }, [checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    setState(checked);
    if (onChange) {
      onChange(event);
    }
  };
  
  return (
    <label>
      <input
        type="checkbox"
        checked={state}
        onChange={handleChange}
      />
      {children}
    </label>
  );
}

export default CheckBox;