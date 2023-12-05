import React from 'react';

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
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {children}
    </label>
  );
}

export default CheckBox;