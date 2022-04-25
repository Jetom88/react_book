import React, { Component, useState } from "react";

const EventPractice = () => {
  // const [username, setUsername] = useState("");
  // const [message, setMessage] = useState("");
  // const onChangeUsername = (e) => setUsername(e.target.value);
  // const onChangeMessage = (e) => setMessage(e.target.value);
  // const onClick = () => {
  //   alert(username + ": " + message);
  //   setUsername("");
  //   setMessage("");
  // };
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input name="username" value={username} onChange={onChange} />
      <input name="message" value={message} onChange={onChange} />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
