import React, { useState, useEffect } from 'react';
import { Input } from 'antd';

import './InputContact.scss';
import { Button } from './../../components';

const InputContact = ({
  addUser,
  text,
  nameVal = '',
  emailVal = '',
  id = '',
  onAdd = false,
  editUser,
  onToogleEdit,
}) => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  const onAddContact = () => {
    if (onAdd) {
      if (nameValue && emailValue) {
        addUser(nameValue, emailValue);
        setNameValue('');
        setEmailValue('');
      }
    } else {
      if (nameValue && emailValue) {
        editUser(nameValue, emailValue, id);
        onToogleEdit();
        setNameValue('');
        setEmailValue('');
      }
    }
  };
  useEffect(() => {
    setNameValue(nameVal);
    setEmailValue(emailVal);
  }, []);

  return (
    <div>
      <div className="input-contact">
        <div className="input-contact__name">
          <Input
            onChange={(e) => setNameValue(e.target.value)}
            placeholder="Введите имя и фамилию.."
            value={nameValue}
          />
        </div>
        <div className="input-contact__email">
          <Input
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder="Введите e-mail.."
            value={emailValue}
          />
        </div>
        <div className="input-contact__btn">
          <Button onAddContact={onAddContact} text={text} />
        </div>
      </div>
    </div>
  );
};

export default InputContact;
