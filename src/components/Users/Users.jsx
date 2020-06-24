import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { User } from './../../components';
import '../InputContact/InputContact.scss';
import { InputContact } from '../../components';
import './User.scss';
import { Input } from 'antd';

const Users = ({ users, isAuth, getUsers, delUsers, addUser, editUser }) => {
  const [itemsFiltred, setFiltredItems] = useState(Array.from(users));
  const [inputFilter, setInputFilter] = useState('');

  const onChangeInputSearch = (e) => {
    setFiltredItems(
      users.filter((el) => el.fullname.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0),
    );
    setInputFilter(e.target.value);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    setFiltredItems(users);
  }, [users]);

  return (
    <div className="users-wrapper">
      <div className="top">Список контактов </div>
      <div className="search-bar">
        <Input onChange={onChangeInputSearch} placeholder="Поиск контактов.." value={inputFilter} />
      </div>
      {itemsFiltred.map((user) => (
        <User key={user.id} user={user} delUsers={delUsers} editUser={editUser} />
      ))}
      <div className="input-add">
        <InputContact addUser={addUser} text={'Добавить'} onAdd={true} />
      </div>
    </div>
  );
};

export default Users;
