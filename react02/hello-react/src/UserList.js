import React from "react";

function User({userInput, onRemove, onToggle}){
	return(
		<div>
			<b
				style={{
					cursor: 'pointer',
					color: userInput.active? 'green' : 'black'
				}}
				onClick={() => onToggle(userInput.id)}
			>
			{userInput.username}
			</b>
			<span> ({userInput.email})</span>
			<button onClick={() => onRemove(userInput.id)}>delete</button>
		</div>
	);
}

function UserList({users, onRemove, onToggle}){

	return (
		<div>
			{/* <User userInput={users[0]}/>
			<User userInput={users[1]}/>
			<User userInput={users[2]}/> */}

			{/* each child in a js list should have a unique "key" prop 해결*/}
			{users.map(someone => (
			<User 
			userInput={someone} 
			key={someone.id} 
			onRemove={onRemove}
			onToggle={onToggle}
			/>
			))}

			{/* 고유값이 없을 땐 인덱스로 key 값 잡아줌 */}
			{/* {users.map((someone, idx) => (
			<User userInput={someone} key={idx}/>
			))} */}
		</div>
	);
}

export default UserList;
