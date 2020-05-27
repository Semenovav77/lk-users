import React, {useState} from 'react';
import {Button, Input} from "antd";

import './InputContact.scss'

const InputContact = ({addUser}) => {
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const onAdd = () => {
        if (nameValue && emailValue) {
            addUser(nameValue,emailValue);
            setNameValue('');
            setEmailValue('');
        }
    }

    return (
        <div>
            <div className="input-contact">
                <div className="input-contact__name">
                    <Input onChange={(e) => setNameValue(e.target.value)} placeholder="Введите имя и фамилию.." value={nameValue}/>
                </div>
                <div className="input-contact__email">
                    <Input onChange={(e) => setEmailValue(e.target.value)} placeholder="Введите e-mail.." value={emailValue}/>
                </div>
                <div className="input-contact__btn">
                    <Button onClick={onAdd} type="primary" size={26}>Добавить</Button>
                </div>
            </div>
        </div>
    );
};

export default InputContact;