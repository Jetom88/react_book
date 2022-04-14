import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕");
  const onClickLeave = () => setMessage("ㅃ2");
  const [color, setColor] = useState("black");

  //이벤트 사용시 주의 사항
  //1.카멜 표기법으로 작성(onClick, onKeyUp)
  //2. 자바스크립트 코드가 아닌 함수 형태의 값을 전달
  //3. DOM 요소에만 이벤트 설정 가능 <MyComponent onClick={~~~}/>
  //props를 컴포넌트 내부의 DOM 이벤트로 설정할 수 있음!

  return (
    <div className="App">
      <button onClick={onClickEnter}>ㅎ2</button>
      <button onClick={onClickLeave}>ㅃ2</button>
    </div>
  );
}

export default App;
