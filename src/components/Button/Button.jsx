import React from 'react';
import {Button as ButtonBase} from "antd";

const Button = ({onAddContact, text}) => {
    return (
            <div className="">
                <ButtonBase onClick={onAddContact} type="primary" size={26}>{text}</ButtonBase>
            </div>
    );
};

export default Button;