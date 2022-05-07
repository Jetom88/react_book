import React, { useReducer } from "react";

//useReducer는 state보다 더 다양한 상황에서 다양한 상태를 다른 값으로 업데이트할 때 사용하는 hook
//리듀서는 현재 상태, 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 반환하는 함수
//새로운 상태를 만들 때는 불변성 지키기

function reducer(state, action) {
  const { value } = state;
  switch (action.type) {
    case "INCREMENT":
      return { value: value + 1 };
    case "DECREMENT":
      return { value: value - 1 };
    default:
      //해당 안되면 기존 상태 반환
      return state;
  }
}

const Counter = () => {
  //useReducer의 첫 번째는 함수, 두 번째는 리듀서 기본 값
  //state는 현재 가리키고 있는 상태, dispatch는 액션을 발생시키는 함수
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  const { value } = state;
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
