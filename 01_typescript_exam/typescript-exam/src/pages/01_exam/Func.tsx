// TODO : 자식 컴포넌트./pages/01_exam Func.tsx
// TODO : typescript 역바인딩(이벤트) 함수 정의 해보기

// TODO : React 컴포넌트
// TODO : 리액트 기본 컴포넌트 템플릿 단축키 사용
// 단축키 : rfce
import React, { useState } from "react";

function Func() {
  // TODO: 변수 정의
  let [name, setName] = useState<string>("");
  let [message, setMessage] = useState<string>("");

  // TODO: 함수 정의 : TODO: typescript 적용
  // 단축키 : nfn
  // 매개변수 2개를 전달받아 message 변수에 저장하는 함수
  // getInputVal("안녕하세요", 2023)}
  // 사용법 : const 함수명 = (매개변수: 자료형, ...): 리턴자료형 => {}
  //                                               리턴자료형은 생략가능
  const getInputVal = (arg: string, arg2: number): void => {
    setMessage(`${arg} 현재는 ${arg2} 년도입니다.`); //  message(화면 바인딩)
  };
  // TODO: 역바인딩(이벤트) 함수 정의
  // 단축키 : nfn
  // TODO: 사용법 : const 함수명 = (event:이벤트자료형): 리턴자료형 => {}
  // TODO:                               이벤트자료형은 해당 이벤트에 마우스 커서를 가져다되면 자료형 코드가 나온다.
  // 사용법 : const 함수명 = (매개변수: 자료형, ...): void 리턴자료형 => {}
  //                                               리턴자료형은 생략가능
  const onChangName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    // TODO : html 정의
    <div className="container">
      {/* 이름 상자 시작 */}
      <input
        className="form-control mt-3 mb-3 w-25"
        type="text"
        name="name"
        value={name}
        onChange={onChangName}
      />
      입력값 : {name}
      {/* 이름 상자 끝 */}
      <br />
      {/* 버튼 시작 */}
      {/* TODO: 이벤트 함수에 매개변수 있으면 화살표함수를 사용해야함 */}
      {/* TODO: 매개변수 X nClick={함수명} */}
      {/* TODO: 매개변수 O react 아래 onClick={()=>{함수명(매개변수, 매개변수2..)}} */}
      <button
        className="btn btn-primary mt-3 mb-3"
        onClick={() => getInputVal("안녕하세요", 2023)}
      >
        입력값
      </button>
      {/* 버튼 끝*/}
      <br />
      {/* 메시지 */}
      {message}
    </div>
  );
}

export default Func;
