import React, { useState } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
  };

  return (
    <div>
      <input placeholder="Name" name="name" onChange={onChange} value={name} />
      <input
        placeholder="NickName"
        name="nickname"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>reset</button>
      <div>
        <b>값:</b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
