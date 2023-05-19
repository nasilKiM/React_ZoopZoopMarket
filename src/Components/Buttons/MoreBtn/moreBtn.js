import { Button } from "../style";

// 검색 페이지에는 대표 상품 8개만 보여줄 예정. 전체 상품이 8개 이상일 경우, 해당 버튼 클릭하면 페이지 전환되어(?) 전체 상품 리스트를 무한스크롤링으로 보여줌.
const MoreBtn = () => {
    return(
        <Button variant={'primary'} shape={'shape1'} size={'size1'}>상품 전체보기</Button>
    )
}

export default MoreBtn();

/* 집꾸미기 사이트 참고
    position: static;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 188px;
    height: 58px;
    padding: 17px;
    border-radius: 500px;
    border: 1.5px solid rgb(197, 200, 206);
    margin: 0px;
    background: rgb(255, 255, 255);
    font-weight: normal;
    font-size: 1rem;
    color: black;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
*/