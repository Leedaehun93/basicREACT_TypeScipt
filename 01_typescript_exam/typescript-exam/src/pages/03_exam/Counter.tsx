// TODO : 자식 컴포넌트./pages/03_exam/ Counter.js
// TODO : typescript 내장함수 카운팅 연습문제

// TODO : React 컴포넌트
// TODO : 리액트 기본 컴포넌트 템플릿 단축키 사용
// 단축키 : rfce
import React, { useState } from "react";

function Counter() {
  // TODO : 변수 정의
  let [count, setCount] = useState<number>(0);

  // TODO : 함수 정의
  // 증가
  let setIncreate = () => {
    setCount(count++);
  };
  // 카운팅 함수 감소(값 0 보다 클 때만 실행)
  let setDecreate = () => {
    if (count > 0) {
      setCount(count--);
    }
  };

  return (
    // TODO : html 정의
    <div>
      <h3>Counter 예제</h3>
      <button onClick={setIncreate}>증가</button>
      {/* //  TODO: 연습문제 숫자를 감소시키는 함수를 작성하고 화면에 표시하세요 */}
      <button onClick={setDecreate}>감소</button>
      <p>값 : {count}</p>
    </div>
  );
}

export default Counter;
