import React, {useState, useRef} from 'react';
// import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [users, setUsers] = useState([
    {
      id : 1,
      username: 'jhur',
      email: 'jhur@example.com',
      active: true
    },
    {
      id : 2,
      username: 'apple',
      email: 'apple@ios.com',
      active: false
    },
    {
      id: 3,
      username: 'banana',
      email: 'banana@fruit.com',
      active: false
    }
  ]);

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })

  const {username, email} = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  };

  const nextId = useRef(4);
  
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };

    // 새로운 배열 추가하는 방법: spread 연산 혹은 concat
    // setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    //user.id 가 파라미터로 일치않는 원소만 추출해서 새로운 배열 만든다.
    // = user.id가 id인 것을 제거
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = (id) => {
    setUsers(
      users.map(user =>
        user.id === id? {...user, active : !user.active} : user
      )
    )
  }

  return (
    // <InputSample></InputSample>
    <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;
