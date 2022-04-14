import React, { Component } from "react";

//onChange={(e) => {console.log(e);}}
//e 객체는 syntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체
//순수 js에서 html 다루듯 사용하면 된다.
//syntheticEvent는 0.5초 뒤에 e 객체를 참조하면 e 객체 내부의 모든 값이 비워지게된다.
//비동기적으로 이벤트 객체를 참조할 일이 있다면 e.persist() 함수를 호출해 주어야한다.
//v17부터 e.persist()는 SyntheticEvent가 더 이상 풀링되지 않기 때문에 아무런 동작 안함.
//컴퓨터 과학에서 풀(pool)은 재사용 될 준비를 하는 자원(Resource)의 집합

class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          name="message"
          placeholder="아무거나"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default EventPractice;
