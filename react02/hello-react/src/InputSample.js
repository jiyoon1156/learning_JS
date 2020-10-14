import React, { useState, useRef } from 'react';

function InputSample(){
	
	// const[text, setText] = useState('');

	// const onChange = (e) => {
	// 	setText(e.target.value);
	// };

	// const onReset = () => {
	// 	setText('');
	// };
	
	const [inputs, setInputs] = useState({
		name: "",
		nickname: "",
	});

	const nameInput = useRef();

	const {name, nickname} = inputs; //순서도 중요하다 inputs가 위에서 선언된다고 보면 됨

	const onReset = () => {
		setInputs({
			name: "",
			nickname: ""
		});
		nameInput.current.focus();
	};

	const onChange = (e) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value
		});
	};


	return(
		<div>
			<input 
			placeholder="Name" 
			onChange={onChange} 
			name="name" 
			value={name}
			ref = {nameInput}
			/>
			<input 
			placeholder="NickName"
			onChange={onChange} 
			name="nickname" 
			value={nickname}
			/>
			<button onClick={onReset}>reset</button>
			<div>
				<b>값:</b>
				{name}({nickname})
			</div>
		</div>
	);
}

export default InputSample;
