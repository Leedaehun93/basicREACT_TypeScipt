// TODO : 자식 컴포넌트./pages/04_exam/ Book.js
// TODO : typescript 내장함수 객체배열 반복문 사용

// TODO : 새로운 객체타입(자료형) 정의한 파일 import
import IBook from "../../types/IBook";

// TODO : React 컴포넌트
// TODO : 리액트 기본 컴포넌트 템플릿 단축키 사용
// 단축키 : rfce
import React, { useState } from "react";

function Book() {
  // TODO: 변수 정의
  const initialBooks = [
    {
      id: 1,
      title: "어떻게 배울 것인가",
      publisher: "비즈니스북스",
      author: "존 맥스웰",
      stock: 2,
    },
    {
      id: 2,
      title: "신경끄기의 기술",
      publisher: "갤리온",
      author: "마크 맨슨",
      stock: 0,
    },
    {
      id: 3,
      title: "부의 미래",
      publisher: "청림출판",
      author: "앨빈 토플러",
      stock: 5,
    },
    {
      id: 4,
      title: "기획자의 습관",
      publisher: "홍익출판사",
      author: "최장순",
      stock: 4,
    },
  ];
  // TODO: 바인딩 변수(객체배열) 정의 : typescript 적용
  // TODO : 사용법 : let [변수명, set변수명] = useState<Array<객체자료형>>(초기값);
  // TODO: 객체자료형 : 따로 정의(IBook) : 이름규칙(명명법) I이름
  let [books, setBooks] = useState<Array<IBook>>(initialBooks); // 객체배열

  // TODO : 함수 정의

  return (
    // TODO : html 정의
    <div>
      <h1>체르니 책방의 도서목록</h1>
      <table>
        <thead>
          <tr>
            <th>도서번호</th>
            <th>도서이름</th>
            <th>출판사</th>
            <th>저자</th>
            <th>재고량</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: 반복문 : 배열변수.map((value, index)=>(<태그>{value.속성명}</태그>)) */}
          {/* TODO: 반복대상 : 행(<tr> <td></td> </tr>) */}
          {books.map((value, index) => (
            // TODO: 테이블 tr/td 태그
            <tr key={index}>
              <td>{value.id}</td>
              <td>{value.title}</td>
              <td>{value.publisher}</td>
              <td>{value.author}</td>
              <td>{value.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Book;
