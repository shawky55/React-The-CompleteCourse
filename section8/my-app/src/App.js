import React, { useState } from 'react';
import Adduser from './components/AddUser/Adduser';
import UserList from './components/UserList/UserList';

function App() {
  function AddUserHandler(obj) {
    setList((previousList) => {
      return [...previousList, obj];
    });
  }

  const listDeleteHandler = (e, key) => {
    let newARr = items.filter((item, indx) => indx !== key);
    setList(newARr);
  };

  const [items, setList] = useState([]);
  return (
    <div>
      {console.log(items)}
      <Adduser onAddtoList={AddUserHandler} />
      <UserList items={items} listDeleteHandler={listDeleteHandler}></UserList>
    </div>
  );
}

export default App;
