// TODO : 부모 컴포넌트 메인 : App.tsx

import React from "react";

// TODO : App.css import (기본 : 중앙정렬)
import "./App.css";

// TODO : 페이지(자식) 컴포넌트 가져오기(import)
import Basic from "./pages/Basic";
import BasicExam from "./pages/BasicExam";
import Func from "./pages/01_exam/Func";
import FuncExam from "./pages/01_exam/FuncExam";
import Etc from "./pages/02_exam/Etc";
import Counter from "./pages/03_exam/Counter";
import Book from "./pages/04_exam/Book";
import WebtoonExam from "./pages/04_exam/WebtoonExam";

function App() {
  return (
    <div className="App">
      {/* TODO: 자식 컴포넌트 추가 */}
      {/* 타입스트립트 기본 사용법 연습문제 */}
      {/* <Basic /> */}
      {/* 타입스트립트 기본 사용법(바인딩, 일반 변수 정의) 연습문제 */}
      {/* <BasicExam /> */}

      {/* TODO: 01_exam */}
      {/* <Func /> */}
      {/* <FuncExam /> */}

      {/* TODO: 02_exam */}
      {/* <Etc /> */}

      {/* TODO: 03_exam */}
      {/* typescript 내장함수 카운팅 연습문제 */}
      {/* <Counter /> */}

      {/* TODO: 04_exam */}
      {/* typescript 내장함수 객체배열 반복문 사용 */}
      {/* <Book /> */}
      {/* typescript 내장함수 객체배열 반복문 사용 연습문제 */}
      {/* <WebtoonExam /> */}
    </div>
  );
}

export default App;
