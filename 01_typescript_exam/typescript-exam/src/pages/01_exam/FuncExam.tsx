// TODO : 자식 컴포넌트./pages/01_exam FuncExam.tsx
// TODO : typescript 역바인딩(이벤트) 함수 정의 해보기 연습문제

// TODO : React 컴포넌트
// TODO : 리액트 기본 컴포넌트 템플릿 단축키 사용
// 단축키 : rfce
import React, { useState } from "react";

function FuncExam() {
  // TODO: 소스완성하기 : 타입스크립트 적용
  // 결과 :
  //       입력값 : !Ds1234567890
  //       안녕하세요 오늘날짜는 4 일이 맞나요? 답은 true 입니다.

  // TODO : 변수 정의
  let [password, setPassword] = useState<string>("");
  let [message, setMessage] = useState<string>("");

  // TODO : typescript 함수 정의
  const getInput = (arg: string, arg2: number, arg3: boolean): void => {
    setMessage(`${arg} 오늘날짜는 ${arg2} 일이 맞나요? 답은 ${arg3} 입니다.`);
  };

  // TODO : 역바인딩(이벤트) 함수 정의
  const onChangPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);}

    return (
      // TODO : html 정의
      <div className="container">
        {/* 패스워드 상자 시작 */}
        <input
          className="form-control mt-3 mb-3 w-25"
          type="password"
          name="password"
          value={password}
          onChange={onChangPassword}
        />
        입력값 : {password}
        {/* 패스워드 상자 끝 */}
        <br />
        {/* 버튼 시작 */}
        <button
          className="btn btn-primary mt-3 mb-3"
          onClick={() => getInput("안녕하세요", 4, true)}
        >
          입력값
        </button>
        {/* 버튼 끝 */}
        {/* 메시지 */}
        <br />
        {message}
      </div>
    );
  };
export default FuncExam;
