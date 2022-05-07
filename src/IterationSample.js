import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    //push는 기존 배열 자체를 변경 but concat은 새로운 배열을 만들어줌
    //리액트는 불변성을 유지해야함
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1); // nextId 값에 1을 더해줌
    setNames(nextNames); // names 값 업데이트
    setInputText(""); // inputText 비우기
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  //filter (filter는 불변성을 유지하면서 배열의 특정 항목을 지우는 함수)
  //const numbers = [1, 2, 3, 4, 5, 6];
  //const biggerThanThree = numbers.filter((number) => number !== 3);
  //console.log(biggerThanThree); -> 결과: [1,2,4,5,6]

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
