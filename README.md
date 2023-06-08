## 👀 프로젝트 소개
<div align="center">
<img width="20%" src="https://github.com/Frontend-TEAM1/ZoopzoopMarket/assets/117559842/17ed16f5-694b-41c0-a38b-100d6bddaed0"/>
<br/>
<br/>
<br/>

   **줍줍마켓** 은 중고 거래 커머스 플랫폼입니다.<br/>
손쉽게 중고템 및 무료템을 검색하고 사고싶은 물건의 구매할 수 있고<br/>
내가 가진 아이템의 판매도 간편합니다.<br/>
실시간 채팅을 통한 거래가 가능하며, 거래내역을 바탕으로 투명한 시세 검색이 가능합니다.<br/>
마이페이지에서 가계부를 활용해 나의 거래내역을 확인하고<br/> 내가 구매한 아이템의 리뷰를 통한 판매자 신뢰도 평가도 가능합니다☺️
<br/>
<br/>
https://zoopzoop-market.vercel.app/
</div> 
<br/>

## 🖥️ 서비스 화면

<캡쳐화면>

## 🌳 프로젝트 폴더 구조

    * src
    	ㄴ@Socket
            ㄴsocket.js
        ㄴapis
            ㄴ@core.js
            ㄴchatApis.js
            ㄴmyPageApi.js
            ㄴproductApi.js
            ㄴreviewApi.js
            ㄴuserApi.js
        ㄴAtoms
    	ㄴreview.atom.js
        ㄴComponents
        ㄴAddress : 카카오맵을 통한 주소 설정
        ㄴAlert : alert, confirm, notification 모달 설정
        ㄴButtons : 공통 버튼 스타일 설정
    	ㄴCompletedBtn : 판매완료변경 버튼
    	ㄴEditBtns : 수정, 삭제 버튼
    	ㄴHeartBtn : 관심상품 설정/해제 버튼
    	ㄴMoreBtn : 상품 전체보기 버튼
    	ㄴRegisterBtn : 상품 등록 버튼
    	ㄴTopBtn : 페이지 상단으로 보내는 버튼
        ㄴCard : 아이템, 판매완료, 리뷰카드 설정
        ㄴChatMessage : 채팅메세 설정
        ㄴIcon : 유저 온도 설정
        ㄴInput : 입력창 설
        ㄴLayout : 공통 Header + Footer 설정
        ㄴLoading : 스켈레톤 설정 페이지 외 로딩설정
            ㄴMap : 카카오맵 지도 설정
            ㄴProfile : 유저 프로필 설정
            ㄴRecentCard : 최근 본 상품 설
            ㄴReview : 상대방 프로필 내 리뷰 설정(*작업전)
            ㄴScrollToTop : 전체페이지 상단으로 보내는 로직 설정
            ㄴSearchBar : 검색 입력 창 설정
            ㄴToggle : 마이페이지 내 메뉴 설정
    ㄴConsts
            ㄴFormType.js : Form 타입 공통 설정
            ㄴQueryKey : 쿼리  설정
    ㄴHooks/queries
            ㄴ@config.js : query config 공통설정
            ㄴget-chat-query.js : 채팅에 불러올 데이터 (useQuery) 설정
            ㄴget-infinite-query.js : (마이페이지, 검색결과) 무한스크롤 (useQuery) 설정
            ㄴget-mypage-mutation.js : 마이페이지에 불러올 데이터 (useMutation) 설정
            ㄴget-mypage-query.js : 마이페이지에 불러올 데이터 (useQuery) 설정
            ㄴget-product-mutation.js : 관심상품, 판매완료 시 불러올 데이터 (useMutation) 설정
            ㄴget-product-query.js : 상품 관련 페이지에 불러올 데이터 (useQuery) 설정
            ㄴnow-user-query.js : 유저 관련 페이지에 불러올 데이터 (useQuery) 설정
        ㄴPages
            ㄴChat : 채팅 관련 페이지
                ㄴChatDetail : 채팅 상세 페이지
                ㄴChatList : 채팅 목록(대화상대)
                ㄴMessage : 메세지 관련
                    ㄴComponents
                    	ㄴDateDivide.js
                    	ㄴMyChat.js
                    	ㄴYourChat.js
                    ㄴMessage.js
            ㄴItemDetail : 아이템 상세 페이지
                ㄴComponents
                    	ㄴAnotherProduct : 연관상품 관련
                    	ㄴDetailContent : 상세페이지 내 내용
                    	ㄴDetailHead : 상세페이지 이미지, 프로필영역
                ㄴBuyerDetail : 구매자용 페이지
                ㄴSellerDetail : 판매자용 페이지
            ㄴLanding : 랜딩페이지(첫화면)
    	ㄴForm
    		ㄴLogin : 로그인 페이지
    		ㄴSignUp : 회원가입 페이지
            ㄴMain : 로그인 이후 메인 페이지
                ㄴComponents
                    ㄴbannerAd.js : 배너광고 이미지 영역
                    ㄴcategory.js : 카테고리 검색 영역
                    ㄴpreview.js : 중고템, 무료템 슬라이더 영역
                ㄴChatList : 채팅 목록(대화상대)
            ㄴMarketPrice : 시세 페이지
                ㄴComponents
                    ㄴmyProfile.js : 그래프 차 영역
                    ㄴrecentSoldout.js : 최근거래 종료품목
            ㄴMyPage : 마이페이지
                ㄴComponents
                    ㄴmyProfile.js : 마이페이지 내 프로필 영역
                ㄴMyAccountBook : 마이페이지 내 가계부 영역
                    ㄴComponents
                    	ㄴdetailCard.js : 선택한 연/월 거래내역 표시 영역
                    	ㄴdetailInfo.js : 총 수입/지출내역 및 당월 수입/지출내역
                    	ㄴmock.js
                    	ㄴselector.js : 기간(연/월) 설정
                ㄴMyInterest : 마이페이지 내 관심템 영역
                ㄴMyItem : 마이페이지 내 아이템 영역
                ㄴMyReview : 마이페이지 구매 물품 리뷰 영역
                ㄴMyUserEdit : 마이페이지 내 정보 수정 영역
                    ㄴMyPasswordEdit : 내 정보 수정 - 비밀번호 수정 영역
            ㄴRegister : 아이템 등록/수정 페이지
                ㄴComponents
                    	ㄴcategorySelector : 카테고리 태그 등록 영역
                    	ㄴuploadFiles : 이미지 등록 영역
            ㄴReview : 리뷰 등록/수정 페이지
            ㄴSearchList : 검색결과를 불러오는 페이지
                    ㄴComponents
                    	ㄴfreeProduct.js : 무료템 리스트 불러오는 페이지
                    	ㄴsearchList.js : 검색결과 불러오는 페이지
                    	ㄴusedProduct.js : 중고템 리스트 불러오는 페이지
                    	ㄴwholeList.js : 전체, 무료템, 중고템 리스트 불러오는 페이지
            ㄴSkeleton : 스켈레톤 UI 처리 해둔 페이지 모음
                    ㄴcomponents
                    	ㄴbarSkeleton.js
                    	ㄴcardSkeleton.js
                    	ㄴprofileSkeleton.js
                    ㄴpage
                    	ㄴmainSkeleton.js : 메인페이지 스켈레톤
                    	ㄴmarketPriceSkele.js : 시세페이지 스켈레톤
                    	ㄴmyProfileSkele.js : 프로필 영역 스켈레톤
                    	ㄴsearchIndexSkele.js : 검색결과페이지 스켈레톤
                    	ㄴwholeListSkele.js : 전체, 무료템, 중고템 리스트 스켈레톤
            ㄴYourProfile : 상대방 프로필 페이지 (*작업중)
        ㄴRepository
            ㄴTokenService.js : 로그인 토큰 설정
        ㄴRoutes
            ㄴprivate.js : 로그인 토큰이 없으면 랜딩페이지로 보내는 라우팅 설정
            ㄴrouting.js : 전체 라우팅 설정
        ㄴstyles : 공통 스타일 설정

        -------------------------------------------
        * App.js
        * index.js

