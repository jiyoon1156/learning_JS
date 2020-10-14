import React, {useRef, useState} from 'react';

function User({userInput}){
  return (
    <div>
      <b>{userInput.username} </b>
      <span>{userInput.email}</span>
    </div>
  )
}

function UserList({userList}){
  return (
    <div>
      { userList.map(userIdx => <User userInput={userIdx} key={userIdx.id}/>) }
    </div>
  )
}

function CreateUser({username, email, onChange, onCreate}){
  return (
    <div>
      <input 
        placeholder = "NAME"
        name = "username"
        onChange = {onChange}
        value = {username}
      />
      <input 
        placeholder = "EMAIL"
        name = "email"
        onChange = {onChange}
        value = {email}
      />
      <button onClick={onCreate}>create</button>
    </div>
  )
}

function App() {

  const [users, setUsers] = useState([
    {
      id : 1,
      username: 'jhur',
      email: 'jhur@example.com',
    },
    {
      id : 2,
      username: 'apple',
      email: 'apple@ios.com',
    },
    {
      id: 3,
      username: 'banana',
      email: 'banana@fruit.com',
    }
  ]);

  const [inputs, setInputs] = useState({
    username : "",
    email : ""
  })

  const {username, email} = inputs;

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name] : e.target.value
    })
  }

  const nextId = useRef(4);

  const onCreate = () => {

    const user = {
      id : nextId.current,
      username,
      email
    };
    setUsers(users.concat(user)); //배열에 저 형식으로 추가
    setInputs({
      username: '',
      email: ''
    }); // 생성버튼 누르고 나서 칸 깨끗하게 지워주는 거
    nextId.current += 1; // 다음 인덱스 미리 증가시켜주는거
  }

  return (
    // <div>
    //   {/* <User userInput={users[0]}></User>
    //   <User userInput={users[1]}></User>
    //   <User userInput={users[2]}></User> */}
    //   { users.map(userIdx => <User userInput={userIdx} key={userIdx.id}/>) }
    // </div>
    <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
    <UserList userList={users}/>
    </>
  );
}

export default App;
