import React, { useState } from 'react';

interface CheckBoxProps {
  children : React.ReactElement
  checked?: boolean;
  onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({
  children,
  checked,
  onChange
}: CheckBoxProps) => {
  const [state, setState] = useState(checked)

  const handleChange = (event: any) => {
    const checked = event.target.checked
    setState(checked);
    if (onChange) {
      onChange(checked);
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