## 👪 팀원


### Backend

| 구현서 | 김나실 | 박선영 | 이주람 | 이재훈 | 장영승 |
| :----: | :----: | :----: | :----: | :----: | :----: |
|<img src="https://avatars.githubusercontent.com/u/117560047?v=4" width="90px"/>|<img src="https://avatars.githubusercontent.com/u/117559842?v=4" width="90px" />|<img src="https://avatars.githubusercontent.com/u/117560052?v=4" width="90px" />|<img src="https://avatars.githubusercontent.com/u/113501460?v=4" width="90px" />|<img src="https://avatars.githubusercontent.com/u/91282032?v=4" width="90px" />|<img src="https://avatars.githubusercontent.com/u/50819030?v=4" width="90px" />|
|[HyunseoKoo](https://github.com/HyunseoKoo)|[nasilKiM](https://github.com/nasilKiM)|[seonyeong719](https://github.com/seonyeong719)|[JuramLee](https://github.com/JuramLee)|[JaeHoonKOR](https://github.com/JaeHoonKOR)|[YoungSeungJang](https://github.com/YoungSeungJang)|

<br>



## 🛠️ 사용 기술 스택

    > FrontEnd : HTML / JavaScript / React
    > 라이브러리 : styled-component / styled-reset / husky / eslint / prettier / react-fontawesome / react-query
    > 협업도구 : Git + GitHub + Notion
    


## Browser Support
![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) |
--- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | 


## 협업방식

Notion을 통한 Daily 스크럼 + 스프린트 회의 + 칸반보드<br/>
<br/>
❣️Notion 주소 : https://www.notion.so/ZOOP-ZOOP-c505857b1d7a430e958a79533c3f391e?pvs=4
