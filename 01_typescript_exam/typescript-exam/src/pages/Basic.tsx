// TODO : 자식 컴포넌트./pages/Basic.tsx (typescript 적용된 버전)
// TODO: 타입스트립트 기본 사용법 익히기(바인딩, 일반 변수 정의)

// TODO: 새로운 객체타입(자료형) 정의한 파일 import
import IObject from "../types/IObject";

// TODO : React 컴포넌트
// TODO : 리액트 기본 컴포넌트 템플릿 단축키 사용
// 단축키 : rfce
import React, { useState } from "react";

function Basic() {
  // TODO: 바인딩 변수
  // 사용법 : let [변수명, set변수명] = useState<자료형>(초기값);
  let [message, setMessage] = useState<string>("바인딩 변수 출력입니다.");
  let [num, setNum] = useState<number>(0);
  let [bflag, setBflag] = useState<boolean>(true);
  let [obj, setObj] = useState<IObject>({ id: null, name: "green" });
  let [arr, setArr] = useState<Array<number>>([ 1,2,3,4,5 ]);
  let [objArr, setObjArr] = useState<Array<IObject>>([{ id: null, name: "green" }]);

  // TODO: 1) 기본 자료형 : 문자열(string), 숫자(number), 참/거짓(boolean), 객체(따로 정의)
  // TODO   : 일반 변수 정의(문자열(자료형))
  // 사용법 : let 변수명: 자료형 = "문자열";
  let message2: string = "일반 변수 출력입니다.";
  let num2: number = 1; // 숫자형(실수, 정수 모두 포함)
  let bflag2: boolean = false; // 참/거짓(bool/boolean)

  // TODO: 객체는 자료형을 개발자가 정의해서 사용함
  // IObject = { id?: any | null, name: string };
  // 설명 : id (any(모든자료형 허용) 또는 null 자료형 허용)
  //        name (string(문자열만 들어올수 있음))
  let obj2: IObject = { id: null, name: "green2" }; // 객체(object)

  // TODO: 2) 유니온 사용법 : let 변수명: 자료형 | 자료형2 ...
  // 사용법 :
  let num3: number | string = 1;
  let num4: number | string = "hello";
  // let num5: number | string = true; // TODO: 에러

  // TODO: 3) 옵셔널(?) : 객체의 속성이나 함수의 매개변수에 사용가능
  // TODO: 사용하면 오류없이 실행되게 함( 자료형 | undefined 더 붙은 것과 같은 의미 )
  // 사용법 :
  function hello(name?: string) {
    console.log(`안녕하세요 ${name}`);
  }
  // 함수의 사용
  hello("홍길동"); // 결과 출력 : 안녕하세요 홍길동
  hello(); // 결과 출력 : 안녕하세요

  // TODO: 4) 배열 : 변수 및 함수 사용 시 반드시 정의된 자료형의 값으로 사용하게 강제함
  // 사용법 : let 변수: Array<자료형> | 자료형2 ...>
  let arr2: Array<string> = ["a", "b", "c"]; // 문자열 배열
  let arr3: Array<any> = [1,2,3]; // any(모든 자료형 사용가능) 배열
  let arr4: Array<number> = [1,2,3]; // 숫자 배열
  // TODO: 4-1) 객체배열
  let objArr2: Array<IObject> = [{ id: 1, name: "green2" }]; // JSON 문서 형태(객체배열)

  return (
    // TODO : html 정의
    <div>
      문자(바인딩) : {message} <br />
      문자(일반) : {message2} <br />
      <br />
      숫자(바인딩) : {num} <br />
      숫자(일반) : {num2} <br />
      <br />
      불(바인딩) : {bflag ? "참" : "거짓"} <br />
      불(일반) : {bflag2 ? "참" : "거짓"} <br />
      <br />
      객체(바인딩) : {obj.name} <br />
      객체(일반) : {obj2.name} <br />
      <br />
      배열(바인딩) : {arr} <br />
      배열(일반) : {arr2} <br />
      <br />
      
      {/* TODO: 반복문으로 출력 : .map((value, idnex)=>()) */}
      객체배열(바인딩) : {objArr.map((value)=>value.name)} <br />
      객체배열(일반) : {objArr2.map((value)=>value.name)} <br />
    </div>
  );
}

export default Basic;
