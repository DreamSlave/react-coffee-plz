import React from 'react';

interface CheckBoxProps {
    checked?: boolean;
    onClick?(): void;
}

const CheckBox = ({
    checked,
    onClick
}: CheckBoxProps) => {
    return (
        <>
            <div className="container" onClick={onClick}>
                <div className="checkIcon">
                    {checked && "✔︎"}
                </div>
            </div>
        </>
    );
}

export default CheckBox;