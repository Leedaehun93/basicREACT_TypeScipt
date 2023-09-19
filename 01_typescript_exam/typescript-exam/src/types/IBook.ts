// TODO : ./types/IBook.ts 책방객체명 (객체 자료형을 정의하는 파일)
export default interface IBook {
  /* //TODO: 자식 컴포넌트./pages/04_exam/ Book.js 객체변수  */
  // id: 1,
  // title: "어떻게 배울 것인가",
  // publisher: "비즈니스북스",
  // author: "존 맥스웰",
  // stock: 2,
  
  id?: number;
  title: string;
  publisher: string;
  author: string;
  stock: number;
}