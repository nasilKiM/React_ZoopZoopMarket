import { useEffect, useRef } from 'react';
import { Map } from 'react-kakao-maps-sdk';
const { kakao } = window;

const KaMap = ({ inputAddress }) => {
	const geocoder = new daum.maps.services.Geocoder();
	const place = new kakao.maps.services.Places();

	const placeSearch = (data, status, pagination) => {
		if (status === kakao.maps.services.Status.OK) {
			let bounds = new kakao.maps.LatLngBounds();
			for (let i = 0; i < data.length; i++) {
				displayMarker(data[i]);
				bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
			}

			map.setBounds(bounds);
		}
	};
	place.keywordSearch(inputAddress, placeSearch);

	const displayMarker = spot => {
		let marker = new kakao.maps.Marker({
			map,
			position: new kakao.maps.LatLng(spot.y, spot.x),
		});

		kakao.maps.event.addListener(marker, 'click', function () {
			infowindow.open(map, marker);
		});
	};

	useEffect(() => {
		const mapSection = useRef();
		const options = {
			center: new kakao.maps.LatLng(33.5563, 126.79581),
			level: 3,
		};

		const map = new kakao.maps.Map(mapSection, options);
		const geocoder = new kakao.maps.services.Geocoder();
		geocoder.addressSearch('서울시 강남구 도곡동', function (result, status) {
			if (status === kakao.maps.services.Status.OK) {
				const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
				const marker = new kakao.maps.Marker({
					map,
					position: coords,
				});

				map.setCenter(coords);
			}
		});
	}, []);

	// useEffect(() => {
	// 	const mapSection = useRef();
	// 	const options = {
	// 		center: new kakao.maps.LatLng(33.5563, 126.79581),
	// 		level: 3,
	// 	};

	// 	const map = new kakao.maps.Map(mapSection, options);
	// 	const geocoder = new kakao.maps.services.Geocoder();
	// 	geocoder.addressSearch('서울시 강남구 도곡동', function (result, status) {
	// 		if (status === kakao.maps.services.Status.OK) {
	// 			const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
	// 			const marker = new kakao.maps.Marker({
	// 				map,
	// 				position: coords,
	// 			});

	// 			map.setCenter(coords);
	// 		}
	// 	});
	// }, []);

	return (
		<Map ref={mapSection} style={{ width: '100%', height: '360px' }}>
			{/* <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}> */}
			{/* <div style={{ color: '#000' }}>거래 장소</div> */}
			{/* </MapMarker> */}
		</Map>
	);
};

export default KaMap;

/*
<input type="text" id="sample5_address" placeholder="주소">
<input type="button" onclick="sample5_execDaumPostcode()" value="주소 검색"><br>
<div id="map" style="width:300px;height:300px;margin-top:10px;display:none"></div>

<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 API KEY를 사용하세요&libraries=services"></script>
<script>
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center: new daum.maps.LatLng(37.537187, 127.005476), // 지도의 중심좌표
            level: 5 // 지도의 확대 레벨
        };

    //지도를 미리 생성
    var map = new daum.maps.Map(mapContainer, mapOption);
    //주소-좌표 변환 객체를 생성
    var geocoder = new daum.maps.services.Geocoder();
    //마커를 미리 생성
    var marker = new daum.maps.Marker({
        position: new daum.maps.LatLng(37.537187, 127.005476),
        map: map
    });


    function sample5_execDaumPostcode() {
        new daum.Postcode({
            oncomplete: function(data) {
                var addr = data.address; // 최종 주소 변수

                // 주소 정보를 해당 필드에 넣는다.
                document.getElementById("sample5_address").value = addr;
                // 주소로 상세 정보를 검색
                geocoder.addressSearch(data.address, function(results, status) {
                    // 정상적으로 검색이 완료됐으면
                    if (status === daum.maps.services.Status.OK) {

                        var result = results[0]; //첫번째 결과의 값을 활용

                        // 해당 주소에 대한 좌표를 받아서
                        var coords = new daum.maps.LatLng(result.y, result.x);
                        // 지도를 보여준다.
                        mapContainer.style.display = "block";
                        map.relayout();
                        // 지도 중심을 변경한다.
                        map.setCenter(coords);
                        // 마커를 결과값으로 받은 위치로 옮긴다.
                        marker.setPosition(coords)
                    }
                });
            }
        }).open();
    }
</script>
*/
