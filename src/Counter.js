import React, { useEffect, useState } from "react";

const Counter = () => {
  const [form, setForm] = useState({
    username: "",
    nickname: "",
  });

  //구조분해할당
  const { username, nickname } = form;

  //마운트될 때만 실행
  //   useEffect(() => {
  //     console.log({ username, nickname });
  //   }, []);

  //특정 값이 업데이트될 때만
  //   useEffect(() => {
  //     console.log({ username, nickname });
  //   }, [username, nickname]);

  //언마운트되기 전이나 업데이트되기 직전에 수행하고싶다면 cleanup 함수 반환
  //   useEffect(() => {
  //     console.log("effect");
  //     console.log(username);
  //     return () => {
  //       console.log("cleanup");
  //       console.log(username);
  //     };
  //   }, [username]);

  //언마운트될 때 cleanup을 호출하고 싶을때
  useEffect(() => {
    console.log("effect");
    console.log(username);
    return () => {
      console.log("unmount");
      console.log(username);
    };
  }, []);

  const onChange = (e) => {
    const changeForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(changeForm);
  };

  return (
    <>
      <div>
        <input name="username" onChange={onChange} value={username} />
        <input name="nickname" onChange={onChange} value={nickname} />
      </div>
      <div>
        <b>이름:</b> {username}
      </div>
      <div>
        <b>닉네임:</b> {nickname}
      </div>
    </>
  );
};

export default Counter;
