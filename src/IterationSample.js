import React from "react";
//key를 사용하는 이유 virtual DOM을 비교하는 과정해서 리스트를 순차적으로 비교하면서 변화를 감지하는데,
//key가 있다면 이 값을 사용해 어떤 변화가 일어났는지 빠르게 알아낼 수 있다.

const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];

  //고유한 값이 없을 때만 index 값을 key로 사용하기! ///index를 Key로 사용하면 배열이 변경될 때 효율적으로 리렌더링하지 못한다.
  const nameList = names.map((name, i) => <li key={i}>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
