// TODO : ./types/IWebtoon.ts 웹툰객체명 (객체 자료형을 정의하는 파일)
export default interface IWebtoon {
  /* //TODO: 자식 컴포넌트./pages/04_exam/ WebtoonExam.js 객체변수  */
  // id: 1,
  // name: "햄스터와 그녀",
  // link: "https://webtoon.kakao.com/content/%ED%96%84%EC%8A%A4%ED%84%B0%EC%99%80-%EA%B7%B8%EB%85%80/1625?tab=episode",
  // img: "http://t1.daumcdn.net/webtoon/op/478cdf37f585607982ffa9e35b432e8503be8a54",
  // isUpdate: true,

  id?: number;
  name: string;
  link: string;
  img: string;
  isUpdate: boolean;
}
