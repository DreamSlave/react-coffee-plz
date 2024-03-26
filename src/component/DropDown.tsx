import React, { useState, useEffect } from 'react';

interface DataItem {
  [key: string]: string | number;
}

interface DropDownProps<T extends DataItem, K extends keyof T> {
  children?: React.ReactNode;
  dataItem: T[]; // Change to T[] as it's more specific than Array<T>
  onChange?: (value: T) => void;
  defaultValue?: T[K];
  itemKey: K;
  itemValue: K;
}

const DropDown = <T extends DataItem, K extends keyof T>({
  children,
  dataItem,
  onChange,
  defaultValue,
  itemKey,
  itemValue
}: DropDownProps<T, K>) => {
  const [selectedValue, setSelectedValue] = useState<T | undefined>(
    defaultValue ? dataItem.find(item => item[itemKey] === defaultValue) : undefined
  );

  useEffect(() => {
    if (defaultValue !== undefined && !selectedValue) {
      const defaultValueItem = dataItem.find(item => item[itemKey] === defaultValue);
      if (defaultValueItem) {
        setSelectedValue(defaultValueItem);
        if (onChange) {
          onChange(defaultValueItem);
        }
      }
    }
  }, [defaultValue, selectedValue, onChange, dataItem, itemKey]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedValue: T = dataItem[selectedIndex];

    setSelectedValue(selectedValue);

    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <div>
      {children}
      <select value={selectedValue?.[itemKey]} onChange={handleSelectChange}>
        {dataItem.map((item, index) => (
          <option key={index} value={item[itemKey]}>
            {item[itemValue]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
